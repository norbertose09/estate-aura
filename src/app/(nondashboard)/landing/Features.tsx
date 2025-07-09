"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={containerVariants}
      viewport={{ once: true }}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-20 md:mb-12 w-full sm:w-2/3 mx-auto"
        >
          Discover the Features that Make Estate Aura Your Ideal Rental Partner
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeaturesCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Trust worthy and verified listings",
                    "Browse Rental Listings with ease",
                    "Simplify your rental search with advanced",
                  ][index]
                }
                desc={
                  [
                    "Discover the best rental options with users reviews and verified listings",
                    "Browse through a wide range of rental listings with detailed information and high-quality images",
                    "Simplify your rental search with advanced filters and personalized recommendations",
                  ][index]
                }
                linkText={["Explore", "Search", "Discover"][index]}
                linkHref={["/explore", "/search", "/discover"][index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesCard = ({
  imageSrc,
  title,
  desc,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  desc: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className="text-center mb-16 md:mb-0">
    <div className="p-4 rounded-lg mb-16 md:mb-0 flex items-center justify-center h-48">
      <Image src={imageSrc} height={400} width={400} alt={title} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{desc}</p>
    <Link
      href={linkHref}
      className="inline-block border border-gray-300 rounded py-2 px-4 hover:bg-gray-100"
      scroll={false}
    >
      {linkText}
    </Link>
  </div>
);

export default Features;
