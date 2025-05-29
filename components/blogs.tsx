"use client"

import {useState} from "react"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ChevronLeft, ChevronRight} from "lucide-react"



import Link from "next/link"
import {blogPosts} from "@/data/BlogsData";

export default function Blogs() {
    const [ref, inView] = useInView({
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


    const [currentIndex, setCurrentIndex] = useState(0)
    const maxIndex = Math.max(0, blogPosts.length - (window?.innerWidth >= 1024 ? 3 : window?.innerWidth >= 640 ? 2 : 1))

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    }

    return (
        <section id="blogs" className="py-20 bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f7bd00]/50 to-transparent"></div>
            <div className="absolute top-40 -right-40 w-80 h-80 bg-[#f7bd00]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 -left-40 w-80 h-80 bg-[#f7bd00]/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
                        Our <span className="text-[#f7bd00]">Blogs</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-[#f7bd00] mx-auto mb-10"></motion.div>
                    <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300 text-lg">
                        Explore our latest articles and insights on Islamic knowledge, culture, and contemporary issues.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Carousel Navigation */}
                    <div className="flex justify-end gap-2 mb-6">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-2 rounded-full ${
                                currentIndex === 0
                                    ? "bg-gray-800 text-gray-600"
                                    : "bg-gray-800 text-white hover:bg-[#f7bd00] hover:text-black"
                            } transition-colors`}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-6 w-6"/>
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className={`p-2 rounded-full ${
                                currentIndex === maxIndex
                                    ? "bg-gray-800 text-gray-600"
                                    : "bg-gray-800 text-white hover:bg-[#f7bd00] hover:text-black"
                            } transition-colors`}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-6 w-6"/>
                        </button>
                    </div>

                    {/* Blog Cards */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / (blogPosts.length <= 3 ? blogPosts.length : 3))}%)`,
                            }}
                        >
                            {blogPosts.map((blog, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                    <div
                                        className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#f7bd00]/30 transition-all duration-300 h-full">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={blog.image || "/placeholder.svg"}
                                                alt={blog.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-3 text-white">{blog.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{blog.description}</p>
                                            <Link href={`/blog/${blog.slug}`}>
                                                <Button variant="outline"
                                                        className="border-[#f7bd00] text-[#f7bd00] hover:bg-[#f7bd00]/10">
                                                    Read More
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
