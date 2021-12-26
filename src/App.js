import React from 'react'
import './app.css';

import {Blog, Features, Footer, Header, WhatGPT3, Possibility} from './containers';
import {CTA, Brand, NavBar} from './components';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
