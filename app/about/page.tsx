"use client";

import "../../styles/globals.css";

import TextPage from "../../components/pages/textPage";

const About = () => {
  return (
    <TextPage>
      <TextPage.Header>About Us</TextPage.Header>
      <TextPage.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ipsum
        lobortis nulla imperdiet ornare.
      </TextPage.Body>
      <TextPage.Subheader>Lorem Ipsum</TextPage.Subheader>
      <TextPage.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ipsum
        lobortis nulla imperdiet ornare. Quisque eleifend posuere eros. Nullam
        ut elementum velit. Sed dictum consectetur enim, at condimentum sem
        tempor at. Quisque eu interdum dolor, vitae imperdiet ante. Donec sapien
        ipsum, feugiat at vestibulum nec, eleifend eget diam. Aliquam vehicula
        venenatis urna vitae vehicula. Proin interdum sit amet tellus eget
        feugiat. Aliquam pellentesque dui erat, vitae dictum purus consectetur
        sit amet. Curabitur feugiat diam in massa aliquam, ornare finibus nibh
        faucibus.
      </TextPage.Body>
    </TextPage>
  );
};

export default About;
