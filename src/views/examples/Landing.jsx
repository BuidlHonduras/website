/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.jsx";
import CardsFooter from "../../components/Footers/CardsFooter.jsx";

import ahmed from "../../assets/img/contributors/ahmed.jpeg";
import antonio from "../../assets/img/contributors/antonio.jpg";
import cristian from "../../assets/img/contributors/cristian.jpg";
import franco from "../../assets/img/contributors/franco.jpg";
import isaac from "../../assets/img/contributors/isaac.jpeg";
import john from "../../assets/img/contributors/john.jpg";
import juan from "../../assets/img/contributors/juan.jpeg";
import nelson from "../../assets/img/contributors/nelson.jpg";
import oscarp from "../../assets/img/contributors/oscarp.jpeg";
import robert from "../../assets/img/contributors/robert.jpg";
import oscarf from "../../assets/img/contributors/oscarf.jpeg";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-light">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A Descentralized Community{" "}
                        <span>in the hearth of America</span>
                      </h1>
                      <p className="lead text-white">
                        BUIDL Honduras is an open community for anyone
                        interested in the Blockchain as a problem solving
                        technology.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0 btn-accent"
                          href="https://gitcoin.co/grants/231/buidl-honduras"
                          target="_blank"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-rebel" />
                          </span>
                          <span className="btn-inner--text">Support Us</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://discord.gg/XkmPawB"
                          target="_blank"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fab fa-discord"></i>
                          </span>
                          <span className="btn-inner--text">Talk with us</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../assets/img/theme/munon.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fab fa-ethereum" />
                    </div>
                    <h3>Community Projects</h3>
                    <p>
                      We enjoy experimentation and collaboration, as a community
                      we have multiple projects where we collaborate and
                      mantain.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fas fa-cubes" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"><a href="https://gitcoin.co/grants/231/buidl-honduras">Gitcoin Grants</a></h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-code" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"><a href="https://munonhack.com/">El Hackathon Muñón</a></h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-rebel" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"><a href="https://daohaus.club/dao/0x278ee41bf97e0e1aada301b459f12cea79503bd5">BUIDL Honduras DAO</a></h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-book" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"><a href="https://medium.com/buidl-honduras">Community Blog</a></h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fas fa-box-open" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"><a href="https://anchor.fm/blockeados">Community Podcast</a></h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fab fa-youtube" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0"><a href="https://www.youtube.com/channel/UCEZctdEa1sdYTxhnoMYPiTQ">YouTube Channel</a></h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/theme/promo-1.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        BUIDL Meetups
                      </h4>
                      <p className="lead text-italic text-white">
                        We believe that education is a key component to growing
                        the community, we host a series of monthly meetups for
                        people to learn and casual hackathons for people to
                        apply their knowledge.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="fas fa-user-graduate" />
                    </div>
                    <h3>Part of The BUIDL Network</h3>
                    <p className="lead">
                      The BUIDL network is a chain of global meetups supported
                      by ConsenSys, hosted by BUIDL Ambassadors that focus on
                      three core concepts:
                    </p>
                    <p>Blockchain Education Blockchain dApp & Infrastructure</p>
                    <p>Development Community Engagement & Support</p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://www.meetup.com/buidl-tegucigalpa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Attend in Tegucigalpa
                    </a>
                    <br></br> <br></br>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://www.meetup.com/buidl-sps/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Attend in San Pedro Sula
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                        Community Metrics
                      </h4>
                      <p className="text-white">
                        To create a healthy community, we track the growth of
                        our local ecosystem
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Startups
                          </h5>
                          <p>
                            We have multiple projects in the ecosystem from
                            DeFi, wallets, exchanges even Governance.
                          </p>
                          <a
                            className="text-success"
                            href="#projects"
                            onClick={e => e.preventDefault()}
                          >
                            5 Oficial Startups
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">Active Members</h5>
                          <p>
                            There are around 600 members registered in our
                            multiple meetups and social channels.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            600+ members
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-4">
                <Col lg="8">
                  <h2 className="display-3">Community Spotlight</h2>
                  <p className="lead text-muted">
                    Get to know some of our community members.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={ahmed}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ahmed</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={antonio}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Antonio</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={cristian}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Cristian</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={franco}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Franco</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>{" "}
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={isaac}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Isaac</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>{" "}
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={john}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={juan}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Juan</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={nelson}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Nelson</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={oscarp}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Oscar P</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={robert}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Robert</span>
                        {/* <small className="h6 text-muted">Web Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-4" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={oscarf}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Oscar F</span>
                        {/* <small className="h6 text-muted">Blockchain Developer</small> */}
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">Be part of the community!</h3>
                      <p className="lead text-white mt-3">
                        We created a Discord channel to be in constant
                        communication. We use it to share links, memes, casual
                        chat or discuss projects. Members range from experienced
                        developers to newbies!
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://discord.gg/XkmPawB"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-2">
                          <i className="fab fa-discord" />
                        </span>
                        <span className="btn-inner--text">
                          Join us in Discord
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
