import React, { ReactElement } from "react";

type PageProps = {
  nav: ReactElement;
  main: ReactElement;
  footer: ReactElement;
};

export const Page = (props: PageProps) => {
  const { nav, main, footer } = props;
  return (
    <main className="flex flex-col h-full">
      <div className={`flx-grow-0 w-full sticky top-0 z-50`}>{nav}</div>
      <section className="flex-grow flex-shrink-0 px-6">{main}</section>
      {footer && (
        <footer className="flex-grow-0 flex-shrink-0 flex items-center justify-center h-64">
          {footer}
        </footer>
      )}
    </main>
  );
};
