import React from "react";
import "./profile.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Education from "./education";

export default function Profile() {
  return (
    <Router>
      <div id="container">
        <header>
          <div className="quoteoftheday">Profile</div>
          <div className="name">SZ.</div>
        </header>

        <article>
          <div className="quote">
            <h1>
              If you cannot do great things, do small things in a great way
            </h1>
          </div>
          <div className="quoteby">
            <h4>Sukaina Zehra</h4>
          </div>
        </article>

        <footer>
          <div className="skills">
            <h6>Menu</h6>
            <ul>
              <li>
                <Link to="/">Introduction</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/profession">Professional Experience</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <div className="content">
                <p>
                  A Computer Systems Engineer from NED Class of 2020, who
                  possess strong analytical and logical skills with a can-do
                  attitude and always seeks for new opportunities to grow. For
                  several years I have focused my career path and academic
                  pursuits on learning and developing all-important skills
                  necessary to become a competent Systems Engineer. I believe
                  being genuine and nurturing, along with professional and
                  driven, is also an essential combination for people in my
                  field. I possess software development, product development,
                  and programming skills. Additionally, my abilities extend to
                  leadership and observation with proficiency in teamwork.
                </p>
              </div>
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/profession">
              <div className="content">
                <p>Frontend Developer at Interns.pk</p>
              </div>
            </Route>
            <Route exact path="/contact">
              <div className="content">
                <p>
                  LinkedIn:
                  <a href="https://www.linkedin.com/in/sukaina-zehra-a39b22169/">
                    {" "}
                    https://www.linkedin.com/in/sukaina-zehra-a39b22169/
                  </a>
                </p>
              </div>
            </Route>
          </Switch>
        </footer>
      </div>
    </Router>
  );
}
