import EventCard from "./eventCard";
import TextPage from "../pages/textPage";

export type EventType = {
  name: string;
  date: string;
  startTime?: string;
  endTime: string;
  location?: string;
  imageUrl: string;
  details: string;
  signUpLink: string;
};

const Events = () => {
  const events = [
    {
      name: "Graphic Designer Application",
      date: "May 27, 2024",
      endTime: "9PM",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1n050lIpd7x7xL7T9YHovyzRN37fAlgof&sz=w1000",
      details:
        "📣 APPLICATIONS EXTENDED\n\nTMU CSCU ARE LOOKING TO HIRE THESE POSITIONS FOR THE UPCOMING 2024-2025 ACADEMIC YEAR:\n\t- Graphic Designer (OPEN TO ALL PROGRAMS)\n\t- Deputy VP Academics (CS ONLY)\n\nFind out more about each position using the links in our bio.\n\nThe CSCU primarily represents Computer Science students in the department. In addition, we organize a variety of academic, career, and social events to assist students 📚. By joining the CSCU, you will expand your network within and outside of TMU. Many of our members have gained positions at companies such as Amazon, Google, Shopify, Tesla, Coursera, and more as a result. Apply to the CSCU and help us transform TMU CS into a student-driven department 💪!\n\nDEADLINE: May 27, 2024",
      signUpLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScDw4O1xWkBAd0XAMfjywU880xmP9Zv7zgEWd7vD4VpkTo9AQ/viewform",
    },
    {
      name: "Academic Podcast",
      date: "February 30, 2025",
      startTime: "7PM",
      endTime: "9PM",
      location: "DCC 204",
      imageUrl:
        "https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg?attachment_cache_bust=3136487&quality=85&strip=info&w=400",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ipsum lobortis nulla imperdiet ornare.\n\nQuisque eleifend posuere eros. Nullam ut elementum velit. Sed dictum consectetur enim, at condimentum sem tempor at. Quisque eu interdum dolor, vitae imperdiet ante Donec sapien ipsum, feugiat at vestibulum nec, eleifend eget diam.Aliquam vehicula venenatis urna vitae vehicula.Proin interdum sit amet tellus eget feugiat.Aliquam pellentesque dui erat, vitae dictum purus consectetur sit amet. Curabitur feugiat diam in massa aliquam, ornare finibus nibh faucibus. Proin interdum sit amet tellus eget feugiat.Aliquam pellentesque dui erat, vitae dictum purus consectetur sit amet.\n\nCurabitur feugiat diam in massa aliquam, ornare finibus nibh faucibus. Proin interdum sit amet tellus eget feugiat.Aliquam pellentesque dui erat, vitae dictum purus consectetur sit amet. Curabitur feugiat diam in massa aliquam, ornare finibus nibh faucibus.",
      signUpLink: "https://linktr.ee/tmu_cscu",
    },
  ];

  return (
    <TextPage>
      <h1 className="pb-[21px]">Upcoming Events</h1>
      {events.map((event, index) => {
        return (
          <EventCard key={index} event={event} inverted={index % 2 !== 0} />
        );
      })}
    </TextPage>
  );
};

export default Events;
