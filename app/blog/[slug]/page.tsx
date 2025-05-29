import { notFound } from "next/navigation"
import BlogDetail from "@/components/blog-detail"
import {blogPosts} from "@/data/BlogsData";



export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    return <BlogDetail post={post} />
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((post) => post.slug === params.slug)

    if (!post) {
        return {
            title: "Blog Post Not Found",
        }
    }

    return {
        title: `${post.title} | Revivalists Blog`,
        description: post.description,
    }
}
