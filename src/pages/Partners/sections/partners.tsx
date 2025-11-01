import spookies from '../../../../public/spookies.png';
import Mountains from '../../../../public/mountains.png';
import Bg from '../../../../public/PathtoBuy/bg.png';

function partners() {
  return (
    <section className="relative mx-auto h-[95vh] w-full overflow-hidden bg-linear-to-b from-[#0a1628] via-[#1a3a5c] to-[#2a4a6c]">
      <div className="mx-auto max-w-7xl">
        <div className="absolute right-0 bottom-0 left-0 z-0">
          <img
            src={Bg}
            alt="Background"
            className="h-auto w-full object-cover lg:h-[80vh]"
          />
        </div>
        <div className="absolute right-0 bottom-[-20%] z-20">
          <img
            src={Mountains}
            alt="Background"
            className="md:w-[70vw] lg:w-[60vw]"
          />
        </div>
        {/* Spookies only show large screen */}
        <div className="absolute right-[14%] -bottom-[7%] hidden items-center justify-center lg:block">
          <img
            src={spookies}
            alt="Spooky Character"
            className="w-[900px] lg:h-screen brightness-75"
          />
        </div>
        {/* Spookies  only show small screen */}
        <div className="absolute bottom-0 left-1/2 flex h-[60vh] w-[200vw] -translate-x-1/2 lg:hidden">
          <img
            src={spookies}
            alt="Spooky Character"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="relative z-20 mx-auto px-4 pt-[23%] md:pt-[15%] sm:px-6 sm:py-16 lg:px-0 ">
          <div className="flex items-center justify-center lg:justify-start lg:items-start lg:w-[584px]">
            <div className=" text-center   ">
              <h1 className="Mansalva text-2xl leading-tight font-normal text-white sm:text-3xl md:text-2xl lg:text-[5vh] ">
                We are always open for partnerships. If you are interested,
              </h1>
              <p className="Mansalva text-xl font-normal text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                please reach out to
              </p>

              <a
                href="mailto:partnerships@spooky.io"
                className="Mansalva inline-block text-xl font-normal text-white transition-colors hover:text-[#00ff88] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                partnerships@spooky.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default partners;
