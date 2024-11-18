"use client";

import "../../styles/globals.css";

import LinkTextButton from "../../components/button/linkTextButton";
import SponsorGallery from "../../components/sponsors/sponsorGallery";
import TextPage from "../../components/pages/textPage";
import sponsorData from "./sponsors.json";

const About = () => {
  const sponsors = sponsorData;

  return (
    <TextPage>
      <TextPage.Header>About Us</TextPage.Header>
      <TextPage.Body>
        The CSCU is the Undergraduate Computer Science Course Union at Toronto
        Metropolitan University (formerly named Ryerson University).
        <br />
        <br />
        We focus on three main pillars: academics, careers, and social life.
      </TextPage.Body>
      <TextPage.Subheader>Advocacy</TextPage.Subheader>
      <TextPage.Body>
        The main goal of the CSCU is first and foremost, advocacy on behalf of
        full time students in the computer science program at Toronto
        Metropolitan University.
        <br />
        <br />
        From academics to facilities, the CSCU has votes on the department
        council meetings and the curriculum committee, which have led to
        tangible change within the program. We strive to maintain strong lines
        of communications between the department staff and undergraduate
        students. Located at EPH 442-D, swing by at any time to speak in person,
        or <LinkTextButton text=" contact us." link="/contact" />
      </TextPage.Body>
      <TextPage.Subheader>Events</TextPage.Subheader>
      <TextPage.Body>
        The CSCU holds regular academically related events, including academic
        workshops and study sessions. We also collaborate with other student
        groups and industry to hold career related events for students. We have
        held many social events, pub nights, LAN nights and movie nights in the
        past.
      </TextPage.Body>
      <TextPage.Subheader>Services</TextPage.Subheader>
      <TextPage.Body>
        We are currently moving our web services to AWS to allow for autonomy as
        well as rapid development and deployment of web services for students.
        We are currently working on an exam bank for students, and are currently
        planning for others, possibly including game servers and other services.
        Have an idea? <LinkTextButton text="Contact Us!" link="/contact" />
      </TextPage.Body>
      <TextPage.Subheader>Constitution</TextPage.Subheader>
      <TextPage.Body>
        The constitution can be found{" "}
        <LinkTextButton
          text="here."
          link="https://docs.google.com/document/d/18v34XqiFI0hHousBXCB3GI_nznzIuKtnbCYfuSsHL-8/edit?usp=sharing"
          external
        />
      </TextPage.Body>
      <br />
      <br />
      <TextPage.Header>Our Sponsors</TextPage.Header>
      <TextPage.Body>
        The CSCU deeply appreciates the invaluable support our sponsors provide.
        If you're interested in partnering with us to enhance the quality of
        events for TMU Computer Science students while expanding your outreach,
        we’d love to <LinkTextButton text="hear from you!" link="/contact" />
        <br />
        <br />
        <TextPage.Subheader>2024-2025 Sponsors</TextPage.Subheader>
        <TextPage.Body>
          <SponsorGallery images={sponsors.yearly} />
        </TextPage.Body>
        <br />
        <TextPage.Subheader>Past Sponsors</TextPage.Subheader>
        <TextPage.Body>
          <SponsorGallery images={sponsors.past} />
        </TextPage.Body>
      </TextPage.Body>
    </TextPage>
  );
};

export default About;
