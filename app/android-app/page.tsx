import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageDataBySlug, getPageMetadata } from "@/controllers/pageController";
import AndroidAppLayout from "@/components/layouts/AndroidAppLayout";

// Generate metadata for the Android App page
export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata("android-app");
  return metadata;
}

// Default function for the Android App page
export default async function AndroidAppPage() {
  // Fetch the Android App page data using the controller
  const page = await getPageDataBySlug("android-app");
  
  // If page is not found, return 404
  if (!page) {
    notFound();
  }
  
  return (
    <div className="mx-auto dark:bg-zinc-900">
      <AndroidAppLayout page={page} />
    </div>
  );
}

// Enable ISR with a revalidation period
export const revalidate = 60;
