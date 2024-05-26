import Navbar from "../navbar";

const About = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mx-[7%] items-center grid grid-cols-5">
        <div className="col-span-3">
          <h1 className="pb-[21px]">About Us</h1>
          <p className="pb-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            ipsum lobortis nulla imperdiet ornare.
          </p>
          <h2 className="pb-[20px]">Lorem Ipsum</h2>
          <p className="pb-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            ipsum lobortis nulla imperdiet ornare. Quisque eleifend posuere
            eros. Nullam ut elementum velit. Sed dictum consectetur enim, at
            condimentum sem tempor at. Quisque eu interdum dolor, vitae
            imperdiet ante. Donec sapien ipsum, feugiat at vestibulum nec,
            eleifend eget diam. Aliquam vehicula venenatis urna vitae vehicula.
            Proin interdum sit amet tellus eget feugiat. Aliquam pellentesque
            dui erat, vitae dictum purus consectetur sit amet. Curabitur feugiat
            diam in massa aliquam, ornare finibus nibh faucibus.
          </p>
        </div>
        <div className="col-span-2 flex justify-center">
          Image carousel here lol
        </div>
      </div>
    </div>
  );
};

export default About;
