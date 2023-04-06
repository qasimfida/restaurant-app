import React from 'react';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ isOpen, handleClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75">
          <div className="absolute inset-0"></div>

          <div className="z-20 w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Modal Title</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div>
              <p className="text-sm text-gray-500">Modal content goes here.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
