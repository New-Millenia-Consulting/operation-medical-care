import React from 'react';
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo'


const BlogFullwidth = () => {

    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-md-12">
                        <div className="wpo-wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src='images/blog/img-4.jpg' alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetails"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-calendar"></i> Jan 25,2021</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetails">Help the helpless who need you.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/BlogDetails" ><a className="read-more">Read More...</a></Link>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src='images/blog/img-5.jpg' alt=""/>
                                    <div className="video-btn2">
                                        <VideoModal/>
                                    </div>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetails"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-calendar"></i> Jan 25,2021</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetails">They are waiting for your help.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/BlogDetails" ><a className="read-more">Read More...</a></Link>
                            </div>
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src='images/blog/img-6.jpg' alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetails"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-calendar"></i> Jan 25,2021</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetails"><a>Help the helpless who need you.</a></Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/BlogDetails" ><a className="read-more">Read More...</a></Link>
                            </div>

                            <div className="post format-quote">
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetails"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-calendar"></i> Jan 25,2021</a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetails">They are waiting for your help.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/BlogDetails" aria-label="Previous">
                                            <a><i className="fi ti-angle-left"></i></a>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/BlogDetails"><a>1</a></Link></li>
                                    <li><Link href="/BlogDetails"><a>2</a></Link></li>
                                    <li><Link href="/BlogDetails"><a>3</a></Link></li>
                                    <li><Link href="/BlogDetails"><a>4</a></Link></li>
                                    <li>
                                        <Link href="/BlogDetails" aria-label="Next">
                                          <a><i className="fi ti-angle-right"></i></a> 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default BlogFullwidth;
