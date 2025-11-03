import Mountains from '../../../../public/mountains.png';
import Mountainsmobile from '../../../../public/mountainsMobile.png';
import BgElements from '../../../../public/BG Element.png';
import Spooky from '../../../../public/Spooky.png';
import SpookyAnimate from '../../../../public/animate1.gif';
import NextBtn from '../../../../public/nextbtn.png';

const whySpookyItems = [
  {
    title: 'Unique Tokenomics:',
    description:
      'Tokenomics: Our system is designed to reward loyal holders with passive earnings while ensuring long-term value.',
  },
  {
    title: 'NFT Integration:',
    description:
      'Dive into the world of exclusive, spine-tingling NFTs that capture the essence of the Spoooky vibe.',
  },
  {
    title: 'Community First:',
    description:
      'Our community drives us. We listen, we grow, and together we create something truly hauntingly special.',
  },
];

function About() {
  return (
    <section className="relative h-[95.5vh] w-full overflow-hidden bg-linear-to-r from-[#001641] to-[#4067BA]">
      {/* Background Images */}
      <img
        src={BgElements}
        alt="Mountains"
        className="absolute hidden object-cover md:block"
      />
      <img
        src={Mountains}
        alt="Mountains"
        className="absolute right-0 bottom-0 z-20 hidden h-[50vh] w-[60vw] object-contain object-bottom-right md:block"
      />
      {/* this image view only mobile view */}
      <img
        src={Mountainsmobile}
        alt="Mountains"
        className="absolute right-0 bottom-[-30%] z-20 h-screen w-screen object-contain object-bottom-right md:hidden"
      />
      <img
        src={SpookyAnimate}
        alt="Spooky Monster"
        className="absolute right-[5%] bottom-[10%] z-10 w-[220px] sm:bottom-30 sm:h-[70vh] sm:w-[50vw] lg:right-[2%] lg:bottom-[25%] lg:h-[60.75vh] lg:w-[24.42vw]"
      />

      <a
        href="/roadmap"
        className="group absolute right-[2%] bottom-[2%] z-50 hidden lg:block"
      >
        <div className="relative">
          {/* Rotating colorful glow */}
          <div className="spin-gradient absolute -inset-4 rounded-full opacity-75 blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Secondary pulsing glow */}
          <div className="absolute -inset-3 animate-pulse rounded-full bg-purple-500/40 blur-lg"></div>

          {/* Image with hover scale */}
          <div className="relative transition-transform duration-300 group-hover:scale-110">
            <img
              src={NextBtn}
              alt="Next: Roadmap"
              className="relative z-10 h-[16.35vh] drop-shadow-2xl"
            />
          </div>
        </div>
      </a>

      <div className="relative z-30 mx-auto h-[95vh] max-w-7xl px-6 lg:px-5">
        <div className="grid gap-16 py-24 lg:gap-20 lg:py-32">
          {/* Ready for a Adventure */}
          <div className="absolute top-20 max-w-2xl">
            <h1 className="text-[40px] leading-tight font-normal text-white md:text-7xl lg:text-8xl">
              Ready for a Adventure
            </h1>
            <p className="Mansalva mt-6 hidden h-[195px] max-w-[900px] text-lg leading-10 text-white md:block md:text-xl lg:text-xl">
              Welcome to Spooky, the token that&apos;s here to add a thrill to
              the blockchain! Built on a foundation of innovation, community,
              and just the right amount of spine-chilling fun, Spooky isn&apos;t
              just a token—it&apos;s an experience. Our mission is to create a
              vibrant ecosystem where creativity meets technology, offering both
              seasoned crypto enthusiasts and newcomers a space to explore the
              spookiest opportunities in DeFi.
            </p>
            {/* only mobile view text */}
            <p className="Mansalva mt-6h h-[100px] max-w-[316px] text-[16px] leading-6 text-white md:hidden md:text-xl">
              Welcome to Spooky, the token that's here to add a thrill to the
              blockchain! Built on a foundation of innovation, community, and
              just the right amount of spine-chilling fun, Spooky isn’t just a
              token—it’s an experience. Our mission is to create a vibrant
              ecosystem where creativity meets technology, offering both
              seasoned crypto enthusiasts and newcomers a space to explore the
              spookiest opportunities in DeFi
            </p>
          </div>

          {/* Why Spooky? */}
          <div className="absolute bottom-0 hidden max-w-[900px] md:block">
            <h1 className="text-6xl leading-tight font-normal text-white md:text-7xl lg:text-6xl">
              Why Spooky?
            </h1>
            <ul className="mt-6 space-y-6 text-base text-white md:text-lg lg:space-y-8 lg:text-xl">
              {whySpookyItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-2xl text-white">•</span>
                  <span>
                    <strong className="Mansalva font-normal">
                      {item.title}
                    </strong>{' '}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
