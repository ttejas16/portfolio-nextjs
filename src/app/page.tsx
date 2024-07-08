import Image from 'next/image'
import Border from '../components/Border'
import Header from '../components/Header'
import ProjectWrapper from '../components/ProjectWrapper'
import Stack from '@/components/Stack'
import About from '@/components/About'
import Contact from '@/components/Contact'

import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { IconObject } from '../../types/types'

const socialIcons: IconObject[] = [
    {
        name: "Instagram",
        icon: BsInstagram,
        link: "https://instagram.com/ttejas16",
    },
    {
        name: "Github",
        icon: BsGithub,
        link: "https://github.com/ttejas16",
    },
    {
        name: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/tejas-jagtap-49862723b/",
    },
]

export default function Home() {
    return (
        <section id="home"
            className="px-[2em] pt-[4em] xl:px-[5em] xl:pt-[5em] w-full flex flex-col justify-start items-center">
            <Border className='left-0 p-1' icons={socialIcons} />
            <Border className='right-0 px-4' />
            <Header />
            <section className="flex flex-col justify-center items-center xl:flex-row xl:items-end gap-x-8 px-3 py-5">
                <ProjectWrapper />
                <Stack />
            </section>
            <About />
            <Contact />
        </section>
    )
}
