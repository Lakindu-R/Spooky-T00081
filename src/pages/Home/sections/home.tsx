import Spooky from '../../../../public/spooky.png';

function Home() {
  return (
    <section 
      id="home" 
      className="bg-home bg-common min-h-screen relative overflow-hidden"
    >
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center">
        <div className="text-center z-10">
          <h1 className="bg-linear-to-r font-normal from-[#676565] via-[#FFFFFF] to-[#676565] bg-clip-text text-transparent text-[80px] sm:text-[120px] md:text-[180px] lg:text-[250px] xl:text-[320px] leading-none">
            Spooky
          </h1>
          <p className="Mansalva text-white text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] mt-2 md:mt-4 xl:mt-[-90px]">
            Join the Eerie Revolution in DeFi!
          </p>
        </div>
        
        <img 
          src={Spooky} 
          alt="Spooky Monster" 
          className="mt-8 md:mt-12 xl:mt-0 w-[200px] h-[285px] sm:w-[250px] sm:h-[356px] md:w-[350px] md:h-[499px] lg:w-[400px] lg:h-[570px] xl:w-[400px] xl:h-[600px] " 
        />
      </div>
    </section>
  );
}

export default Home;