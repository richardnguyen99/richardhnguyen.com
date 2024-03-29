import * as React from "react";
import clsx from "classnames";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";

export type CollapsibleProps = {
  summary: string;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & CollapsibleProps
>;

const Collapsible: React.FC<Props> = ({ children, summary, ...rest }) => {
  return (
    <Disclosure {...rest} as="div">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={clsx("group flex w-full justify-between mt-8", {
              "rounded-lg px-4 py-2 text-left text-sm font-extrabold": true,
              "bg-slate-100 hover:bg-slate-200": true,
              "dark:bg-[#1B2426] hover:dark:bg-[#2E3739]": true,
              "focus:outline-none focus-visible:ring": true,
              "focus-visible:ring-purple-500/75": true,
              "transition-colors duration-300": true,
            })}
          >
            <span
              className={clsx({
                "group-hover:dark:text-white group-hover:text-black": true,
              })}
            >
              {summary}
            </span>
            <ChevronUpIcon
              className={clsx("h-5 w-5 text-sky-500", {
                "transition-transform duration-200": true,
                "rotate-180 transform": open,
              })}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform -translate-y-[5px] opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-[5px] opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-4 pb-2">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Collapsible;
