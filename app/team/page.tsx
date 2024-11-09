"use client";

import "../../styles/globals.css";

import Page from "../../components/pages/page";
import TeamSection from "../../components/team/teamSection";
import teamData from "./team.json";

const Team = () => {
  const team = teamData;

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
      <h1 className="grid justify-center mb-10">Associates</h1>
      <TeamSection members={team.Associates} />
    </Page>
  );
};

export default Team;
