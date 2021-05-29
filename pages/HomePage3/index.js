import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero3 from '../../components/hero3'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import WorldSection from '../../components/world'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const HomePage3 =() => {
    return(
        <Fragment>
             <Head>
                <title>Home Page 3</title>
            </Head>
            <Header/>
            <Hero3/>
            <Mission subclass={'section-padding'}/>
            <About/>
            <CaseSlide/>
            <CounterSection countclass={'wpo-counter-style-2'}/>
            <TeamSection/>
            <WorldSection worldclass={'wpo-world-area-2'}/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;