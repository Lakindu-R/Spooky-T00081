import Mountains from '../../../../public/mountains.png';
import Spooky from '../../../../public/Spooky.png';
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
    <section className="relative h-[95.5vh] w-full overflow-hidden bg-linear-to-r from-[#1D2E54] to-[#4067BA]">
      {/* Background Images */}
      <img
        src={Mountains}
        alt="Mountains"
        className="absolute right-0 bottom-0 z-20 h-[55vh] w-[80vw] object-contain object-bottom-right"
      />
      <img
        src={Spooky}
        alt="Spooky Monster"
        className="absolute right-[5%] bottom-[10%] z-10 w-[220px] lg:right-[10%] lg:bottom-[25%] lg:h-[61.75vh] lg:w-[24.42vw]"
      />
      <a
        href="/roadmap"
        className="absolute right-[2%] bottom-[2%] z-50 hidden lg:block"
      >
        <img src={NextBtn} alt="Next: Roadmap" className="h-[16.35vh]" />
      </a>

      {/* Text Content */}
      <div className="relative z-30 mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="grid gap-16 py-24 lg:gap-20 lg:py-32">
          {/* Section 1: Ready for a Adventure */}
          <div className="max-w-2xl border">
            <h1 className="text-6xl leading-tight font-normal text-white md:text-7xl lg:text-8xl">
              Ready for a Adventure
            </h1>
            <p className="Mansalva mt-6 max-w-[900px] text-lg leading-10 text-white md:text-xl lg:text-2xl">
              Welcome to Spooky, the token that&apos;s here to add a thrill to
              the blockchain! Built on a foundation of innovation, community,
              and just the right amount of spine-chilling fun, Spooky isn&apos;t
              just a token—it&apos;s an experience. Our mission is to create a
              vibrant ecosystem where creativity meets technology, offering both
              seasoned crypto enthusiasts and newcomers a space to explore the
              spookiest opportunities in DeFi.
            </p>
          </div>

          {/* Section 2: Why Spooky? - Dynamic List */}
          <div className="max-w-[900px] border">
            <h1 className="text-6xl leading-tight font-normal text-white md:text-7xl lg:text-8xl">
              Why Spooky?
            </h1>
            <ul className="mt-6 space-y-6 text-base text-white md:text-lg lg:space-y-8 lg:text-xl">
              {whySpookyItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-2xl text-white">•</span>
                  <span>
                    <strong className="font-normal Mansalva">{item.title}</strong>{' '}
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
