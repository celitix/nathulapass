"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NathulaSectionLeft() {
  return (
    <section className="flex flex-col lg:flex-row bg-black text-white  items-center justify-center overflow-hidden">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 relative h-64 md:h-[400px]"
      >
        <Image
          src="/assets/leftslide.jpg" 
          alt="Nathula Pass"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-6 md:px-12 py-12 text-center flex justify-center">
        <p className="font-lato text-gray-200 leading-relaxed text-base md:text-lg lg:text-xl max-w-lg">
      If you love to travel and you are an Indian, Passes in Himalayas should definitely be on your top charts. Mountain passes in India give you a mixed feeling of both travel and patriotism.
        </p>
      </div>
    </section>
  );
}
