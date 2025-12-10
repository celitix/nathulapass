"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NathulaSectionRight() {
  return (
    <section className="flex flex-col lg:flex-row bg-black text-white  items-center justify-center overflow-hidden">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-6 md:px-12 py-12 text-center flex justify-center">
        <p className="font-lato text-gray-200 leading-relaxed text-base md:text-lg lg:text-xl max-w-lg">
          The ancient silk route passed through Nathula pass. The snowcapped
          mountain and the warm culture of this place will get you memories to
          take back home. Feel the pride of Nation at Nathula.
        </p>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 relative h-64 md:h-[400px] "
      >
        <Image
          src="/assets/rightslide.jpg" 
          alt="Nathula Pass"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
