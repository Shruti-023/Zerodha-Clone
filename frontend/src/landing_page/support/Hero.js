import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="container">

        {/* Top Row */}
        <div className="supportHeader">
          <h5>Support Portal</h5>

          <a href="/">Track Tickets</a>
        </div>

        {/* Bottom Row */}
        <div className="row heroContent">

          {/* Left */}
          <div className="col-lg-7">

            <h2>
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h2>

            <input
              type="text"
              className="form-control"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />

            <div className="quickLinks">
              <a href="/">Track account opening</a>

              <a href="/">Track segment activation</a>

              <a href="/">Intraday margins</a>

              <a href="/">Kite user manual</a>
            </div>

          </div>

          {/* Right */}

          <div className="col-lg-5 featuredSection">

            <h2>Featured</h2>

            <ol>

              <li>
                <a href="/">
                  Current Takeovers and Delisting - January 2026
                </a>
              </li>

              <li>
                <a href="/">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>

            </ol>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;