import Footer from "@components/Footer";
import Header from "@components/Header";
import * as React from "react";

export type Props<T = object> = React.PropsWithChildren<
  T & React.HTMLAttributes<HTMLDivElement>
>;

const RootLayout: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <main
      {...rest}
      id="root-layout"
      className="text-zinc-900 dark:text-gray-50 bg-slate-50 dark:bg-[#0B1416] transition-colors duration-300"
    >
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </main>
  );
};

export default RootLayout;
