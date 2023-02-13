import React from 'react'
import Features from './components/features'
import Hero from './components/hero'
import History from './components/History'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Container from './templates/Container'

const App = () => {

    return (
        <>
            <Hero />
            <Features />
            <History />
            <Tokenomics />
            <Roadmap />
        </>
    )
}

export default App