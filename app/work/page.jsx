"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import icon
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaBehanceSquare,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorksSliderBtns from "../../components/WorksSliderBtns";

const projects = [
  {
    num: "01",
    category: "Exterior",
    title: "project 1",
    description:
      "Responsive landing page with semantic HTML, modern CSS, and vanilla JS interactions—optimized for performance and accessibility.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job1.png",
    live: "https://www.behance.net/gallery/222488227/Exteriors/modules/1269983893",
    github: "https://www.behance.net/gallery/222488227/Exteriors",
  },
  {
    num: "02",
    category: "Exterior",
    title: "project 2",
    description:
      "Interactive dashboard featuring reusable components, charts, and stateful UI—clean layout and mobile‑first design.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job2.png",
    live: "https://www.behance.net/gallery/181961245/3D-vizualizacija-eksterera/modules/1027884645",
    github:
      "https://www.behance.net/gallery/181961245/3D-vizualizacija-eksterera",
  },
  {
    num: "03",
    category: "Interior",
    title: "project 3",
    description:
      "E‑commerce front end with product listings, filters, and cart UI—fast UX, accessible forms, and clear micro‑interactions.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job3.png",
    live: "https://www.behance.net/gallery/181960877/3D-vizualizacija-interera/modules/1027882703",
    github:
      "https://www.behance.net/gallery/181960877/3D-vizualizacija-interera",
  },
  {
    num: "04",
    category: "Exterior",
    title: "project 4",
    description:
      "Portfolio SPA with smooth animations, route transitions, and component‑driven architecture—focused on readability and reuse.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job4.png",
    live: "https://www.behance.net/gallery/177032985/Church-in-the-mountains/modules/999906397",
    github: "https://www.behance.net/gallery/177032985/Church-in-the-mountains",
  },
  {
    num: "05",
    category: "Interior",
    title: "project 5",
    description:
      "Blog/CMS UI with article cards, pagination, and search—clean typography, dark mode, and keyboard‑friendly navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job5.png",
    live: "https://www.behance.net/gallery/173665863/interer-Ikea/modules/980463931",
    github: "https://www.behance.net/gallery/173665863/interer-Ikea",
  },
  {
    num: "06",
    category: "Exterior",
    title: "project 5",
    description:
      "Blog/CMS UI with article cards, pagination, and search—clean typography, dark mode, and keyboard‑friendly navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job6.png",
    live: "https://www.behance.net/gallery/172304199/Private-house/modules/972515337",
    github: "https://www.behance.net/gallery/172304199/Private-house",
  },
  {
    num: "07",
    category: "Exterior",
    title: "project 5",
    description:
      "Blog/CMS UI with article cards, pagination, and search—clean typography, dark mode, and keyboard‑friendly navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job7.png",
    live: "https://www.behance.net/gallery/158527661/minimalist-house/modules/894430321",
    github: "https://www.behance.net/gallery/158527661/minimalist-house",
  },
  {
    num: "08",
    category: "Interior",
    title: "project 5",
    description:
      "Blog/CMS UI with article cards, pagination, and search—clean typography, dark mode, and keyboard‑friendly navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job8.png",
    live: "https://www.behance.net/gallery/158527149/inrerior-design/modules/894427795",
    github: "https://www.behance.net/gallery/158527149/inrerior-design",
  },
  {
    num: "09",
    category: "Interior",
    title: "project 5",
    description:
      "Blog/CMS UI with article cards, pagination, and search—clean typography, dark mode, and keyboard‑friendly navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job9.png",
    live: "https://www.behance.net/gallery/158525503/living-room-design/modules/894419103",
    github: "https://www.behance.net/gallery/158525503/living-room-design",
  },
  {
    num: "10",
    category: "Interior",
    title: "project 5",
    description:
      "Blog/CMS UI with article cards, pagination, and search—clean typography, dark mode, and keyboard‑friendly navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job10.png",
    live: "https://www.behance.net/gallery/158524249/inrerior-design-3d/modules/894412707",
    github: "https://www.behance.net/gallery/158524249/inrerior-design-3d",
  },
  {
    num: "11",
    category: "Interior",
    title: "project 5",
    description:
      "Blog/CMS UI with article cards, pagination, and search—clean typography, dark mode, and keyboard‑friendly navigation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/job11.png",
    live: "https://www.behance.net/gallery/114649191/interer-dizajnerov-doma/modules/654600227",
    github: "https://www.behance.net/gallery/114649191/interer-dizajnerov-doma",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isCarouselEnabled, setIsCarouselEnabled] = useState(true);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based in current slide index
    setProject(projects[currentIndex]);
    setActiveIndex(currentIndex);
  };

  const handleGoTo = (index) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(index);
    setProject(projects[index]);
    setActiveIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline none */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60 ">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {/* remove the last command  */}
                      {index != project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className=" border-white/20 border"> </div>

              <div className="flex items-center gap-4 ">
                {/*live project buttons */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*guthub project buttons */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaBehanceSquare className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Behance repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] xl:h-[460px] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 "
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              allowTouchMove={isCarouselEnabled}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10  "></div>
                      {/* image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          all=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <div
                className={`${
                  !isCarouselEnabled ? "pointer-events-none opacity-50" : ""
                }`}
              >
                <WorksSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition rounded transition-all  "
                  disablePrev={activeIndex === 0}
                  disableNext={activeIndex === projects.length - 1}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
