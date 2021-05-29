import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import EventSection2 from '../../components/event2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const EventPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Event</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Our Event'} pagesub={'Event'}/> 
            <EventSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;
