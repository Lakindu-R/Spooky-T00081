import left from '../../../../public/roadmap/left.png';
import right from '../../../../public/roadmap/right.png';
import phase1 from '../../../../public/roadmap/phase1.png';
import Spooky from '../../../../public/spooky.png';

function Roadmap() {
  return (
    <section className="relative mx-auto h-[95.5vh] w-full overflow-hidden bg-linear-to-b from-[#0a1628] via-[#1a3a5c] to-[#2a4a6c]">
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
          <img
            src={phase1}
            alt="Phase One"
            className="h-[180px] w-[180px] object-contain sm:h-[242px] sm:w-[242px] md:h-[280px] md:w-[280px] lg:h-[70%] lg:w-[70%]"
          />
        </div>

        <div className="z-20 mx-auto h-[95vh] max-w-7xl border px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="relative flex h-[95vh] flex-col items-center border">
            <div className="mb-6 lg:mb-8"></div>

            <h1 className="absolute top-0 mb-8 text-center text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:mb-12 lg:text-8xl">
              Roadmap
            </h1>

            <div className="absolute bottom-[40%] w-full max-w-4xl">
              <div className="rounded-[40px] border-2 p-6 shadow-2xl sm:p-8 md:p-10 lg:p-5 font-normal">
                <p className="mb-6 text-center text-base leading-relaxed text-white sm:text-lg md:text-xl lg:mb-8 lg:text-xl">
                  This is where we set the foundation by launching the Spooky
                  token, building a strong and supportive community, and rolling
                  out our official whitepaper to outline our vision and
                  tokenomics. With our initial token presale, public launch, and
                  listing on decentralized exchanges (DEX), we're focused on
                  creating awareness and excitement while ensuring Spooky has a
                  strong start in the cryptoverse.
                </p>

                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-xl">
                  The Awakening
                </h2>
              </div>

              <div className="absolute right-4 sm:right-8 sm:-bottom-16 md:right-12 md:-bottom-20 lg:right-16 lg:bottom-[-40%]">
                <img
                  src={Spooky}
                  alt="Spooky Character"
                  className="h-auto w-[120px] object-contain drop-shadow-2xl sm:w-[160px] md:w-[200px] lg:w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
