"use client";

import "../../styles/globals.css";

import EventCard from "../../components/events/eventCard";
import TextPage from "../../components/pages/textPage";

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
        "https://drive.google.com/thumbnail?id=1FqKN99CfszlI-jpDGCDPKCd_nfT6F7QI&sz=w1000",
      details:
        "📣 APPLICATIONS EXTENDED\n\nTMU CSCU ARE LOOKING TO HIRE THESE POSITIONS FOR THE UPCOMING 2024-2025 ACADEMIC YEAR:\n\t- Graphic Designer (OPEN TO ALL PROGRAMS)\n\t- Deputy VP Academics (CS ONLY)\n\nFind out more about each position using the links in our bio.\n\nThe CSCU primarily represents Computer Science students in the department. In addition, we organize a variety of academic, career, and social events to assist students 📚. By joining the CSCU, you will expand your network within and outside of TMU. Many of our members have gained positions at companies such as Amazon, Google, Shopify, Tesla, Coursera, and more as a result. Apply to the CSCU and help us transform TMU CS into a student-driven department 💪!\n\nDEADLINE: May 27, 2024",
      signUpLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScDw4O1xWkBAd0XAMfjywU880xmP9Zv7zgEWd7vD4VpkTo9AQ/viewform",
    },
    {
      name: "CSCU Bar Night",
      date: "April 25, 2024",
      startTime: "9PM",
      endTime: "1AM",
      location: "The Met",
      imageUrl:
        "https://drive.google.com/thumbnail?id=17vdpzYTD0ZvV1WQnjQC8O4RnoP1shzxa&sz=w1000",
      details:
        "🍾🪩 CSCU Bar Night is coming to you NEXT WEEK!\n\nJoin us at our campus bar, The Met, to end the academic year off with a bang 💪 From 9PM - 1AM there will be a DJ ( @razzaknooraniofficial ) blasting music and tons of neon props to keep the night alive and fun 🪩\n\nOne Card and ID required for entry‼️ Each attendee may bring up to ONE non TMU student\n\nCan’t wait to see you all there 🎉",
      signUpLink: "https://linktr.ee/tmu_cscu",
    },
    {
      name: "TMACC x CSCU Fundamental Algorithms Workshop",
      date: "April 4, 2024",
      startTime: "6:30PM",
      endTime: "8:30PM",
      location: "DCC 204",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1EWuw562LTxpQEplXlDEHCCjMPw1KxhvK&sz=w1000",
      details:
        "📢 TMACC and CSCU are hosting a Fundamental Algorithms Workshop on Thursday, April 4th from 6:30PM - 8:30PM in DCC 204.\n\n💻 Come by to learn, review, and practice fundamental algorithms applicable to CPS 616, CPS 420, and technical interviews. Everyone is welcome as this workshop is suitable for all skill levels! Feel free to bring your friends and collaborate. At the end there will be time to socialize and play Towers of Hanoi 🗼 Win ducks and an arduino set! 🏆\n\n🌯 Free food (not pizza!) and drinks will be provided. Sign up is required with the link in our bio 📝 See you there!",
      signUpLink: "https://lu.ma/heqvw9rf",
    },
    {
      name: "TMU.GG x CSCU Keyboard Event",
      date: "March 28, 2024",
      startTime: "6:30PM",
      endTime: "8:30PM",
      location: "DCC 204",
      imageUrl:
        "https://drive.google.com/thumbnail?id=1DnBFjVv40YyGGMwMKz-pxYja7wlna8_a&sz=w1000",
      details:
        "🚨 Gamers and keyboard lovers, we’re excited to announce the return of the TMUGG x CSCU keyboard event sponsored by Ashkeebs ⌨️ ! Join us at DCC204 on March 28 from 6:30-8:30PM for a typeracing contest and keyboard showcase ⏰\n\nAre you a fast typer? Do you have a lovely keyboard to show off? 🤨 Come prove it and win tons of prizes - including 4 keyboards, 3 desk mats, and more (that’s over $800) 🤑🤑! Even if you don’t, still be sure to sign up to meet new people, inspire your next board, and win the winner predictions portion of our event 🥳\n\nFree snacks and drinks will be provided🧃. Sign up is required with the link in our bio 📝. We can’t wait to see you all there ‼️\n\nNote: We strongly advise racers to bring their keyboards, even if they will not present them in the showcase",
      signUpLink: "https://lu.ma/tmukeyboard",
    },
  ];

  return (
    <TextPage slidesToShow={5}>
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
