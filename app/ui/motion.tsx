"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, ElementType, } from "react";

interface MotionProps {
    children: ReactNode;
    duration?: number;
    distance?: number;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    as?: ElementType;
    className?: string;
}

export function Motion({
                                   children,
                                   duration = 0.5,
                                   distance = 50,
                                   delay = 0,
                                   direction = "up",
                                   as: Tag = "div",
                                   className,
                               }: MotionProps) {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
            x:
                direction === "left" ? distance : direction === "right" ? -distance : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    };

    const MotionTag = motion.create(Tag);

    return (
        <MotionTag
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={variants}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </MotionTag>
    );
}

export function FloatingDiv({ delay, children }: { delay: number; children: ReactNode }) {
    return (
        <motion.div
            initial={{
                y: -20,
            }}
            animate={{
                y: [ -20, 20 ],
            }}
            whileHover={{ scale: 1.1 }}
            transition={{
                duration: 2,
                delay: delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}