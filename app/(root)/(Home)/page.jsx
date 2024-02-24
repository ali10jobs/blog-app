import Search from "@/components/Search"
import Hero from "@/components/Hero"
import OurClients from "@/components/OurClients"
import Statistics from "@/components/Statistics"
import PopularPosts from "@/components/PopularPosts"
import OurTeam from "@/components/OurTeam"
import Faq from "@/components/Faq"
const page = () => {
    return (
        <div>
            <section>
                <Search />
            </section>
            <section>
                <Hero />
            </section>
            <section className='mt-20'>
                <OurClients />
            </section>
            <section className='mt-20'>
                <Statistics />
            </section>
            <section className='mt-20'>
                <PopularPosts />
            </section>
            <section className='mt-20'>
                <OurTeam />
            </section>
            {/* <section className='mt-20'>
                <Faq />
            </section> */}
        </div>
    )
}

export default page
