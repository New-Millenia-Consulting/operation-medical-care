import Link from "next/link";

const TeamSection = (props) => {
  return (
    <div className="wpo-team-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Meet Our Team</span>
              <h2>Our Expert Volunteer</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
            <div className="wpo-team-wrap">
              <div className="wpo-team-img">
                <img src="images/team/team-1.jpg" alt="" />
              </div>
              <div className="wpo-team-content">
                <div className="wpo-team-text-sub">
                  <h2>
                    <Link href="/volunteerPage">
                      <a>Smith Tomkin</a>
                    </Link>{" "}
                  </h2>
                  <span>CEO & Founder</span>
                  <ul>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-google"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
            <div className="wpo-team-wrap">
              <div className="wpo-team-img">
                <img src="images/team/team-2.jpg" alt="" />
              </div>
              <div className="wpo-team-content">
                <div className="wpo-team-text-sub">
                  <h2>
                    <Link href="/volunteerPage">
                      <a>Robert Honey</a>
                    </Link>
                  </h2>
                  <span>Volunteer</span>
                  <ul>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-google"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
            <div className="wpo-team-wrap">
              <div className="wpo-team-img">
                <img src="images/team/team-3.jpg" alt="" />
              </div>
              <div className="wpo-team-content">
                <div className="wpo-team-text-sub">
                  <h2>
                    <Link href="/volunteerPage">
                      <a>Juliya Jossoy</a>
                    </Link>
                  </h2>
                  <span>Volunteer</span>
                  <ul>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-google"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteerPage">
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
