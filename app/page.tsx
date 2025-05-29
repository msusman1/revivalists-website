import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import JoinUs from "@/components/join-us"
import Blogs from "@/components/blogs"
import Events from "@/components/events"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar/>
            <Hero/>
            <AboutUs/>
            <Blogs/>
            <Events/>
            <JoinUs/>
            <Footer/>
        </main>
    )
}
