import { useState } from 'react';
import left from '../../../../public/roadmap/left.png';
import right from '../../../../public/roadmap/right.png';
import phase1 from '../../../../public/roadmap/phase1.png';
import phase2 from '../../../../public/roadmap/phase2.png';
import phase3 from '../../../../public/roadmap/phase3.png';
import Spooky from '../../../../public/spooky.png';

function Roadmap() {
  const [currentPhase, setCurrentPhase] = useState<1 | 2 | 3>(1);

  const phases: Record<1 | 2 | 3, { title: string; content: string; image: string }> = {
    1: {
      title: "The Awakening",
      content: "This is where we set the foundation by launching the Spooky token, building a strong and supportive community, and rolling out our official whitepaper to outline our vision and tokenomics. With our initial token presale, public launch, and listing on decentralized exchanges (DEX), we're focused on creating awareness and excitement while ensuring Spooky has a strong start in the cryptoverse.",
      image: phase1
    },
    2: {
      title: "The Haunting Begins",
      content: "The Haunting Begins takes Spoooky to the next level. Here, we introduce our exclusive NFT collection, reflecting the eerie yet playful essence of the Spoooky brand. Staking and rewards will allow our holders to earn passive income while staying engaged, and we’ll expand to centralized exchange (CEX) listings to reach a broader audience. Partnerships, influencer collaborations, and community-driven events will ensure Spoooky’s presence is felt across the blockchain, keeping the momentum alive.",
      image: phase2
    },
    3: {
      title: "Into the Shadows",
      content: "we dive deep into building the full Spoooky ecosystem. This includes an NFT marketplace, gamified features to engage users, and the launch of the Spoooky DAO, empowering holders with decision-making rights. By exploring partnerships and focusing on long-term scalability, Spoooky will evolve into a sustainable and innovative platform, ensuring its legacy in the cryptospace. Together, we’ll make Spoooky an experience like no other!h",
      image: phase3
    }
  };

  const handlePhaseClick = () => {
    setCurrentPhase(currentPhase === 3 ? 1 : (currentPhase + 1) as 1 | 2 | 3);
  };

  return (
    <section className="relative mx-auto h-[95vh] w-full overflow-hidden bg-linear-to-b from-[#0a1628] via-[#1a3a5c] to-[#2a4a6c]">
      <div className="mx-auto max-w-3xl">
        <div className="absolute top-0 left-0 z-0">
          <img
            src={left}
            alt="Left decoration"
            className="hidden h-[900px] w-auto sm:h-[600px] md:h-auto lg:block lg:h-screen"
          />
        </div>

        <div className="absolute top-0 right-0 z-0">
          <img
            src={right}
            alt="Right decoration"
            className="h-[400px] w-auto sm:h-[500px] md:h-auto lg:h-screen"
          />
        </div>

        <div className="absolute bottom-8 left-4 z-10 sm:left-8 md:left-12 lg:left-16">
          <button onClick={handlePhaseClick}>
            <img
              src={phases[currentPhase].image}
              alt={`Phase ${currentPhase}`}
              className="h-[180px] w-[180px] object-contain sm:h-[242px] sm:w-[242px] md:h-[280px] md:w-[280px] lg:h-[70%] lg:w-[70%] cursor-pointer"
            />
          </button>
        </div>

        <div className="z-20 mx-auto h-[95vh] max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ">
          <div className="relative flex h-[95vh] flex-col items-center">
            <div className="mb-6 lg:mb-8"></div>

            <h1 className="font-normal absolute top-0 mb-8 text-center text-5xl  text-white sm:text-6xl md:text-7xl lg:mb-12 lg:text-[80px] ">
              Roadmap
            </h1>

            <div className="Mansalva absolute bottom-[40%] w-full max-w-4xl ">
              <div className="rounded-[40px] border-[5px] border-black p-6 font-normal shadow-2xl sm:p-8 md:p-10 lg:p-5">
                <p className="mb-6 text-start text-base leading-relaxed text-white sm:text-lg md:text-xl lg:mb-8 lg:text-xl">
                  {phases[currentPhase].content}
                </p>

                <h2 className="font-normal text-center text-3xl text-white sm:text-4xl md:text-5xl lg:text-[40px]">
                  {phases[currentPhase].title}
                </h2>
              </div>
            </div>
            <div className="absolute right-4 sm:right-8 sm:-bottom-16 md:right-12 md:-bottom-20 lg:right-[15%] lg:bottom-[10%]">
              <img
                src={Spooky}
                alt="Spooky Character"
                className="h-auto w-[120px] object-contain drop-shadow-2xl sm:w-40 md:w-[200px] lg:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;