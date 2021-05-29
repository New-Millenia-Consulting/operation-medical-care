import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import BlogDetailsFullwidth from '../../components/BlogDetailsFullwidth'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const BlogDetailsFull =() => {
    return(
        <Fragment>
             <Head>
                <title>Blog Details Fullwidth</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogDetailsFullwidth/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsFull;