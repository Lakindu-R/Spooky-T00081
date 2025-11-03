

function Footer() {
  return (
    <footer className="relative bg-[#F12409] w-full h-[8vh] bottom-0 text-white py-2 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(15)].map((_, i) => (
          <div
            key={`flame-${i}`}
            className="absolute bottom-0 w-2 animate-flame"
            style={{
              left: `${(i * 7 + Math.random() * 3)}%`,
              height: `${30 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 1.5}s`,
            }}
          >
            <div className="w-full h-full bg-linear-to-t from-yellow-400 via-orange-500 to-transparent opacity-70 blur-sm"></div>
          </div>
        ))}
        
        {[...Array(10)].map((_, i) => (
          <div
            key={`flame-tip-${i}`}
            className="absolute bottom-0 w-3 animate-flame-tip"
            style={{
              left: `${(i * 10 + 2)}%`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 1}s`,
            }}
          >
            <div className="w-full h-full bg-linear-to-t from-red-500 via-orange-400 to-yellow-300 opacity-60 blur-md"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`ember-${i}`}
            className="absolute animate-ember"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-10px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div 
              className="w-1 h-1 bg-orange-400 rounded-full shadow-[0_0_8px_2px_rgba(251,146,60,0.8)]"
              style={{
                filter: 'blur(0.5px)',
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-orange-400/10 to-transparent animate-heat-wave"></div>
      </div>

      <div className="relative z-10 justify-center">
        <h1 className="text-center text-[12px] font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          @2025 Spooky All Right Reserved
        </h1>
      </div>


    </footer>
  );
}

export default Footer;