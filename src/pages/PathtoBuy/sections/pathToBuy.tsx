import { useState } from 'react';
import Spookies1 from "../../../../public/PathtoBuy/spookies1.png";
import Spookies2 from "../../../../public/PathtoBuy/spookies2.png";
import Spookies3 from "../../../../public/PathtoBuy/spookies3.png";
import Spookey from "../../../../public/Spooky.png";
import Nextbtn from "../../../../public/nextbtn.png";
import Bg from "../../../../public/PathtoBuy/bg.png";

function pathToBuy() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const steps: Record<1 | 2 | 3, { content: string; image: string }> = {
    1: {
      content: "You're ready to dive into the thrilling world of Spooky, and the first step is setting up your tools for the adventure. You download a crypto wallet, like MetaMask or Trust Wallet, and prepare it to connect to the blockchain. With excitement, you fund your wallet with the necessary cryptocurrency—think of it as fueling up your ride for the journey ahead.",
      image: Spookies1
    },
    2: {
      content: "Add your second step content here. This is where you describe the next phase of buying Spooky tokens. Explain the process of connecting to the exchange or platform.",
      image: Spookies2
    },
    3: {
      content: "Add your third step content here. This is the final step where users complete their purchase and become part of the Spooky community!",
      image: Spookies3
    }
  };

  const handleNextClick = () => {
    setCurrentStep(currentStep === 3 ? 1 : (currentStep + 1) as 1 | 2 | 3);
  };

  return (
    <section className="relative mx-auto h-[95vh] w-full overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#1a3a5c] to-[#2a4a6c]">
      <div className="mx-auto max-w-3xl">
        {/* Background Image */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <img
            src={Bg}
            alt="Background"
            className="h-auto w-full object-cover lg:h-[80vh]"
          />
        </div>

        {/* Left Side - Spookies Characters */}
        <div className="absolute top-[20%] left-4 z-10 sm:left-8 md:left-12 lg:left-16">
          <img
            src={steps[currentStep].image}
            alt={`Spookies Step ${currentStep}`}
            className="h-[180px] w-[180px] rounded-[30px] object-contain transition-opacity duration-300 sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[300px] lg:w-[300px]"
          />
        </div>

        {/* Right Side - Spooky Character */}
        <div className="absolute bottom-8 right-4 z-10 sm:right-8 md:right-12 lg:right-16">
          <img
            src={Spookey}
            alt="Spooky Character"
            className="h-auto w-[120px] object-contain drop-shadow-2xl sm:w-40 md:w-[200px] lg:w-[250px]"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 mx-auto h-[95vh] max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="relative flex h-[95vh] flex-col items-center">
            <div className="mb-6 lg:mb-8"></div>

            {/* Title */}
            <h1 className="absolute top-0 mb-8 text-center text-5xl font-normal text-white sm:text-6xl md:text-7xl lg:mb-12 lg:text-[80px]">
              How to Buy
            </h1>

            {/* Content Box */}
            <div className="Mansalva absolute bottom-[35%] w-full max-w-4xl sm:bottom-[40%]">
              <div className="font-normal sm:p-8 md:p-10 lg:p-12">
                <p className="mb-6 text-start text-base leading-relaxed text-white sm:text-lg md:text-xl lg:mb-8 lg:text-xl transition-opacity duration-300">
                  {steps[currentStep].content}
                </p>

                {/* Next Button */}
                <div className="flex justify-start">
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