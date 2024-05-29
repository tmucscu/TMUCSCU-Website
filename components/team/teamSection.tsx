import { MemberType } from "./teamCard";
import TeamRow from "./teamRow";

const TeamSection = ({ members }: { members: MemberType[] }) => {
  const memberRows: MemberType[][] = [];
  const splitMembers = (members: MemberType[]) => {
    for (let i = 0; i < members.length; i += 3) {
      const chunk = members.slice(i, i + 3);
      memberRows.push(chunk);
    }
  };

  splitMembers(members);
  return (
    <div>
      {memberRows.map((memberRow) => {
        return <TeamRow members={memberRow} />;
      })}
    </div>
  );
};

export default TeamSection;
