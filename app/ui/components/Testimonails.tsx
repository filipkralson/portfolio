"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import Link from "next/link";
import { Motion } from "@/app/ui/motion";

const ecospirit = {
    title:
        "Design, grafika a kompletace eshopu",
    description:
        "Při vytváření nového vzhledu eshopu na platformě upgates jsem potřeboval pomocnou ruku. Design stránek a jejich kompletaci jsem nechal převážně na něm. Výsledky byly již za pár dní. Spolupráci můžu jen doporučit!",
    author: {
        name: "Jaroslav Fajt",
        position: "Majitel eshopů Urban Master a Eco Spirit"
    },
    images: [
        "/img_ecospirit_1.png",
        "/img_ecospirit_2.png",
        "/img_ecospirit_3.png",
        "/img_ecospirit_4.png",
        "/img_ecospirit_5.png",
    ]
};

const TestimonialsBase = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === ecospirit.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? ecospirit.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
                <div className="max-w-3xl">
                    <h3 className="mb-6 pb-4 text-xl md:text-3xl font-bold text-viridian">
                        {ecospirit.title}
                    </h3>
                    <div className="w-full mb-6">
                        <p className="text-viridian/90">{ecospirit.description}</p>
                    </div>
                    <div className="flex items-center mb-10">
                        <p className="font-bold mr-3 text-viridian">{ecospirit.author.name}</p>
                        <p className="text-viridian/75">{ecospirit.author.position}</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center max-w-xl">
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col md:flex-row justify-center">
                                <button className="mb-10 md:mb-0 md:text-base md:mr-5 h-full rounded-md bg-viridian px-6 py-4 text-center font-bold text-mintCream">
                                    <Link href="https://www.ecospirit.cz" target="_blank" className="w-full h-full flex gap-2 items-center" >
                                        Odkaz na eshop
                                        <FaExternalLinkAlt className="text-mintCream" />
                                    </Link>
                                </button>
                                <div className="flex items-center justify-center gap-3">
                                    <button
                                        onClick={handlePrevious}
                                        className="rounded-full transition-colors duration-200 hover:bg-viridian/60 active:bg-viridian group"
                                    >
                                        <FaArrowLeft
                                            className="text-2xl p-2 text-viridian group-active:text-mintCream"
                                            size="50"
                                        />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="rounded-full transition-colors duration-200 hover:bg-viridian/60 active:bg-viridian group"
                                    >
                                        <FaArrowRight
                                            className="text-2xl p-2 text-viridian group-active:text-mintCream"
                                            size="50"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-10 md:mt-0 gap-2 justify-center items-center">
                            {ecospirit.images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-2.5 w-2.5 rounded-full object-cover transition-colors duration-300 ${
                                        index === currentImageIndex
                                            ? "bg-viridian"
                                            : "bg-gray-300"
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative md:max-w-xl shadow-lg md:h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={ecospirit.images[currentImageIndex]}
                                width={1920}
                                height={1080}
                                className="aspect-video"
                                priority
                                alt=""
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default function Testimonials() {
    return (
        <div className="flex flex-col gap-5 max-w-full">
            <Motion direction="down" duration={0.3} delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-bold mb-20 text-cambridgeBlue text-center">Recenze klientů</h1>
            </Motion>
            <Motion direction="up" duration={0.5} delay={0.2}>
                <TestimonialsBase/>
            </Motion>
        </div>
    );
}