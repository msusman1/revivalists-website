"use client"

import {useState, useEffect} from "react"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import Image from "next/image"
import {ChevronLeft, ChevronRight, Pause, Play} from "lucide-react"

const events = [
    {
        title: "Save Gaza Campaign",
        description: "Pakistanis urge government to take ‘decisive action’ for Gaza ceasefire, delivery of humanitarian aid",
        image: "/event1.jpg"
    },
    {
        title: "COMSAT Islamabad",
        description: "How to deal with modern ideologies",
        image: "/event2.jpg"
    }
]
export default function Events() {
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


    // State for each carousel
    const [currentIndices, setCurrentIndices] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)


    // Auto-play functionality

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndices((prevIndex) => (prevIndex + 1) % events.length);
            }, 4000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isPlaying, events.length]);


    const nextSlide = () => {
        setCurrentIndices((prevIndex) => {

            return (prevIndex + 1) % events.length
        })
    }

    const prevSlide = () => {
        setCurrentIndices((prevIndices) => {
            return (prevIndices - 1 + events.length) % events.length
        })
    }

    const togglePlayPause = () => {
        setIsPlaying((prevPlaying) => {
            return !prevPlaying
        })
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndices(() => {
            return slideIndex
        })
    }

    return (
        <section id="events" className="py-20 bg-black relative overflow-hidden">
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
                        Events & <span className="text-[#f7bd00]">Activities</span>
                    </motion.h2>
                    <motion.div variants={itemVariants} className="w-24 h-1 bg-[#f7bd00] mx-auto mb-10"></motion.div>
                    <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300 text-lg">
                        Discover our impactful events and activities across communities and universities.
                    </motion.p>
                </motion.div>

                <div className="space-y-20">

                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="relative"
                    >
                        {/* Carousel Title and Controls */}
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Recent Events</h3>
                            <div className="flex items-center gap-4">
                                {/* Play/Pause Button */}
                                <button
                                    onClick={() => togglePlayPause()}
                                    className="p-2 rounded-full bg-gray-800 text-white hover:bg-[#f7bd00] hover:text-black transition-colors"
                                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                                >
                                    {isPlaying ? <Pause className="h-5 w-5"/> :
                                        <Play className="h-5 w-5"/>}
                                </button>

                                {/* Navigation buttons */}
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => prevSlide()}
                                        className="p-2 rounded-full bg-gray-800 text-white hover:bg-[#f7bd00] hover:text-black transition-colors"
                                        aria-label="Previous slide"
                                    >
                                        <ChevronLeft className="h-5 w-5"/>
                                    </button>
                                    <button
                                        onClick={() => nextSlide()}
                                        className="p-2 rounded-full bg-gray-800 text-white hover:bg-[#f7bd00] hover:text-black transition-colors"
                                        aria-label="Next slide"
                                    >
                                        <ChevronRight className="h-5 w-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Container */}
                        <div
                            className="relative bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
                            {/* Main Carousel */}
                            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out h-full"
                                    style={{
                                        transform: `translateX(-${currentIndices * 100}%)`,
                                    }}
                                >
                                    {events.map((event, imageIndex) => (
                                        <div key={imageIndex} className="w-full h-full flex-shrink-0 relative">
                                            <Image
                                                src={event.image || "/placeholder.svg"}
                                                alt={`${event.title} ${imageIndex + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={imageIndex === 0}
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

                                            {/* Slide Content Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <div className="max-w-2xl">
                                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                        {event.title}
                                                    </h4>
                                                    <p className="text-gray-200 text-sm md:text-base">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <button
                                    onClick={() => prevSlide()}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-[#f7bd00] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="h-6 w-6"/>
                                </button>
                                <button
                                    onClick={() => nextSlide()}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-[#f7bd00] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="h-6 w-6"/>
                                </button>
                            </div>

                            {/* Indicators */}
                            <div
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                                {events.map((event, imageIndex) => (
                                    <button
                                        key={imageIndex}
                                        onClick={() => goToSlide(imageIndex)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            currentIndices === imageIndex
                                                ? "bg-[#f7bd00] w-8"
                                                : "bg-gray-400 hover:bg-gray-300"
                                        }`}
                                        aria-label={`Go to slide ${imageIndex + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Progress Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                                <div
                                    className="h-full bg-[#f7bd00] transition-all duration-300"
                                    style={{
                                        width: `${((currentIndices + 1) / events.length) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
                            {events.map((event, imageIndex) => (
                                <button
                                    key={imageIndex}
                                    onClick={() => goToSlide(imageIndex)}
                                    className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                        currentIndices === imageIndex
                                            ? "border-[#f7bd00] scale-110"
                                            : "border-gray-600 hover:border-gray-400"
                                    }`}
                                >
                                    <Image
                                        src={event.image || "/placeholder.svg"}
                                        alt={`Thumbnail ${imageIndex + 1}`}
                                        width={80}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                    )
                </div>
            </div>
        </section>
    )
}
