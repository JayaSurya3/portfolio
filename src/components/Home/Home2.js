import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with solving complex problems through{" "}
              <b className="purple">programming</b>, and I’ve gained expertise in
              leveraging technology to create impactful solutions. 🚀
              <br />
              <br />I specialize in classics like
              <i>
                <b className="purple"> Python </b>
              </i>
              and have extensive experience in
              <i>
                <b className="purple"> Machine Learning </b>
              </i>
              and
              <i>
                <b className="purple"> Deep Learning. </b>
              </i>
              <br />
              <br />
              My areas of interest include developing innovative{" "}
              <i>
                <b className="purple">AI-powered applications</b> and exploring
                the cutting-edge fields of{" "}
                <b className="purple">Data Science and Natural Language Processing</b>.
              </i>
              <br />
              <br />
              Beyond coding, I’m passionate about building scalable models and deploying them using{" "}
              <b className="purple">TensorFlow</b> and{" "}
              <b className="purple">PyTorch</b>, alongside creating intuitive
              visualizations with <b className="purple">Matplotlib</b> and{" "}
              <b className="purple">Seaborn</b>.
              <br />
              <br />
              I’m always exploring ways to integrate{" "}
              <b className="purple">ML and DL</b> into real-world applications
              to make data-driven decisions more accessible.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JayaSurya3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/smiley_suryas_/profilecard/?igsh=MTBxb3FyZmVvdWlrdQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram-profile"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
