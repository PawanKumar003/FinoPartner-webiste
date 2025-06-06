import React from "react";

function Dialog({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000b5] bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        {children}
        <div className="absolute top-1 right-1">
          <button
            onClick={onClose}
            className=" py-0 px-[6px] text-[16px] border border-[#bcb9b9] rounded-full    cursor-pointer hover:bg-red-600 hover:text-[#fff] text-[#bcb9b9]"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
