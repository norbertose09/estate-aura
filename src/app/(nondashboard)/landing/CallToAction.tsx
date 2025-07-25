"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="relative py-40">
      <Image
        src={"/landing-call-to-action.jpg"}
        alt="Estate Aura Search Section Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 mt-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h2 className="text-2xl font-bold text-white">
                Find Your Dream Rental Property
              </h2>
            </div>

            <div>
              <p className="text-white mb-3">
                Discover a wide range of rental Properties in your location
              </p>
              <div className="flex justify-center md:justify-start gap-4 items-center mt-2">
                <Button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-primary-700 bg-white rounded-lg px-6 py-4 font-semibold hover:bg-primary-500 hover:text-primary-50"
                >
                  Search
                </Button>
                <Link
                  href={"/signup"}
                  className="text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600"
                  scroll={false}
                >
                  sign Up
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
