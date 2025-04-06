import { motion as Motion } from "framer-motion";
import React from "react";
const App = () => {
    return (
        <section className="grid h-screen place-content-center gap-2 bg-blue-300 px-8 text-black">
            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">Linkedin</FlipLink>
            <FlipLink href="#">Facebook</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
        </section>
    );
};

export default App;

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href }) => {
    return (
        <Motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
            style={{
                lineHeight: 0.85,
            }}
        >
            <div>
                {children.split("").map((l, i) => {
                    return (
                        <Motion.span
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </Motion.span>
                    );
                })}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => {
                    return (
                        <Motion.span
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </Motion.span>
                    );
                })}
            </div>
        </Motion.a>
    );
};
