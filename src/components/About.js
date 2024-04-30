import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div className=" my-5 mx-5">
        <div className="row ">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <hr />

                <p className="card-text">
                  Welcome to our website, your one-stop destination for the
                  latest headlines across a wide range of categories! At
                  <b> Bitter-Truth</b>, we strive to keep you informed and
                  up-to-date on the most important news and trends shaping our
                  world today. Whether you're interested in breaking news,
                  sports updates, entertainment gossip, technology innovations,
                  or lifestyle trends, we've got you covered. Our dedicated team
                  works tirelessly to curate and deliver the most relevant and
                  compelling stories from around the globe, ensuring that you
                  stay informed on the topics that matter most to you. With
                  user-friendly navigation and a dynamic interface, exploring
                  the latest headlines has never been easier. Join us on
                  <b> Bitter-Truth</b> to stay informed, inspired, and connected
                  to the world around you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reach Us</h5>
                <hr />
                <p className="card-text">
                  For reach out us and for any type of enquiry you can reachout
                  with the following:
                </p>
                <Link
                  to="www.linkedin.com/in/ravipratap98"
                  className="btn btn-primary"
                >
                  LinkedIn
                </Link>
                &nbsp;
                <Link
                  to="mailto:ravirajput31198@gmail.com"
                  className="btn btn-primary"
                >
                  Mail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
