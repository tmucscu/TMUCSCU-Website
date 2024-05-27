export type MemberType = {
  name: string;
  position: string;
  email: string;
  imageUrl: string;
};

const TeamCard = ({ member }: { member: MemberType }) => {
  return (
    <div className="grid justify-items-center">
      <h1 className="mb-4 text-4xl">{member.position}</h1>
      <img
        className="w-36 rounded-full border-2 border-black"
        src={member.imageUrl}
      />
      <p className="mt-4">{member.name}</p>
      <p className="mb-10 hover:text-active">
        <a href={`mailto:${member.email}`}>{member.email}</a>
      </p>
    </div>
  );
};

export default TeamCard;
