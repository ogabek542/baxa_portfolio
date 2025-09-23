"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  const handleDownloadPDF = async () => {
    try {
      const response = await fetch("/assets/pdf/Baxtiyor-compressed.pdf");

      if (!response.ok) {
        throw new Error("PDF file not found");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "BaxtiyorUsmonov.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF. Please try again.");
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Exterior & Interior 3D Visualizer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Bakhtiyor Usmonov</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant and realistic digital visualizations,
              specializing in exterior and interior design. Proficient in modern
              3D visualization tools and technologies, I transform concepts into
              compelling visual experiences.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadPDF}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order:none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
