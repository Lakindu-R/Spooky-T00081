import left from '../../../../public/roadmap/left.png';
import right from '../../../../public/roadmap/right.png';
import phase1 from '../../../../public/roadmap/phase1.png';
import Spooky from '../../../../public/spooky.png';

function Roadmap() {
  return (
    <section className="bg-roadmap bg-common relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0">
        <img
          src={left}
          alt="Left decoration"
          className="hidden h-[600px] w-auto md:h-[800px] lg:block lg:h-[710px]"
        />
      </div>
      <img src={phase1} alt="" className="absolute left-[65px] bottom-0 border w-[356px] h-[356px]" />

      <div className="absolute top-0 right-0">
        <img
          src={right}
          alt="Right decoration"
          className="h-[600px] w-auto md:h-[800px] lg:h-[710px]"
        />
      </div>
      <div className=""></div>
    </section>
  );
}

export default Roadmap;
