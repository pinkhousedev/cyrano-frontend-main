"use server";

import {
  GlobalData,
  PageData,
  StrapiResponse,
} from "@/interfaces/page.interface";
import { StrapiImage } from "@/interfaces/section.interface";
import { getLocale } from "./locale";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

type NextFetchInit = RequestInit & {
  next?: {
    revalidate?: number;
    tags?: string[];
  };
};

// Mock data for development when Strapi is not available
function getMockPageData(slug: string, locale: string): PageData {
  return {
    id: 1,
    documentId: "mock-home",
    title: "Welcome to Your App",
    slug: slug,
    description: "This is a mock page while setting up the backend",
    metaTitle: "Welcome - Your App",
    metaDescription: "Welcome to your application",
    pageType: "home",
    locale: locale,
    sections: [], // Empty sections array to avoid rendering issues
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export async function getPage(slug: string): Promise<PageData | null> {
  try {
    const locale = await getLocale();
    if (!locale) {
      console.error("Locale not found");
      return getMockPageData(slug, "en");
    }
    
    // If Strapi URL is not configured, return mock data for development
    if (!strapiUrl) {
      console.warn("Strapi URL not configured, using mock data for development");
      return getMockPageData(slug, locale);
    }

    const url =
      `${strapiUrl}/api/pages?filters[slug][$eq]=${encodeURIComponent(slug)}` +
      `&locale=${encodeURIComponent(locale)}` +
      `&populate=*`;

    const res = await fetch(
      url,
      {
        cache: "force-cache",
        next: {
          revalidate: 60,
          tags: [`page-${slug}-${locale}`],
        },
      } as NextFetchInit
    );

    if (!res.ok) {
      console.warn(`Page fetch failed: ${res.status} ${res.statusText}. Using mock data.`);
      return getMockPageData(slug, locale);
    }

    const response: StrapiResponse<PageData[]> = await res.json();
    return response.data && (response.data as unknown as PageData[]).length > 0
      ? (response.data as unknown as PageData[])[0]
      : getMockPageData(slug, locale);
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    console.warn("Falling back to mock data");
    return getMockPageData(slug, "en");
  }
}

export async function getGlobalSettings(): Promise<GlobalData | null> {
  if (!strapiUrl) {
    console.warn("Strapi URL not configured, using default values");
    return getDefaultGlobalData();
  }

  try {
    const res = await fetch(
      `${strapiUrl}/api/global?populate=*`,
      {
        cache: "force-cache",
        next: {
          revalidate: 60,
          tags: ["global-settings"],
        },
      } as NextFetchInit
    );

    if (!res.ok) {
      console.warn(`Global settings fetch failed: ${res.status} ${res.statusText}, using default values`);
      return getDefaultGlobalData();
    }

    const response: StrapiResponse<GlobalData> = await res.json();
    const incoming = response.data as unknown as Partial<GlobalData> | null;
    const defaults = getDefaultGlobalData();
    if (!incoming) return defaults;
    return {
      ...defaults,
      ...incoming,
      navigation: incoming.navigation ?? defaults.navigation,
      FooterLinks: incoming.FooterLinks ?? defaults.FooterLinks,
      socialLinks: incoming.socialLinks ?? defaults.socialLinks,
    } as GlobalData;
  } catch (error) {
    console.error("Error fetching global settings:", error);
    return getDefaultGlobalData();
  }
}

function getDefaultGlobalData(): GlobalData {
  return {
    id: 1,
    documentId: "default",
    siteName: "Your Website",
    favicon: null as StrapiImage | null,
    navigation: [
      {
        id: 1,
        label: "userlayout1",
        url: "/user-type1"
      },
      {
        id: 2,
        label: "userlayout2",
        url: "/user-type2"
      },
      {
        id: 3,
        label: "GIFT MEETUPS",
        url: "/gift-meetups"
      },
      {
        id: 4,
        label: "GET THE ANDROID APP",
        url: "/android-app"
      }
    ],
    FooterLinks: [],
    socialLinks: []
  };
}

export async function getAllPageSlugs(): Promise<string[]> {
  if (!strapiUrl) {
    console.warn("Strapi URL not configured, returning mock slugs");
    return ["home-page", "about", "contact"];
  }

  try {
    const res = await fetch(
      `${strapiUrl}/api/pages?fields[0]=slug&pagination[pageSize]=1000`,
      {
        cache: "force-cache",
        next: {
          revalidate: 60,
          tags: ["page-slugs"],
        },
      } as NextFetchInit
    );

    if (!res.ok) {
      console.error(`Failed to fetch page slugs: ${res.status} ${res.statusText}`);
      return [];
    }

    const response: StrapiResponse<PageData[]> = await res.json();
    const items = (response.data as unknown as PageData[]) || [];
    return items.map((page) => page.slug).filter(Boolean);
  } catch (error) {
    console.error("Error fetching page slugs:", error);
    return [];
  }
}
