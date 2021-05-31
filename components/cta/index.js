import Link from "next/link";

const CtaSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className={`wpo-cta-area ${props.ctaclass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wpo-cta-text">
              <h2>You Can Help The Poor With Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse{" "}
              </p>
              <div className="btns">
                <Link onClick={ClickHandler} href="/DonatePage">
                  <a className="theme-btn">Donate Now</a>
                </Link>
                <Link onClick={ClickHandler} href="/">
                  <a className="theme-btn-s2">Join Us Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
