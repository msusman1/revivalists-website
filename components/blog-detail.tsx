"use client"

import {useRouter} from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin} from "lucide-react"
import {motion} from "framer-motion"

interface BlogPost {
    slug: string
    title: string
    description: string
    content: string
    image: string
    author: string
    publishDate: string
    readTime: string
    category: string
    tags: string[]
}

interface BlogDetailProps {
    post: BlogPost
}

export default function BlogDetail({post}: BlogDetailProps) {
    const router = useRouter()

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const shareUrl = typeof window !== "undefined" ? window.location.href : ""
    const shareText = `Check out this article: ${post.title}`

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
    }

    const shareOnTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            "_blank",
        )
    }

    const shareOnLinkedIn = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank")
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header with back button */}
            <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <Button
                        onClick={() => router.back()}
                        variant="ghost"
                        className="text-white hover:text-[#f7bd00] hover:bg-gray-800"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2"/>
                        Back to Blogs
                    </Button>
                </div>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="relative h-[60vh] overflow-hidden"
            >
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="container mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#f7bd00] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
                            <p className="text-xl text-gray-200 mb-6 leading-relaxed">{post.description}</p>

                            {/* Meta information */}
                            <div className="flex flex-wrap items-center gap-6 text-gray-300">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4"/>
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4"/>
                                    <span>{formatDate(post.publishDate)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4"/>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="lg:col-span-3"
                        >
                            <div
                                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#f7bd00]
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-blockquote:border-l-4 prose-blockquote:border-[#f7bd00]
                  prose-blockquote:bg-gray-900/50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg
                  prose-blockquote:text-gray-200 prose-blockquote:italic
                  prose-ul:text-gray-300 prose-li:mb-2
                  prose-strong:text-white"
                                dangerouslySetInnerHTML={{__html: post.content}}
                            />
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="lg:col-span-1"
                        >
                            <div className="sticky top-24 space-y-8">
                                {/* Share Section */}
                                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <Share2 className="h-5 w-5 text-[#f7bd00]"/>
                                        Share Article
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                        <button
                                            onClick={shareOnFacebook}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                                        >
                                            <Facebook className="h-5 w-5"/>
                                            <span>Facebook</span>
                                        </button>
                                        <button
                                            onClick={shareOnTwitter}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors"
                                        >
                                            <Twitter className="h-5 w-5"/>
                                            <span>Twitter</span>
                                        </button>
                                        <button
                                            onClick={shareOnLinkedIn}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-blue-700 hover:bg-blue-800 transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5"/>
                                            <span>LinkedIn</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Tags Section */}
                                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <Tag className="h-5 w-5 text-[#f7bd00]"/>
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-[#f7bd00] hover:text-black transition-colors cursor-pointer"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Author Section */}
                                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                                    <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="w-12 h-12 bg-[#f7bd00] rounded-full flex items-center justify-center">
                                            <User className="h-6 w-6 text-black"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">{post.author}</h4>
                                            <p className="text-gray-400 text-sm">Contributing Writer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        A dedicated scholar and writer committed to exploring the intersection of
                                        traditional wisdom and
                                        contemporary challenges.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Related Articles Section */}
            <div className="bg-gray-900/30 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                            Related <span className="text-[#f7bd00]">Articles</span>
                        </h2>
                        <div className="text-center">
                            <Link href="/#blogs">
                                <Button className="bg-[#f7bd00] hover:bg-[#e0ac00] text-black font-bold px-8 py-3">
                                    View All Articles
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
