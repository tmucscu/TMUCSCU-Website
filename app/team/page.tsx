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
        email: "test@email.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
      {
        name: "Osanyem Osadebe",
        position: "Fourth Year Rep",
        email: "test@email.com",
        imageUrl:
          "https://www.fluidsecure.com/wp-content/uploads/2023/02/Blank-Headshot.jpg",
      },
    ],
  };

  return (
    <Page>
      <TeamSection members={team.President} />
      <h1 className="grid justify-center mb-10">Executives</h1>
      <TeamSection members={team.Executives} />
      <h1 className="grid justify-center mb-10">Representatives</h1>
      <TeamSection members={team.Representatives} />
    </Page>
  );
};

export default Team;
