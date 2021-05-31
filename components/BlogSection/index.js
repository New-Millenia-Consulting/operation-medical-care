import Link from "next/link";

const BlogSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="wpo-blog-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Our Blog</span>
              <h2>Latest News</h2>
            </div>
          </div>
        </div>
        <div className="blog-section">
          <div className="blog-grids">
            <div className="grid">
              <div className="entry-media">
                <img src="images/blog/img-1.jpg" alt="" />
                <div className="tag"> Medical</div>
              </div>
              <div className="entry-details">
                <h3>
                  <Link href="/BlogDetails">
                    Many Children are suffering a lot for food.
                  </Link>
                </h3>
                <ul>
                  <li>
                    <i className="ti-user"></i>
                    By: Developer
                  </li>
                  <li>
                    <i className="ti-comment-alt"></i>
                    Comments (<span className="comment">0</span>)
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <div className="entry-media">
                <img src="images/blog/img-2.jpg" alt="" />
                <div className="tag"> Poor People</div>
              </div>
              <div className="entry-details">
                <h3>
                  <Link href="/BlogDetails">
                    Be soft and kind for the poor people.
                  </Link>
                </h3>
                <ul>
                  <li>
                    <i className="ti-user"></i>
                    By: Developer
                  </li>
                  <li>
                    <i className="ti-comment-alt"></i>
                    Comments (<span className="comment">0</span>)
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid">
              <div className="entry-media">
                <img src="images/blog/img-3.jpg" alt="" />
                <div className="tag">Help</div>
              </div>
              <div className="entry-details">
                <h3>
                  <Link href="/BlogDetails">
                    Be kind for the poor people and the kids.
                  </Link>
                </h3>
                <ul>
                  <li>
                    <i className="ti-user"></i>
                    By: Developer
                  </li>
                  <li>
                    <i className="ti-comment-alt"></i>
                    Comments (<span className="comment">0</span>)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
