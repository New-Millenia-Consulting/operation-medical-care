import React from "react";
import Link from "next/link";
import HeaderTopbar from "../HeaderTopbar";
import MobileMenu from "../../components/MobileMenu";

const Header = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="middle-header header-style-3">
      <HeaderTopbar />
      <div className="container">
        <div className="header-content">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
              <div className="logo">
                <Link href="/" title="">
                  <a>
                    <img src="images/logo.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-lg-block d-none">
              <nav>
                <ul>
                  <li>
                    <Link className="active" href="/" title="">
                      Home
                    </Link>
                    <ul>
                      <li>
                        <Link className="active" href="/">
                          Home style 1
                        </Link>
                      </li>
                      <li>
                        <Link href="/HomePage2">Home style 2</Link>
                      </li>
                      <li>
                        <Link href="/HomePage3">Home style 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/AboutPage" title="">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/CasePage" title="">
                      Causes
                    </Link>
                    <ul>
                      <li>
                        <Link href="/CasePage" title="">
                          Causes
                        </Link>
                      </li>
                      <li>
                        <Link href="/CaseSinglePage" title="">
                          Causes Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/EventPage" title="">
                      Event
                    </Link>
                    <ul>
                      <li>
                        <Link href="/EventPage" title="">
                          Event
                        </Link>
                      </li>
                      <li>
                        <Link href="/EventPageSingle" title="">
                          Event Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/" title="">
                      Pages
                    </Link>
                    <ul>
                      <li>
                        <Link href="/AboutPage" title="">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/DonatePage" title="">
                          Donate
                        </Link>
                      </li>
                      <li>
                        <Link href="/volunteerPage" title="">
                          Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link href="/ErrorPage" title="">
                          Error 404
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/BlogPage">Blog</Link>
                    <ul>
                      <li>
                        <Link href="/BlogPage">Blog</Link>
                      </li>
                      <li>
                        <Link href="/BlogPageLeft">Blog Left sidebar</Link>
                      </li>
                      <li>
                        <Link href="/BlogPageFullwidth">Blog full width</Link>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <Link href="/BlogDetails" title="">
                          Blog Details
                        </Link>
                        <ul>
                          <li>
                            <Link href="/BlogDetails" title="">
                              Blog single
                            </Link>
                          </li>
                          <li>
                            <Link href="/BlogDetailsLeftSiide" title="">
                              Blog single Left sidebar
                            </Link>
                          </li>
                          <li>
                            <Link href="/BlogDetailsFull" title="">
                              Blog single full width
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/ContactPage" title="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-1 col-md-6 col-sm-6 col-6">
              <div className="contact">
                <div className="cart-search-contact">
                  <div className="header-search-form-wrapper">
                    <button className="search-toggle-btn">
                      <i className="fi flaticon-magnifying-glass"></i>
                    </button>
                    <div className="header-search-form">
                      <form onSubmit={SubmitHandler}>
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search here..."
                          />
                          <button type="submit">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button className="cart-toggle-btn">
                      {" "}
                      <i className="fi flaticon-shopping-bag"></i>{" "}
                      <span className="cart-count">02</span>
                    </button>
                    <div className="mini-cart-content">
                      <div className="mini-cart-items">
                        <div className="mini-cart-item clearfix">
                          <div className="mini-cart-item-image">
                            <Link href="/">
                              <img
                                src="images/shop/mini-cart/img-1.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="mini-cart-item-des">
                            <Link href="/">Hoodi with zipper</Link>
                            <span className="mini-cart-item-price">$20.15</span>
                            <span className="mini-cart-item-quantity">x 1</span>
                          </div>
                        </div>
                        <div className="mini-cart-item clearfix">
                          <div className="mini-cart-item-image">
                            <Link href="/">
                              <img
                                src="images/shop/mini-cart/img-2.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="mini-cart-item-des">
                            <Link href="/">Ninja T-shirt</Link>
                            <span className="mini-cart-item-price">$13.25</span>
                            <span className="mini-cart-item-quantity">x 2</span>
                          </div>
                        </div>
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">$215.14</span>
                        <Link href="/">
                          <a className="view-cart-btn theme-btn"> View Cart</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <MobileMenu />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
