import spookies3 from '../../../../public/spookies.png';
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

        
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            
            <img
              src={spookies3}
              alt="Spooky Character"
              className="lg:h-screen brightness-[0.5]"
            />
          </div>
        </div>

     
        <div className="relative z-20 mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-0 ">
          <div className="flex items-center">
            

            <div className="absolute top-0 h-[90vh] w-[40vw] content-center text-center -left-[22vh]">
              <h1 className="Mansalva text-2xl leading-tight font-normal text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[7vh]">
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
