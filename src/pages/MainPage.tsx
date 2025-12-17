import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Certifications from '../components/Certifications/Certifications';
import Skills from '../components/Skills/Skills';

const MainPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-bgc">
            <Header />
            <Banner />
            <main className="px-8 md:px-18 lg:px-46 py-48">
                <Projects />
                <About />
                <Certifications />
                <Skills />
            </main>
        </div>
    );
};

export default MainPage;
