import React, { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const Name = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track modal confirmation

  const storedData = JSON.parse(localStorage.getItem("cvData"));
  const fullName = storedData?.fullname || "John Doe";
  const designation = storedData?.designation || "Web Developer";
  const navigate = useNavigate();

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal and update confirmation state
  const closeModal = () => {
    setIsOpen(false);
    setIsConfirmed(true);
    navigate("admin");
  };

  return (
    <div className="mt-2 p-3">
      <div className="flex gap-2">
        <h1 className="text-5xl font-bold">{fullName}</h1>
        <GrUserAdmin className="text-4xl " />
        <button
          to="#"
          className="text-blue-500 hover:underline"
          onClick={openModal} // Call openModal function on click
        >
          (ADMIN)
        </button>
      </div>
      <pre>_______________________________</pre>
      <h2 className="text-3xl font-semibold">{designation}</h2>

      {/* Admin page content */}
      {isConfirmed && <AdminPage />}

      {/* Modal */}
      <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative p-8 bg-white rounded-xl shadow-md max-w-md">
                <Dialog.Title className="text-lg font-medium text-gray-900">
                  Login to Admin
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    className="border text-lg text-gray-500 p-4
                  "
                    placeholder="Entire email id"
                    type="email"
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="borde text-lg text-gray-500 p-4
                  "
                    type="password"
                    placeholder="Entire password"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal} // Call closeModal function on click
                  >
                    Hit Enter!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

// Dummy component for admin page
const AdminPage = () => {
  // You can replace this with your actual admin page component
  return (
    <div>
      <h1>Welcome to the Admin Page</h1>
      <p>This is the admin page content.</p>
    </div>
  );
};

export default Name;
