"use client";
// Remove web dev icons, import 3D software and tool icons
import { FaBlender, FaUnity } from "react-icons/fa";
import {
  SiUnrealengine,
  SiSubstack,
  SiAdobephotoshop,
  SiAdobeaftereffects,
} from "react-icons/si";
import { RiSketching } from "react-icons/ri";
// You might need to install `react-icons/gi` for Game Icons
import { GiMaterialsScience } from "react-icons/gi";

// experience data
const experince = {
  icon: "",
  title: "My Experience",
  description:
    "I create photorealistic 3D visualizations for architectural projects, from concept to final render. I specialize in modeling, texturing, lighting, and post-production to bring exterior and interior designs to life for clients, architects, and marketers.",
  items: [
    {
      company: "Freelance",
      position: "3D Exterior & Interior Visualizer",
      duration: "2020.05.01 - Present",
    },
  ],
};

// education data
export const education = {
  icon: "graduation-cap",
  title: "My Education",
  description:
    "Specialized training in 3D visualization (interior & exterior) with Autodesk-certified coursework. Continuously improving skills in 3Ds Max, Corona Renderer, Photoshop, After Effects, and Marvelous Designer.",
  items: [
    {
      institution: "3D Club,Ekaterinburg, Russia",
      degree: "3D Visualizer — Interior & Exterior",
      duration: "24.06.2023", // add year if you want (e.g., "2022")
    },
    {
      institution: "3D Club,Ekaterinburg, Russia",
      degree: "Certified Specialist (Visualization)",
      duration: "24.06.2023", // add year if you want
    },
  ],
};

// skills data
const skills = {
  title: "My Skills & Tools",
  description:
    "Proficient in the full 3D pipeline: high-poly modeling, UV unwrapping, PBR texturing, lighting, rendering, and post-production. Focused on creating efficient, realistic, and visually compelling imagery.",
  skillList: [
    {
      icon: <FaBlender />, // For Blender
      name: "Blender",
    },
    {
      icon: <SiUnrealengine />, // For Unreal Engine
      name: "Unreal Engine",
    },
    {
      icon: <SiSubstack />, // Commonly used for 3ds Max
      name: "3ds Max",
    },
    {
      icon: <SiAdobephotoshop />, // For Photoshop (essential for post-processing)
      name: "Photoshop",
    },
    {
      icon: <GiMaterialsScience />, // Represents Substance Painter/Designer
      name: "Substance Suite",
    },
    {
      icon: <SiAdobeaftereffects />, // For After Effects (for animations)
      name: "After Effects",
    },
    {
      icon: <FaUnity />, // For Unity (another real-time tool)
      name: "Unity",
    },
    {
      icon: <RiSketching />, // Represents sketching or concepting
      name: "Concept Art",
    },
    // Add more skills like V-Ray, Corona, AutoCAD, etc., as needed.
  ],
};

// about data
const about = {
  title: "About me",
  description:
    "I’m a Frontend Developer focused on crafting clean, accessible, and high‑performance web apps with React/Next.js. I love turning complex ideas into simple, usable interfaces that drive real business impact.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bakhtiyor Usmonov",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+998) 93 654 52 38",
    },
    {
      fieldName: "Experience",
      fieldValue: "4 years",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@baxtiyoru",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Uzbek",
    },
    {
      fieldName: "Email",
      fieldValue: "baxtiyoru1996@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Russian,Uzbek",
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{experince.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experince.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experince.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[270px] min-h-[50px] text-center lg:text-left">
                            {item.duration}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full ">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
