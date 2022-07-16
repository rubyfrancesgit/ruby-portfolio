import React from 'react'
import ArcadeIntro from '../components/ArcadeIntro'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import PersonalProjects from '../components/PersonalProjects'
import ProgrammingToolbelt from '../components/ProgrammingToolbelt'
import SchoolProjects from '../components/SchoolProjects'

function Home() {
    return (
        <>
            <Landing />
            <ProgrammingToolbelt />
            <PersonalProjects />
            <SchoolProjects />
            <ArcadeIntro />
            <Contact />
        </>
    )
}

export default Home
