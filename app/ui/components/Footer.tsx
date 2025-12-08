import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col md:justify-evenly items-center gap-10 bg-gray-800 text-white w-full p-10">
      <div className="md:w-3/4 flex justify-center">
        <p className="md:text-lg text-sm">
          &copy; {new Date().getFullYear()} Filip Král. Všechna práva vyhrazena.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-lg opacity-50">Kontakt a sítě</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <Link
              href={'https://www.instagram.com/fifa_karl/'}
              target={'_blank'}
              rel="noopener noreferrer"
              className="text-viridian hover:text-pink-500">
              <FaInstagram size={24} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/filip-kral-developer'}
              target={'_blank'}
              rel="noopener noreferrer"
              className="text-viridian hover:text-blue-300">
              <FaLinkedin size={24} />
            </Link>
            <Link
              href={'https://github.com/filipkralson'}
              target={'_blank'}
              rel="noopener noreferrer"
              className="text-viridian hover:text-white">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
