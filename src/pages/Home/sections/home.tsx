import Spooky from '../../../../public/spooky.png';
import Spooky1 from '../../../../public/animate.gif';
import bg from '../../../../public/homeanimation.mp4';
import TelegramIcon from '../../../../public/telegram.png';
import TwitterIcon from '../../../../public/telegram.png';
import DexIcon from '../../../../public/dex.png';
import ShinyText from '@/components/ui/shinyText';
function Home() {
  const socialIcons = [
    { name: 'Dex', icon: DexIcon, url: '#' },
    { name: 'Telegram', icon: TelegramIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
  ];
  return (
    <section
      id="home"
      className="bg-home bg-common relative h-[95.5vh] overflow-hidden"
    >
      <div className="mx-auto flex flex-col items-center justify-center px-4 sm:px-[2vw]">
        <div className="z-10 mt-[20%] flex flex-col items-center text-center sm:mt-[5%] xl:mt-[1%]">
          <ShinyText speedInMs={15000} className="w-fit">
            <h1 className="text-[15vh] font-normal sm:text-[34vh] xl:text-[18.50vw]">
              Spooky
            </h1>
          </ShinyText>
          <p className="Mansalva mt-0 text-[4.1vh] leading-tight text-white sm:mt-[-2vh] sm:text-[4vh] md:mt-[-14%] md:text-[3vh] lg:text-[3vh] xl:mt-[-9vh]">
            Join the Eerie Revolution in DeFi!
          </p>{' '}
          <div className="mt-[10%] flex items-center gap-[10px] md:hidden">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-8 w-8 lg:h-10 lg:w-10"
                />
              </a>
            ))}
          </div>
          <img
            src={Spooky1}
            alt="Spooky Monster"
            className="absolute bottom-0 mx-auto mt-[20%] h-auto w-[55vw] max-w-[469px] sm:mt-[20.83%] sm:w-[35vw] sm:-bottom-[-10%] md:-bottom-[15%] lg:-bottom-10 lg:w-[30.83vw] xl:w-[45vh]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
