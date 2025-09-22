"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Item } from "@radix-ui/react-select";

const services = [
  {
    num: "01",
    title: "Exterior Visualization",
    desctiption:
      "Create photorealistic 3D renderings of building exteriors, landscapes, and architectural projects. From concept to final image, I focus on accurate lighting, materials, and environment to showcase your design in its best light.",
    href: "",
  },
  {
    num: "02",
    title: "Interior Visualization",
    desctiption:
      "Bring interior spaces to life with high-quality 3D renders. I specialize in crafting realistic lighting moods, detailed textures, and authentic furnishings to create compelling and inviting visualizations for presentations and marketing.",
    href: "",
  },
  {
    num: "03",
    title: "3D Modeling & Texturing",
    desctiption:
      "Build accurate and optimized 3D models of architecture, furniture, and props. I create high-quality, tileable textures and materials to ensure realism and detail in every scene.",
    href: "",
  },
  {
    num: "04",
    title: "Animation & Walkthroughs",
    desctiption:
      "Produce dynamic video flythroughs and walkthroughs that tell a story. Animate cameras, lighting, and elements to create an immersive experience that allows clients to explore the space before it's built.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex  justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60 ">{item.desctiption}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full  "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
