import React from "react";
import "./style.css";

function CoreTeam() {
  return (
    <section className="bs-usa-core-team-section mt-5">
      <div className=" w-full">
        <div className="flex w-full">
          <div className="">
            <div className="bs-usa-core-team-div">
              <div className="bs-usa-core-team-heading">
                <h2>Meet Core Team</h2>
              </div>
              <div className="flex flex-wrap bs-usa-core-team-profile-row">
                <div className="w-full sm:w-1/2 md:w-1/3 p-2 bs-usa-core-team-profile">
                  <img
                    src="https://www.startupfino.com/frontend/assets/usimage/karan-malhotra-founder.png"
                    alt="karan malhotra"
                  />
                  <p className="bs-usa-core-team-founder-name">
                    Karan Malhotra{" "}
                    <a
                      href="https://www.linkedin.com/in/karan-malhotra-488b6446/"
                      target="_blank"
                    >
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </p>
                  <p className="bs-usa-core-team-founder">Co-Founder</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-2 bs-usa-core-team-profile">
                  <img
                    src="https://www.startupfino.com/frontend/assets/usimage/deepak-malhotra-founder.png"
                    alt="deepak malhotra"
                  />
                  <p className="bs-usa-core-team-founder-name">
                    Deepak Malhotra{" "}
                    <a
                      href="https://www.linkedin.com/in/deepak-malhotra-652563114/"
                      target="_blank"
                    >
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </p>
                  <p className="bs-usa-core-team-founder">Co-Founder</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-2 bs-usa-core-team-profile">
                  <img
                    src="https://www.startupfino.com/frontend/assets/usimage/ben-white-ai.png"
                    alt="Ben White"
                  />
                  <p className="bs-usa-core-team-founder-name">
                    Ben White{" "}
                    <a
                      href="https://www.linkedin.com/in/ben-30561b20/"
                      target="_blank"
                    >
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </p>
                  <p className="bs-usa-core-team-founder">
                    Director Business Growth
                  </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-2 bs-usa-core-team-profile">
                  <img
                    src="https://www.startupfino.com/frontend/assets/usimage/Matthew-Wilson-ai.png"
                    alt="Matthew Wilson"
                  />
                  <p className="bs-usa-core-team-founder-name">
                    Matthew Wilson
                  </p>
                  <p className="bs-usa-core-team-founder">Head of Operations</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-2 bs-usa-core-team-profile">
                  <img
                    src="https://www.startupfino.com/frontend/assets/usimage/David Martinez-ai.png"
                    alt="David Martinez"
                  />
                  <p className="bs-usa-core-team-founder-name">
                    David Martinez
                  </p>
                  <p className="bs-usa-core-team-founder">
                    Director of Client Engagement
                  </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-2 bs-usa-core-team-profile">
                  <img
                    src="https://www.startupfino.com/frontend/assets/usimage/Emily-Carter-ai.png"
                    alt="Emily Carter"
                  />
                  <p className="bs-usa-core-team-founder-name">Emily Carter</p>
                  <p className="bs-usa-core-team-founder">
                    Head of Human Resources
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bs-usa-core-team-desination-maindiv">
            <div className="bs-usa-core-team-desination">
              <h2>Supporting USA startups with these services</h2>
              <ul>
                <li>Expertise in Fractional CFO</li>
                <li>Cash Flow Management</li>
                <li>MIS &amp; Investor Reporting</li>
                <li>Startup Accounting</li>
                <li>Tax Planning </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreTeam;
