import Spooky from '../../../../public/spooky.png';
import TelegramIcon from '../../../../public/telegram.png';
import TwitterIcon from '../../../../public/telegram.png';
import DexIcon from '../../../../public/dex.png';
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
        <div className="z-10 mt-[30%] flex flex-col items-center text-center sm:mt-[5%] xl:mt-[1%]">
          <h1 className="bg-linear-to-r from-[#676565] via-[#FFFFFF] to-[#676565] bg-clip-text text-[15vh] font-normal text-transparent sm:text-[34vh] xl:text-[18.50vw]">
            Spooky
          </h1>
          <p className="Mansalva mt-0 text-[4.1vh] leading-tight text-white sm:mt-[-2vh] sm:text-[4vh] md:mt-[-14%] md:text-[3vh] lg:text-[3vh] xl:mt-[-9vh]">
            Join the Eerie Revolution in DeFi!
          </p>{' '}
          <div className="md:hidden items-center gap-[10px] flex mt-[10%]">
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
            src={Spooky}
            alt="Spooky Monster"
            className="absolute bottom-0 mx-auto mt-[20%] h-auto w-[55vw] max-w-[469px] sm:mt-[20.83%] sm:w-[35vw] lg:w-[30.83vw] xl:w-[35vh]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
