import Spooky from '../../../../public/spooky.png';

function Home() {
  return (
    <section
      id="home"
      className="bg-home bg-common relative h-[95.5vh] overflow-hidden"
    >
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-[2vw]">
        <div className="z-10 flex flex-col items-center text-center">
          <h1 className="bg-linear-to-r from-[#676565] via-[#FFFFFF] to-[#676565] bg-clip-text text-[15vh] leading-none font-normal text-transparent sm:text-[34vh] xl:text-[18.50vw]">
            Spooky
          </h1>

          <p className="Mansalva mt-2 text-[4.1vh] leading-tight text-white sm:mt-[-2vh] sm:text-[4vh] md:mt-[0.4vh] md:text-[1.45vw] lg:text-[1.66vw] xl:mt-[-5vh]">
            Join the Eerie Revolution in DeFi!
          </p>

          <div className="mt-4 flex gap-3 sm:hidden"></div>

          <img
            src={Spooky}
            alt="Spooky Monster"
            className="mx-auto mt-[20%] h-auto w-[55vw] max-w-[280px] sm:mt-[20.83%] sm:w-[35vw] lg:w-[20.83vw] xl:w-[18.22vw]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
