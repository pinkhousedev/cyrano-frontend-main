"use client";
import type { PageData } from "@/interfaces/page.interface";
import type { Section } from "@/interfaces/section.interface";
import { motion } from "framer-motion";
import SubNav from "../Shared/SubNav";

interface AboutUsLayoutProps {
  page: PageData;
}

export default function AboutUsLayout({ page }: AboutUsLayoutProps) {
  console.log("page", page)
  // Handle both 'sections' and 'Blocks' arrays from Strapi
  const sections = (page as any).sections || (page as any).Blocks || [];

  const renderSection = (section: any) => {
    switch (section.__component) {
      case "sections.sections-text-image":
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center py-10">
              <div className={section.reversed ? "md:order-2" : ""}>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {section.title || "About Us"}
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  {section.subtitle || "Discover our story and mission"}
                </p>
                {section.richText && (
                  <div className="text-gray-300 leading-relaxed">
                    {Array.isArray(section.richText) && section.richText.map((block: any, index: number) => (
                      <div key={index} className="mb-4">
                        {block.type === "paragraph" && (
                          <p>{block.children?.[0]?.text || ""}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {section.image && (
                <div className={section.reversed ? "md:order-1" : ""}>
                  <img
                    src={section.image.url}
                    alt={section.image.alternativeText || "About Us"}
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              )}
            </div>
          </motion.div>
        );

      case "sections.about-us-hero":
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              {section.title || "About Us"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {section.subtitle || "Discover our story and mission"}
            </p>
          </motion.div>
        );

      case "sections.about-us-content":
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
                  {section.title || "Our Mission"}
                </h2>
                <div 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: section.content || "We are dedicated to innovation and excellence." 
                  }}
                />
              </div>
              {section.image && (
                <div className="relative">
                  <img
                    src={section.image.url}
                    alt={section.image.alternativeText || "About Us"}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </div>
          </motion.div>
        );

      case "sections.about-us-team":
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {section.title || "Our Team"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {section.teamMembers?.map((member: any, index: number) => (
                <motion.div
                  key={member.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  {member.avatar && (
                    <img
                      src={member.avatar.url}
                      alt={member.avatar.alternativeText || member.name}
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
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {section.title || "Why Choose Us"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.cards?.map((card: any, index: number) => (
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
            sections.map((section: any) => renderSection(section))
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
                  Has Blocks: {(page as any).Blocks ? "Yes" : "No"}
                </p>
                <p className="text-gray-300 mb-4">
                  Has Sections: {(page as any).sections ? "Yes" : "No"}
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
