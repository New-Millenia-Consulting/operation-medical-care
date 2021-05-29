import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar'


const BlogDetailsLeft = () => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
     }
    return(
        <section className="wpo-blog-single-section section-padding">
        <div className="container">
            <div className="row">
                <BlogSidebar/>
                <div className="col col-lg-8 col-12">
                    <div className="wpo-wpo-blog-content clearfix">
                        <div className="post">
                            <div className="entry-media">
                                <img src='images/blog/img-4.jpg' alt=""/>
                            </div>
                            <ul className="entry-meta">
                                <li><Link href="/BlogDetails"><a><img src='images/blog/admin.jpg' alt=""/>  By Admin</a></Link></li>
                                <li><Link href="/BlogDetails"><a><i className="ti-calendar"></i> Jan 25,2021</a></Link></li>
                                <li><Link href="/BlogDetails"><a><i className="ti-heart"></i> 35</a></Link></li>
                            </ul>
                            <h2>Help the helpless who need you.</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </blockquote>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                        </div>
                        <div className="tag-share clearfix">
                            <div className="tag">
                                <ul>
                                    <li><Link href="/BlogDetails"><a>Business</a></Link></li>
                                    <li><Link href="/BlogDetails"><a>Marketing</a></Link></li>
                                    <li><Link href="/BlogDetails"><a>SEO</a></Link></li>
                                </ul>
                            </div>
                            <div className="share">
                                <ul>
                                    <li><Link href="/BlogDetails"><a><i className="ti-facebook"></i></a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-twitter-alt"></i></a></Link></li>
                                    <li><Link href="/BlogDetails"><a><i className="ti-instagram"></i></a></Link></li>
                                </ul>
                            </div>
                        </div> 
                        <div className="author-box">
                            <div className="author-avatar">
                                <Link href="/BlogDetails" target="_blank"><a><img src='images/blog-details/author.jpg' alt=""/></a></Link>
                            </div>
                            <div className="author-content">
                                <Link href="/BlogDetails" ><a className="author-name">Henry Joyes</a></Link>
                                <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                <div className="author-btn">
                                    <Link href="/BlogDetails"><a>All Post From Author</a></Link>
                                </div>
                            </div>
                        </div> 
                        <div className="more-posts clearfix">
                            <div className="previous-post">
                                <Link href="/BlogDetails">
                                    <span className="post-control-link">Previous</span>
                                </Link>
                            </div>
                            <div className="next-post">
                                <Link href="/BlogDetails">
                                    <span className="post-control-link">Next post</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="comments-area">
                        <div className="comments-section">
                            <h3 className="comments-title">Comments</h3>
                            <ol className="comments">
                                <li className="comment even thread-even depth-1" id="comment-1">
                                    <div id="div-comment-1">
                                        <div className="comment-theme">
                                            <div className="comment-image"> <img src='images/blog-details/comments-author/img-1.jpg' alt=""/> </div>
                                        </div>
                                        <div className="comment-main-area">
                                            <div className="comment-wrapper">
                                                <div className="comments-meta">
                                                    <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                </div>
                                                <div className="comment-area">
                                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                    <div className="comments-reply">
                                                        <Link  href="/BlogDetails"><a className="comment-reply-link"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="children">
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"> <img src='images/blog-details/comments-author/img-2.jpg' alt=""/></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>Lily Watson <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                            <div className="comments-reply">
                                                                <Link href="/BlogDetails"><a className="comment-reply-link"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><img src='images/blog-details/comments-author/img-3.jpg' alt=""/> </div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                    <div className="comments-reply">
                                                                        <Link  href="/BlogDetails"><a className="comment-reply-link"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div> 
                    <div className="comment-respond">
                        <h3 className="comment-reply-title">Leave a Comment</h3>
                        <form method="post" id="commentform" className="comment-form" onSubmit={SubmitHandler}>
                            <div className="form-inputs">
                                <input placeholder="Name" type="text"/>
                                <input placeholder="Email" type="email"/>
                                <input placeholder="Website" type="url"/>
                            </div>
                            <div className="form-textarea">
                                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                            </div>
                            <div className="form-submit">
                                <input id="submit" value="Reply" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
     )
        
}

export default BlogDetailsLeft;
