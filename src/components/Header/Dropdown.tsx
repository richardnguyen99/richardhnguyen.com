import * as React from "react";
import clsx from "classnames";
import { Dialog, Switch, Transition } from "@headlessui/react";
import { XIcon } from "@primer/octicons-react";

import DropdownMenu from "./DropdownMenu";
import ThemeContext from "@components/Theme/Context";

export type DropdownProps = {
  opening: boolean;
  onClose: () => void;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & DropdownProps
>;

/**
 * Header Dropdown is a part of the Header component
 *
 * This component defines a dropdown menu for the header component in the
 * mobile view. Dropdown menu is controlled by the <Toolbar /> component, that
 * toggles the open state of the dropdown.
 *
 * @param {Props} props To control the open state of the dropdown and close it.
 */
const Dropdown: React.FC<Props> = ({ opening, onClose, ...rest }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const cancelButtonRef = React.useRef<HTMLButtonElement>(null);
  const [enabled, setEnabled] = React.useState(theme === "dark");

  const handleSwitchToggler = React.useCallback(() => {
    setEnabled((prev) => !prev);
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  return (
    <Transition.Root show={opening} as={React.Fragment}>
      <Dialog
        {...rest}
        as="div"
        className="relative z-[9999]"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-2xl" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel
                className={clsx(
                  "w-full h-full overflow-hidden",
                  "bg-white dark:bg-[#0B1416]/90",
                  "rounded-2xl p-6 text-left align-middle",
                  "shadow-2xl transition-all transform "
                )}
              >
                <Dialog.Title
                  as="h1"
                  className={clsx(
                    "text-3xl font-black leading-6",
                    "text-gray-900 dark:text-white"
                  )}
                >
                  <div className="flex items-center">
                    <p>
                      <span
                        className={clsx(
                          "text-transparent bg-clip-text mr-2",
                          "bg-gradient-to-r to-sky-500 from-blue-600"
                        )}
                      >
                        Menu
                      </span>
                    </p>
                    <button
                      ref={cancelButtonRef}
                      type="button"
                      className={clsx(
                        "inline-flex justify-center px-2 py-2 ml-auto",
                        "rounded-md border border-transparent",
                        "font-medium text-sm",
                        "hover:bg-gray-200 dark:hover:bg-gray-700",
                        "focus:outline-none focus-visible:ring-2",
                        "focus-visible:ring-blue-500 ",
                        "focus-visible:ring-offset-2"
                      )}
                      onClick={onClose}
                    >
                      <XIcon size={24} />
                    </button>
                  </div>
                </Dialog.Title>
                <hr
                  className={clsx(
                    "my-4 h-[2px] border-0",
                    "bg-gray-200 dark:bg-slate-800"
                  )}
                />

                {/* DropMenu Content */}
                <div>
                  <DropdownMenu />
                </div>

                <hr
                  className={clsx(
                    "my-4 h-[2px] border-0",
                    "bg-gray-200 dark:bg-slate-800"
                  )}
                />

                <div
                  className={clsx(
                    "flex items-center justify-between gap-4 p-4"
                  )}
                >
                  <div>Dark theme</div>
                  <Switch
                    checked={enabled}
                    onChange={handleSwitchToggler}
                    className={clsx(
                      "relative inline-flex h-6 w-11 items-center rounded-full",
                      {
                        "bg-sky-500": enabled,
                        "bg-gray-400": !enabled,
                      }
                    )}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        enabled ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Dropdown;
