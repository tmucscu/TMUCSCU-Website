import Logo from "../assets/csculogo.png";
import Navbar from "../navbar";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mx-[7%] h-[50%] items-center grid grid-cols-5">
        <div className="col-span-3">
          <h2 className="no-underline">Toronto Metropolitan University's</h2>
          <h1>Computer Science Course Union</h1>
          <p className="pt-2">
            For over 20 years, the CSCU has been the organization representing
            all the undergraduate Computer Science students at TMU.
          </p>
        </div>
        <div className="col-span-2 flex justify-center">
          <img className="w-[250px]" src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
