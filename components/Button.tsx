import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<htmlbuttonelement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

const Button: React.FC<buttonprops> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  className = '', 
  disabled,
  ...props 
}) => {
  // Pill shape, bold font, transition
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Solid Black button with Stacks Orange text
    primary: "bg-black text-[#FF9900] hover:bg-neutral-800 shadow-lg border border-transparent",
    // Transparent with Black border
    secondary: "bg-transparent hover:bg-black hover:text-[#FF9900] text-black border border-black",
    // Same as secondary for now
    outline: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-[#FF9900]"
  };

  return (
    <button classname="{`${baseStyles}" ${variants[variant]}="" ${classname}`}="" disabled="{disabled" ||="" isloading}="" {...props}="">
      {isLoading ? (
        <>
          <svg classname="animate-spin -ml-1 mr-3 h-5 w-5 text-[#FF9900]" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24">
            <circle classname="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokewidth="4"></circle>
            <path classname="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : children}
    </button>
  );
};

export default Button;