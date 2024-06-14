import { MemberType } from "./teamCard";
import TeamRow from "./teamRow";
import { WidthContext } from "../../app/context/WidthContext.tsx";
import { useContext } from "react";

const TeamSection = ({ members }: { members: MemberType[] }) => {
  const width = useContext(WidthContext);

  const maxMemberPerRow = width > 1024 ? 3 : 1;

  const memberRows: MemberType[][] = [];
  const splitMembers = (members: MemberType[]) => {
    for (let i = 0; i < members.length; i += maxMemberPerRow) {
      const chunk = members.slice(i, i + maxMemberPerRow);
      memberRows.push(chunk);
    }
  };

  splitMembers(members);
  return (
    <div>
      {memberRows.map((memberRow) => {
        return <TeamRow key={memberRow[0].name} members={memberRow} />;
      })}
    </div>
  );
};

export default TeamSection;
