"use client";

import "../../styles/globals.css";

import LinkTextButton from "../../components/button/linkTextButton";
import TextPage from "../../components/pages/textPage";

const Contact = () => {
  return (
    <TextPage>
      <TextPage.Header>Get in touch.</TextPage.Header>
      <TextPage.Body>
        The official medium of communication with the CSCU is via email. All
        executive members can be reached via{" "}
        <LinkTextButton
          text="execs@tmucscu.com"
          link="mailto:execs@tmucscu.com"
        />
        . For individual member emails, check out our{" "}
        <LinkTextButton text="Team" link="/team" /> page.
      </TextPage.Body>
      <TextPage.Subheader>Meeting Requests</TextPage.Subheader>
      <TextPage.Body>
        You can complete{" "}
        <LinkTextButton
          text="this form"
          link="https://forms.gle/oyRn7vYipLMutxtU6"
          external
        />{" "}
        to meet with one of our top-tier execs for any questions/such concerns
        you may want to address either in person or virtually.
      </TextPage.Body>
      <TextPage.Subheader>Our Office</TextPage.Subheader>
      <TextPage.Body>
        You can find us at our office on the 4th floor of Eric Palin Hall. We'll
        often do pick ups and office hours in here.
        <br />
        <br />
        87 Gerrard St E, Toronto, ON M5B 2M2 <br />
        Room: EPH 442-D
      </TextPage.Body>
    </TextPage>
  );
};

export default Contact;
