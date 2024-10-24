'use client';

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Differences() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        }, {
            threshold: 0.8,
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="px-16 py-32 text-center">
            <h1 className="font-bold text-5xl">
                Diferenças entre a lei <span className="text-orange-500">8.666 </span>
                e a lei <span className="text-orange-500">14.133</span>
            </h1>

            <motion.div
                className="pt-20"
                ref={sectionRef}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ staggerChildren: 0.5, duration: 1 }}
            >
                <div>
                    <h5 className="text-orange-500 pb-10 font-semibold">Lei 8.666/1993</h5>
                    <motion.div
                        id="diferenças"
                        className="flex flex-row items-center justify-center gap-5"
                        variants={itemVariants}
                    >
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/requisição.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">Requisição</p>
                        </div>
                        <span className="w-32 h-1 bg-zinc-800"></span>
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/tr.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">Termo de ref.</p>
                        </div>
                        <span className="w-32 h-1 bg-zinc-800"></span>
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/edital.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">Edital</p>
                        </div>
                    </motion.div>
                </div>

                <div>
                    <h5 className="text-orange-500 py-10 font-semibold">Lei 14.133/2021</h5>
                    <motion.div
                        className="flex flex-row items-center justify-center gap-5"
                        variants={itemVariants}
                    >
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/requisição.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">DFD</p>
                        </div>
                        <span className="w-32 h-1 bg-zinc-800"></span>
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/pca.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">PCA</p>
                        </div>
                        <span className="w-32 h-1 bg-zinc-800"></span>
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/etp.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">ETP</p>
                        </div>
                        <span className="w-32 h-1 bg-zinc-800"></span>
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/tr.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">Termo de ref.</p>
                        </div>
                        <span className="w-32 h-1 bg-zinc-800"></span>
                        <div className="h-[174px] flex justify-end flex-col">
                            <span className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center">
                                <Image src={'/edital.png'} width={70} height={70} alt="" />
                            </span>
                            <p className="font-semibold py-1">Edital</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
