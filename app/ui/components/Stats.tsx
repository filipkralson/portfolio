import { Motion } from '@/app/ui/motion';
import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';

type CardProps = {
  year: string;
  text: string;
  details: string;
};

const highSchool = {
  year: '2017-2021',
  text: 'VOŠ, OA a SZŠ Domažlice',
  details: 'Obor: Informační technologie',
};

const university = {
  year: '2021-2024',
  text: 'Technická univerzita v Liberci',
  details: 'BC. - Fakulta mechatroniky a mezioborových studií, specializace Aplikovaná informatika',
};

const job = {
  year: '2024 - současnost',
  text: 'Webový vývojář',
  details: 'Vývoj převážně backendu.',
};

const CardStats = (props: CardProps) => {
  return (
    <div className="flex items-center justify-center text-viridian p-10 rounded-3xl border-2 border-mintGreen shadow-xl backdrop-blur-lg bg-opacity-40">
      <div className="flex flex-col justify-start gap-6 w-full max-w-xl">
        <div>
          <p className="mb-1.5 text-lg font-light uppercase">{props.year}</p>
          <hr className="border-viridian" />
        </div>
        <p className="max-w-lg text-2xl leading-relaxed">{props.text}</p>
        <div>
          <p className="mb-2.5 text-sm font-light uppercase">{props.details}</p>
          <hr className="border-viridian" />
        </div>
      </div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-start justify-center gap-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <Motion direction="down" duration={0.3} delay={0.1}>
          <HiOutlineAcademicCap className="text-9xl text-mintGreen bg-viridian rounded-full p-5" />
        </Motion>
        <Motion direction="right" duration={0.3} delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold text-center text-viridian">Vzdělání</h2>
        </Motion>

        <div className="flex flex-col gap-8 w-full">
          <Motion direction="right" duration={0.3} delay={0.3}>
            <CardStats year={highSchool.year} text={highSchool.text} details={highSchool.details} />
          </Motion>

          <Motion direction="right" duration={0.3} delay={0.4}>
            <CardStats year={university.year} text={university.text} details={university.details} />
          </Motion>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        <Motion direction="down" duration={0.3} delay={0.1}>
          <HiOutlineBriefcase className="text-9xl text-mintGreen bg-viridian rounded-full p-5" />
        </Motion>
        <Motion direction="left" duration={0.3} delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold text-center text-viridian">
            Pracovní zkušenosti
          </h2>
        </Motion>
        <div className="flex flex-col gap-8 w-full">
          <Motion direction="left" duration={0.3} delay={0.3}>
            <CardStats year={job.year} text={job.text} details={job.details} />
          </Motion>
          <Motion direction="left" duration={0.3} delay={0.4}>
            <p className="text-viridian font-bold pl-5">a další projekty do šuplíku...</p>
          </Motion>
        </div>
      </div>
    </section>
  );
}
