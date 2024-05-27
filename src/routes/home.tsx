import Logo from "../assets/csculogo.png";
import Page from "../components/page";

const Home = () => {
  return (
    <Page>
      <div className="h-[50%] items-center grid grid-cols-5">
        <div className="col-span-3">
          <h2>Toronto Metropolitan University's</h2>
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
    </Page>
  );
};

export default Home;
