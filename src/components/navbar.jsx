import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import { cartService } from "../services/cartService";
import { usersService } from "../services/usersService";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [token, setToken] = useState(authService.tokenValue);
  const [products, setProducts] = useState(cartService.cartValue);
  const [currentUser, setCurrentUser] = useState({});
  const [t, i18n] = useTranslation();

  const isLogged = () => token !== "";

  useEffect(() => {
    authService.token.subscribe(setToken);
    cartService.cart.subscribe(setProducts);
  }, []);

  useEffect(() => {
    if (token !== "") {
      usersService.getCurrentUser().then((res) => {
        setCurrentUser(res.data);
      });
    }
  }, [token]);

  const getProductsCount = () => {
    let count = 0;
    products.forEach((p) => (count += p.quantity));
    return count;
  };

  const handleTranslate = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleTranslate("en")}
                      className="text-gray-300 focus:outline-none outline-none transition-all hover:bg-gray-700 hover:text-white containerpx-3 px-3 py-2 rounded-md text-l font-medium"
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleTranslate("pl")}
                      className="text-gray-300 focus:outline-none outline-none transition-all hover:bg-gray-700 hover:text-white containerpx-3 px-3 py-2 rounded-md text-l font-medium"
                    >
                      PL
                    </button>
                    {isLogged() && (
                      <Link
                        to="/"
                        className="text-gray-300 transition-all hover:bg-gray-700 hover:text-white containerpx-3 px-3 py-2 rounded-md text-l font-medium"
                      >
                        {t("navbar.products")}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!isLogged() && (
                  <Link
                    to="/login"
                    className={classNames(
                      false
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-l font-medium"
                    )}
                    aria-current={false ? "page" : undefined}
                  >
                    {t("navbar.login")}
                  </Link>
                )}
                {!isLogged() && (
                  <Link
                    to="/register"
                    className={classNames(
                      false
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-l font-medium transition-all"
                    )}
                    aria-current={false ? "page" : undefined}
                  >
                    {t("navbar.signUp")}
                  </Link>
                )}
                {isLogged() && (
                  <Link
                    to="/cart"
                    className={classNames(
                      false
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-2xl mr-2 font-medium transition-all"
                    )}
                    aria-current={false ? "page" : undefined}
                  >
                    <span className="bg-green-400 px-3 font-bold py-1 mr-3 text-center rounded-full text-white">
                      {getProductsCount()}
                    </span>

                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </Link>
                )}

                {/* Profile dropdown */}
                {isLogged() && (
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-gray-800 transition-all px-4 py-2 flex text-l rounded hover:bg-gray-900 focus:outline-none">
                            <span className="sr-only">Open user menu</span>
                            {currentUser.email && (
                              <span className="text-white">
                                {t("navbar.welcome")} {currentUser.email}
                              </span>
                            )}
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/orders"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-l text-gray-700"
                                  )}
                                >
                                  Orders
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  onClick={authService.logoutUser}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-l text-gray-700"
                                  )}
                                >
                                  Log out
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleTranslate("en")}
                className="text-gray-300 outline-none transition-all hover:bg-gray-700 hover:text-white containerpx-3 px-3 py-2 rounded-md text-l font-medium"
              >
                EN
              </button>
              <button
                onClick={() => handleTranslate("pl")}
                className="text-gray-300  outline-none transition-all hover:bg-gray-700 hover:text-white containerpx-3 px-3 py-2 rounded-md text-l font-medium"
              >
                PL
              </button>
              {isLogged() && (
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 transition-all hover:text-white containerpx-3 px-3 py-2 rounded-md text-l font-medium"
                >
                  {t("navbar.products")}
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
