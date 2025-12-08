import { Motion } from '@/app/ui/motion';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-row justify-center">
      <Motion direction="down" delay={0.2} duration={0.6}>
        <section className="relative flex text-viridian">
          <div className="flex flex-col gap-10 text-left">
            <Motion direction="right" delay={0.3} duration={0.5}>
              <div className="flex md:flex-row flex-col justify-start gap-5">
                <h1 className="text-6xl font-bold">Moje</h1>
                <h1 className="text-6xl font-bold bg-viridian text-azure line md:px-4">
                  portfolio...
                </h1>
              </div>
            </Motion>
            <blockquote className="border-l-4 border-viridian pl-4">
              <div className="mb-2 text-sm text-cambridgeBlue italic">
                Merriam-Webster.com Dictionary
                <a
                  href="https://www.merriam-webster.com/dictionary/portfolio"
                  className="ml-2 text-mintCream-500 underline"
                  target="_blank"
                  rel="noopener noreferrer">
                  [source]
                </a>
              </div>
              <p className="font-bold">noun</p>
              <p>
                plural <span className="underline">portfolios</span>
              </p>
              <p>
                : a hinged cover or flexible case for carrying loose papers, pictures, or pamphlets
              </p>
              <p>
                [from the use of such a case to carry documents of state] : the office and functions
                of a minister of state or member of a cabinet
              </p>
              <p>
                : the securities held by an investor : the commercial paper held by a financial
                house (such as a bank)
              </p>
              <p>
                : a set of pictures (such as drawings or photographs) usually bound in book form or
                loose in a folder
              </p>
              <p>
                : a selection of a student&apos;s work (such as papers and tests) compiled over a
                period of time and used for assessing performance or progress
              </p>
            </blockquote>
          </div>
        </section>
      </Motion>
      <Motion direction="left" delay={0.2} duration={0.6}>
        <Link href="#contact-form" className="relative">
          <MdOutlineEmail className="w-[75px] h-[75px] bg-viridian rounded-full p-2 text-azure shadow-lg transition-transform transform ease-in-out duration-300 hover:scale-110 hover:bg-cambridgeBlue" />
        </Link>
      </Motion>
    </div>
  );
}
