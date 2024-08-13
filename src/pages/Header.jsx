import React from "react";
import {
  Dialog,
  TabGroup
 
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  setOpen = (open) => {
    this.setState({ open });
  };

  render() {
    const { cartCount } = this.props;
    const { open } = this.state;

    return (
      <div className="bg-white">
        {/* Mobile menu */}
        <Dialog open={open} onClose={() => this.setOpen(false)} className="relative z-40 lg:hidden">
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  onClick={() => this.setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <TabGroup className="mt-2">
                {/* Add your navigation logic here */}
              </TabGroup>
            </Dialog.Panel>
          </div>
        </Dialog>

        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>

          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  onClick={() => this.setOpen(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>

                <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </Link>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </Link>
                </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cartCount}
                      </span>
                      <span className="sr-only">items in cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
