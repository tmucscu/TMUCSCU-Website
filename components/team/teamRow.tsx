import TeamCard, { MemberType } from "./teamCard";

import clsx from "clsx";

const TeamRow = ({ members }: { members: MemberType[] }) => {
  const numMembers = members.length;
  return (
    <div
      className={clsx(
        "grid justify-items-center",
        numMembers >= 3 && "grid-cols-3",
        numMembers === 2 && "grid-cols-2"
      )}
    >
      {members.map((member) => {
        return <TeamCard key={member.name} member={member} />;
      })}
    </div>
  );
};

export default TeamRow;
