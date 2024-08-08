import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart.jsx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  // Function to handle closing the mobile menu
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-200 sticky top-0 z-50 pb-11">
      <nav aria-label="Global" className="h-20 text-lg">
        <div className="py-2.5 px-5 flex justify-between items-center sm:px-16 lg:px-9 lg1/2:px-32 xl:px-44">
          <div className="lg:hidden flex">
            <Link to="/">
              <img src="/img/placeholder-logo-1.png" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-7 lg:hidden">
            <div className="flex items-center text-[#777] cursor-pointer justify-center">
              <div className="cartIcon relative" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span className="text-xs rounded-[50%] w-5 h-5 bg-[#2879fe] text-white absolute -top-2.5 -right-2.5 flex items-center justify-center">
                  {products.length}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="h-10 w-10" />
            </button>
          </div>
          <div className="hidden lg:flex">
            <Link to="/">
              <img src="/img/placeholder-logo-1.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6 justify-end">
            <div className="item">
              <Link to="/">Hogar</Link>
            </div>
            <div className="item">
              <Link to="/about-us">Conócenos</Link>
            </div>
            <div className="item">
              <Link to="/contact">Contacto</Link>
            </div>
            <div className="flex items-center text-[#777] cursor-pointer">
              <div className="cartIcon relative" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span className="text-xs rounded-[50%] w-5 h-5 bg-[#2879fe] text-white absolute -top-2.5 -right-2.5 flex items-center justify-center">
                  {products.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {open && <Cart />}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img src="/img/placeholder-logo-1.png" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root text-xl text-center">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-center gap-9">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hogar
                </Link>
                <Link
                  to="/about-us"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Conócenos
                </Link>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
