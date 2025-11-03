import { useState } from 'react';
import left from '../../../../public/roadmap/left.png';
import right from '../../../../public/roadmap/right.png';
import phase1 from '../../../../public/roadmap/phase1.png';
import phase2 from '../../../../public/roadmap/phase2.png';
import phase3 from '../../../../public/roadmap/phase3.png';
import Spooky3 from '../../../../public/animate3.gif';

function Roadmap() {
  const [currentPhase, setCurrentPhase] = useState<1 | 2 | 3>(1);

  const phases: Record<
    1 | 2 | 3,
    { title: string; content: string; image: string }
  > = {
    1: {
      title: 'The Awakening',
      content:
        "This is where we set the foundation by launching the Spooky token, building a strong and supportive community, and rolling out our official whitepaper to outline our vision and tokenomics. With our initial token presale, public launch, and listing on decentralized exchanges (DEX), we're focused on creating awareness and excitement while ensuring Spooky has a strong start in the cryptoverse.",
      image: phase1,
    },
    2: {
      title: 'The Haunting Begins',
      content:
        'The Haunting Begins takes Spoooky to the next level. Here, we introduce our exclusive NFT collection, reflecting the eerie yet playful essence of the Spoooky brand. Staking and rewards will allow our holders to earn passive income while staying engaged, and we’ll expand to centralized exchange (CEX) listings to reach a broader audience. Partnerships, influencer collaborations, and community-driven events will ensure Spoooky’s presence is felt across the blockchain, keeping the momentum alive.',
      image: phase2,
    },
    3: {
      title: 'Into the Shadows',
      content:
        'we dive deep into building the full Spoooky ecosystem. This includes an NFT marketplace, gamified features to engage users, and the launch of the Spoooky DAO, empowering holders with decision-making rights. By exploring partnerships and focusing on long-term scalability, Spoooky will evolve into a sustainable and innovative platform, ensuring its legacy in the cryptospace. Together, we’ll make Spoooky an experience like no other!h',
      image: phase3,
    },
  };

  const handlePhaseClick = () => {
    setCurrentPhase(currentPhase === 3 ? 1 : ((currentPhase + 1) as 1 | 2 | 3));
  };

  return (
    <section className="bg-roadmap relative mx-auto h-[95vh] w-full overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <div className="absolute top-0 left-0 z-0">
          <img
            src={left}
            alt="Left decoration"
            className="hidden lg:block lg:h-screen"
          />
        </div>

        <div className="absolute top-0 right-0 z-40">
          <img
            src={right}
            alt="Right decoration"
            className="h-screen  w-[90vw] md:w-auto"
          />
        </div>

        <div className="absolute right-[5%] bottom-[3%] z-50 md:bottom-[1%] md:right-[1%] lg:left-[6%] ">
          <button onClick={handlePhaseClick} >
            <img
              src={phases[currentPhase].image}
              alt={`Phase ${currentPhase}`}
              className="sparkleh-[20vh] w-[40vw]  cursor-pointer object-contain sm:w-[230px] md:h-[190px] md:w-[280px] lg:h-[70%] lg:w-[50%] xl:w-[70%]"
            />
          </button>
        </div>

        <div className="mx-auto mt-5 h-[95vh] max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-10 xl:pt-[5%]">
          <div className="relative z-40 flex h-[90vh] flex-col items-center md:h-[95vh]">
            <h1 className="bsolute top-0 mb-8 text-center text-5xl font-normal text-white sm:text-6xl md:text-7xl lg:mb-12 lg:text-[80px]">
              Roadmap
            </h1>

            <div className="Mansalva absolute top-10 bottom-[40%] w-full max-w-4xl md:top-[6vh] lg:top-[15vh]">
              <div className="rounded-[40px] border-black p-6 font-normal sm:p-8 md:p-10 lg:border-[3px] lg:p-5">
                <h2 className="text-center text-3xl font-normal text-white sm:text-4xl md:text-5xl lg:hidden lg:text-[40px]">
                  {phases[currentPhase].title}
                </h2>
                <p className="text-ceter mb-6 text-[16px] leading-4.5 text-white sm:text-lg md:text-start md:text-xl lg:mb-8 lg:text-xl lg:leading-relaxed">
                  {phases[currentPhase].content}
                </p>

                <h2 className="hidden text-center text-3xl font-normal text-white sm:text-4xl md:text-5xl lg:block lg:text-[40px]">
                  {phases[currentPhase].title}
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute right-[20%] bottom-[5%] z-10 sm:right-[30%] sm:bottom-[-5%] md:right-[20%] md:bottom-[1%] lg:z-50 lg:right-[20%] lg:bottom-[-12%]">
            <img
              src={Spooky3}
              alt="Spooky Character"
              className="h-auto w-[40vh] object-contain drop-shadow-2xl sm:w-[50vh] md:w-[250px] lg:w-[250px] xl:w-[25vw] brightness-75 md:brightness-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;