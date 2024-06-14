"use client";

import "../../styles/globals.css";

import Page from "../../components/pages/page";
import TeamSection from "../../components/team/teamSection";

const Team = () => {
  const team = {
    President: [
      {
        name: "Andrae Cari",
        position: "President",
        email: "president@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
    ],
    Executives: [
      {
        name: "Jennifer Chung",
        position: "VP Operations",
        email: "operations@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Thao Nguyen",
        position: "VP Academics",
        email: "academics@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Brian Lee",
        position: "VP Student Life",
        email: "studentlife@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Katrina Mei",
        position: "VP Finance",
        email: "finance@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Sofia Pham",
        position: "VP Communications",
        email: "communications@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Hadi Jafar",
        position: "VP Careers & Co-op",
        email: "careersandcoop@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
    ],
    Representatives: [
      {
        name: "Dylan Ha",
        position: "Fourth Year Rep",
        email: "dylan.ha@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Osanyem Osadebe",
        position: "Fourth Year Rep",
        email: "oosadebe@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Rajab Rehan",
        position: "Third Year Rep",
        email: "rajab.rehan@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Muhammad Hanan",
        position: "Second Year Rep",
        email: "m1hanan@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Jason Truong",
        position: "Systems Administrator",
        email: "sysadmin@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
    ],
    Marketing: [
      {
        name: "Vivian Fang",
        position: "Marketing Director",
        email: "marketing@tmucscu.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Mariam Felobes",
        position: "TikTok Manager",
        email: "mfelobes@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Aleena Ayub",
        position: "Graphic Designer",
        email: "aleena.ayub@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Julia Szubert",
        position: "Photographer",
        email: "julia.szubert@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Inaya Rajwani",
        position: "Marketing Associate",
        email: "inaya.rajwani@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Nehal Goel",
        position: "Marketing Associate",
        email: "nehal.goel@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
    ],
    Deputies: [
      {
        name: "Jeffrey Ye",
        position: "Deputy VP Operations",
        email: "jeffrey.ye@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Hamidreza Khoramrokh",
        position: "Deputy VP Academics",
        email: "hamidreza.khoramrokh@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Stephen Tao",
        position: "Deputy VP Student Life",
        email: "s1tao@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Stewart Bustard",
        position: "Deputy VP Finance",
        email: "stewart.bustard@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Karson Chan",
        position: "Deputy VP Communications",
        email: "karson.chan@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Teodor Cirstoiu",
        position: "Deputy VP Careers & Co-op",
        email: "tcirstoiu@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Faryal Siddiqui",
        position: "Careers & Co-op Associate",
        email: "faryal.siddiqui@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Jana Habibi",
        position: "Deputy Third Year Rep",
        email: "jana.habibi@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Amitoz Banga",
        position: "Deputy Second Year Rep",
        email: "amitoz.banga@torontomu.ca",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
    ],
  };

  return (
    <Page>
      <h1 className="grid justify-center mb-2">President</h1>
      <TeamSection members={team.President} />
      <h1 className="grid justify-center mb-10">Executives</h1>
      <TeamSection members={team.Executives} />
      <h1 className="grid justify-center mb-10">Representatives</h1>
      <TeamSection members={team.Representatives} />
      <h1 className="grid justify-center mb-10">Marketing Team</h1>
      <TeamSection members={team.Marketing} />
      <h1 className="grid justify-center mb-10">Deputies</h1>
      <TeamSection members={team.Deputies} />
    </Page>
  );
};

export default Team;
