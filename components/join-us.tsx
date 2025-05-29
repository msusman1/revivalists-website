"use client"

import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Apple, SmartphoneIcon as Android} from "lucide-react"
import Link from "next/link";

export default function JoinUs() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [statsRef, statsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: {y: 30, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const stats = [
        {label: "Members", value: "2200+"},
        {label: "Since", value: "2021"},
        {label: "Universities", value: "50+"},
    ]

    return (
        <section id="join" className="py-20 bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f7bd00]/50 to-transparent"></div>
            <div className="absolute top-40 -left-40 w-80 h-80 bg-[#f7bd00]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 -right-40 w-80 h-80 bg-[#f7bd00]/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
                        Become a <span className="text-[#f7bd00]">Revivalist</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-[#f7bd00] mx-auto mb-10"></motion.div>
                    <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300 text-lg">
                        Join the Revivalist movement today and be part of shaping the future. Download our app now to
                        access a
                        wealth of resources, engage with like-minded individuals, and contribute to the revival of
                        Islamic culture
                        and intellect. Take the first step towards a brighter tomorrow.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    {/* App Screenshots */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full">
                            <div
                                className="absolute top-0 left-0 w-[280px] h-[570px] bg-gray-800 rounded-3xl shadow-2xl transform -rotate-6 z-10">
                                <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                                    <Image
                                        src="/screenshot1.png?height=1200&width=600"
                                        alt="Revivalist App Screenshot"
                                        width={600}
                                        height={1200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div
                                className="absolute top-10 right-0 w-[280px] h-[570px] bg-gray-800 rounded-3xl shadow-2xl transform rotate-6 z-0">
                                <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                                    <Image
                                        src="/screenshot2.png?height=1200&width=600"
                                        alt="Revivalist App Screenshot"
                                        width={600}
                                        height={1200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Download Links */}
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="flex flex-col items-center md:items-start"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Download Our App</h3>
                        <p className="text-gray-300 mb-8 text-center md:text-left">
                            Access exclusive content, connect with our community, and stay updated with the latest
                            events and
                            resources.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={"https://youtu.be/VBFW8esYv5M"} target={"_blank"}>
                                <Button
                                    className="bg-[#f7bd00] hover:bg-[#e0ac00] text-black font-bold px-6 py-6 flex items-center gap-2 transition-transform hover:scale-105">
                                    <Apple className="h-6 w-6"/>
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs">Download on the</span>
                                        <span className="text-lg font-bold">App Store</span>
                                    </div>
                                </Button>
                            </Link>

                            <Link href={"https://play.google.com/store/apps/details?id=org.therevivalists.app"}
                                  target={"_blank"}>
                                <Button
                                    className="bg-[#f7bd00] hover:bg-[#e0ac00] text-black font-bold px-6 py-6 flex items-center gap-2 transition-transform hover:scale-105">
                                    <Android className="h-6 w-6"/>
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs">Get it on</span>
                                        <span className="text-lg font-bold">Google Play</span>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Take the First Step */}
                <div
                    className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 p-10 rounded-2xl border border-gray-800 shadow-2xl mb-20">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#f7bd00]">Take the First Step</h3>
                        <h4 className="text-xl md:text-2xl font-semibold mb-6 text-white">Explore a Path to
                            Revival!</h4>
                        <p className="text-gray-300 mb-8">
                            Empower yourself with knowledge and clarity. Let us guide you through the process of
                            reclaiming values,
                            strengthening identities, and shaping a brighter future. Begin this transformative journey
                            with us today
                            and become a part of the revival.
                        </p>
                        <Button
                            className="bg-[#f7bd00] hover:bg-[#e0ac00] text-black font-bold px-8 py-6 text-lg transition-transform hover:scale-105">
                            Join Us
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    ref={statsRef}
                    initial="hidden"
                    animate={statsInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-10 text-center">
                        Why Join Us
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center hover:border-[#f7bd00]/30 transition-all duration-300"
                            >
                                <h4 className="text-4xl font-bold text-[#f7bd00] mb-2">{stat.value}</h4>
                                <p className="text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
