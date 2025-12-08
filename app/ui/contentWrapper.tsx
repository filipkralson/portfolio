import { ReactNode } from 'react';

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="relative max-w-screen min-h-screen overflow-hidden flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center py-20 px-10">
      {children}
    </section>
  );
}
