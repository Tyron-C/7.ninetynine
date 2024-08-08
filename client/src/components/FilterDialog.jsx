import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Fragment } from "react";

export default function FilterDialog({ open, onClose, subCategories = [] }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        className="relative z-40 lg:hidden mt-[80px]"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        />
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300"
          enterFrom="transform translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition ease-in-out duration-300"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform translate-x-full opacity-0"
        >
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="mt-28 flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.length > 0 ? (
                    subCategories.map((category) => (
                      <li key={category.id}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <p>No categories available</p>
                  )}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

FilterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  subCategories: PropTypes.array,
};

FilterDialog.defaultProps = {
  subCategories: [],
};
