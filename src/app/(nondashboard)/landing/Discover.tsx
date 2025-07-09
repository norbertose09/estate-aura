"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Discover = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={containerVariants}
      viewport={{ once: true, amount: 0.8 }}
      className="py-12 bg-white mb-16"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find your dream property today!
          </p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
            Explore our wide range of tailored properties to fit your lifestyle
            and needs. Whether you're looking for a cozy apartment or a spacious
            house, we have something for everyone.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Explore Our Listings",
              desc: "Browse through a wide range of rental listings with detailed information and high-quality images",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Schedule a Viewing",
              desc: "Easily book a viewing appointment for your favorite properties at your convenience",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Save Your Favorites",
              desc: "Keep track of properties you love by saving them to your favorites list for easy access later",
            },
          ].map((card, index) => (
            <motion.div key={index + 1} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  desc,
}: {
  imageSrc: string;
  title: string;
  desc: string;
}) => (
  <div className="px- py-12 shadow-lg rounded0lg bg-primary-50 md:h-72">
    <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
      <Image src={imageSrc} height={30} width={30} alt={title} />
    </div>
    <h3 className="mt-4 text-xl font-meium text-gray-800">{title}</h3>
    <p className="mt-2 text-base text-gray-500 px-2">{desc}</p>
  </div>
);

export default Discover;
