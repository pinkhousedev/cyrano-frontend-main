"use client";
import type { PageData } from "@/interfaces/page.interface";
import type { Section } from "@/interfaces/section.interface";
import { motion } from "framer-motion";
import Image from "next/image";
import SubNav from "../Shared/SubNav";

interface AboutUsLayoutProps {
  page: PageData;
}

// Proper interfaces for the specific section types
interface TextImageSection {
  id: number;
  title: string;
  subtitle: string;
  richText?: Array<{
    type: string;
    children?: Array<{ text: string }>;
  }>;
  image?: {
    url: string;
    alternativeText?: string;
  } | null;
  reversed?: boolean;
}

interface AboutUsHeroSection {
  id: number;
  title?: string;
  subtitle?: string;
}

interface AboutUsContentSection {
  id: number;
  title?: string;
  content?: string;
  image?: {
    url: string;
    alternativeText?: string;
  } | null;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio?: string;
  avatar?: {
    url: string;
    alternativeText?: string;
  } | null;
}

interface AboutUsTeamSection {
  id: number;
  title?: string;
  teamMembers?: TeamMember[];
}

interface FlipCard {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

interface FlipSection {
  id: number;
  title?: string;
  cards?: FlipCard[];
}

export default function AboutUsLayout({ page }: AboutUsLayoutProps) {
  console.log("page", page)
  // Handle both 'sections' and 'Blocks' arrays from Strapi
  const sections = (page as { sections?: Section[]; Blocks?: Section[] }).sections || (page as { sections?: Section[]; Blocks?: Section[] }).Blocks || [];

  const renderSection = (section: Section) => {
    switch (section.__component) {
      case "sections.sections-text-image":
        const textImageSection = section as TextImageSection;
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center py-10">
              <div className={textImageSection.reversed ? "md:order-2" : ""}>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {textImageSection.title || "About Us"}
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  {textImageSection.subtitle || "Discover our story and mission"}
                </p>
                {textImageSection.richText && (
                  <div className="text-gray-300 leading-relaxed">
                    {Array.isArray(textImageSection.richText) && textImageSection.richText.map((block, index: number) => (
                      <div key={index} className="mb-4">
                        {block.type === "paragraph" && (
                          <p>{block.children?.[0]?.text || ""}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {textImageSection.image && (
                <div className={textImageSection.reversed ? "md:order-1" : ""}>
                  <Image
                    src={textImageSection.image.url}
                    alt={textImageSection.image.alternativeText || "About Us"}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              )}
            </div>
          </motion.div>
        );

      case "sections.about-us-hero":
        const heroSection = section as AboutUsHeroSection;
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              {heroSection.title || "About Us"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {heroSection.subtitle || "Discover our story and mission"}
            </p>
          </motion.div>
        );

      case "sections.about-us-content":
        const contentSection = section as AboutUsContentSection;
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {contentSection.title || "Our Mission"}
                </h2>
                <div 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: contentSection.content || "We are dedicated to innovation and excellence." 
                  }}
                />
              </div>
              {contentSection.image && (
                <div className="relative">
                  <Image
                    src={contentSection.image.url}
                    alt={contentSection.image.alternativeText || "About Us"}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </div>
          </motion.div>
        );

      case "sections.about-us-team":
        const teamSection = section as AboutUsTeamSection;
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {teamSection.title || "Our Team"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamSection.teamMembers?.map((member, index: number) => (
                <motion.div
                  key={member.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  {member.avatar && (
                    <Image
                      src={member.avatar.url}
                      alt={member.avatar.alternativeText || member.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{member.position}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "sections.flip-section":
        const flipSection = section as FlipSection;
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {flipSection.title || "Why Choose Us"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flipSection.cards?.map((card, index: number) => (
                <motion.div
                  key={card.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  {card.icon && (
                    <div className="text-4xl mb-4 text-blue-400">
                      {card.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 p-6 bg-white/5 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {section.__component}
            </h3>
            <pre className="text-gray-300 text-sm overflow-auto">
              {JSON.stringify(section, null, 2)}
            </pre>
          </motion.div>
        );
    }
  };

  return (
    <main className="w-full overflow-x-hidden pb-10">
      <SubNav />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {sections && sections.length > 0 ? (
            sections.map((section: Section) => renderSection(section))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                No content available from the backend yet.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Debug Information
                </h2>
                <p className="text-gray-300 mb-4">
                  Page ID: {page.id}
                </p>
                <p className="text-gray-300 mb-4">
                  Page Type: {page.pageType}
                </p>
                <p className="text-gray-300 mb-4">
                  Sections Count: {sections?.length || 0}
                </p>
                <p className="text-gray-300 mb-4">
                  Has Blocks: {(page as { Blocks?: Section[] }).Blocks ? "Yes" : "No"}
                </p>
                <p className="text-gray-300 mb-4">
                  Has Sections: {(page as { sections?: Section[] }).sections ? "Yes" : "No"}
                </p>
                <pre className="text-gray-300 text-sm overflow-auto bg-black/20 p-4 rounded">
                  {JSON.stringify(page, null, 2)}
                </pre>
              </div>
            </motion.div>
          )}
          
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
