import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import EventSingle from '../../components/EventSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const EventPageSingle =() => {
    return(
        <Fragment>
             <Head>
                <title>Event Single</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Single Event'} pagesub={'Education for All Children'}/> 
            <EventSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPageSingle;
