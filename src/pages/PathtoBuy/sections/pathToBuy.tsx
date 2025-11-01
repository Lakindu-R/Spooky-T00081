import { useState } from 'react';
import Spookies1 from '../../../../public/PathtoBuy/spookies1.png';
import Spookies2 from '../../../../public/PathtoBuy/spookies2.png';
import Spookies3 from '../../../../public/PathtoBuy/spookies3.png';
import Spookey from '../../../../public/Spooky.png';
import Nextbtn from '../../../../public/nextbtn.png';
import Bg from '../../../../public/PathtoBuy/bg.png';

function pathToBuy() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const steps: Record<1 | 2 | 3, { content: string; image: string }> = {
    1: {
      content:
        "You're ready to dive into the thrilling world of Spooky, and the first step is setting up your tools for the adventure. You download a crypto wallet, like MetaMask or Trust Wallet, and prepare it to connect to the blockchain. With excitement, you fund your wallet with the necessary cryptocurrency—think of it as fueling up your ride for the journey ahead.",
      image: Spookies1,
    },
    2: {
      content:
        'Next, you venture into the marketplace, where Spooky awaits. You head to a decentralized exchange like Uniswap or PancakeSwap. With a few clicks, your wallet connects to the platform, and you search for Spoooky using the official contract address. It feels like unlocking a treasure chest as you verify the details and get ready to make your move.',
      image: Spookies2,
    },
    3: {
      content:
        "Finally, the moment arrives. You input the amount of Spoooky tokens you want, review the transaction, and hit 'Confirm.' In seconds, the swap is complete, and Spoooky is safely tucked into your wallet. As you glance at your new tokens, a smile spreads across your face—you’re officially part of the Spoooky community, ready to explore all the eerie and exciting possibilities ahead!",
      image: Spookies3,
    },
  };

  const handleNextClick = () => {
    setCurrentStep(currentStep === 3 ? 1 : ((currentStep + 1) as 1 | 2 | 3));
  };

  return (
    <section className="bg-roadmap relative mx-auto h-[95vh] w-full overflow-hidden">
      <div className="mx-auto max-w-3xl content-center">
        {/* Bottom mountains */}
        <div className="absolute right-0 bottom-0 left-0 z-0">
          <img
            src={Bg}
            alt="Background"
            className="h-auto w-full object-cover lg:h-[80vh]"
          />
        </div>

        <div className="absolute top-[20%] left-[30%] z-10 sm:left-8 md:left-12 md:top-[30%] lg:left-[2vh] xl:left-[5%] xl:top-[25%]">
          <img
            src={steps[currentStep].image}
            alt={`Spookies Step ${currentStep}`}
            className="h-[150px] w-[150px] rounded-[30px]  object-contain transition-opacity duration-300 sm:h-[220px] sm:w-[220px] md:h-[25vh] md:w-[25vw] lg:h-[300px] lg:w-[300px]"
          />
        </div>
        {/* Spooky charactor image */}
        <div className="absolute right-[8%] bottom-[0%] z-10 sm:right-8 md:right-12 lg:right-[16%] lg:bottom-[-5%] ">
          <img
            src={Spookey}
            alt="Spooky Character"
            className="h-auto w-[120px] object-contain drop-shadow-2xl sm:w-40 md:w-[200px] lg:w-[250px] xl:w-[20vw]"
          />
        </div>

        <div className="relative z-20 mx-auto h-[95vh] max-w-7xl px-4 pt-[18%] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="relative flex h-[95vh] flex-col items-center">
            <h1 className="absolute top-0 mb-8  pb-5 text-center text-5xl font-normal text-white sm:text-6xl md:text-7xl lg:mb-12 lg:text-[80px]">
              How to Buy
            </h1>

            <div className="Mansalva absolute top-[20%] md:top-0 md:left-[26%] mt-24 w-full max-w-4xl sm:bottom-[40%] ">
              <div className="font-normal sm:p-8 md:p-10 lg:p-12">
                <p className="mb-6 max-h-[150px] text-center md:w-[60vw] md:text-start  text-base leading-5 lg:leading-relaxed text-white transition-opacity duration-300 sm:text-lg md:text-xl lg:mb-8 lg:text-xl">
                  {steps[currentStep].content}
                </p>

                <div className="flex justify-center md:justify-start mt-13">
                  <button
                    onClick={handleNextClick}
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src={Nextbtn}
                      alt="Next"
                      className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default pathToBuy;
