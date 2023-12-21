import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/AboutSection.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about-section-content">
              <h4 className="section-subtitle">About Us</h4>
              <h2 className="section-title">Welcome to car rent service</h2>
              <p className="section-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                veniam nulla molestiae aut quam, distinctio facilis harum cum
                blanditiis voluptates hic officia quibusdam id optio praesentium
                neque perferendis, ea suscipit corporis, sequi est explicabo.
                Perspiciatis at corrupti laboriosam repellat reiciendis.
              </p>

              <div className="about-section-item d-flex align-items-center">
                <p className="section-description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
                <p className="section-description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about-section-item d-flex align-items-center">
                <p className="section-description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
                <p className="section-description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about-img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
