import spookies3 from "../../../../public/spookies.png";
import Mountains from "../../../../public/mountains.png";
import Bg from "../../../../public/PathtoBuy/bg.png";

function partners() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#1a3a5c] to-[#2a4a6c]">
      <div className="mx-auto max-w-3xl">
        {/* Background Image */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <img
            src={Bg}
            alt="Background"
            className="h-auto w-full object-cover lg:h-[80vh]"
          />
        </div>

        {/* Center - Spooky Character with Glow */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 z-0 h-[400px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88] opacity-40 blur-[100px] sm:h-[500px] sm:w-[400px] lg:h-[600px] lg:w-[500px]"></div>
            
            {/* Spooky Character */}
            <img
              src={spookies3}
              alt="Spooky Character"
              className="relative z-10 h-auto w-[250px] object-contain drop-shadow-2xl sm:w-[350px] md:w-[450px] lg:w-[500px]"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 mx-auto h-[95vh] max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="relative flex h-[95vh] flex-col items-center justify-center">
            
            {/* Text Content - Left Side */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-8 md:left-12 lg:left-16">
              <div className="max-w-md space-y-4">
                <h1 className="Mansalva text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  We are always open for partnerships. If you are interested,
                </h1>
                <p className="Mansalva text-2xl font-normal text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  please reach out to
                </p>
                <a 
                  href="mailto:partnerships@spooky.io"
                  className="Mansalva inline-block text-2xl font-normal text-white transition-colors hover:text-[#00ff88] sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  partnerships@spooky.io
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default partners;