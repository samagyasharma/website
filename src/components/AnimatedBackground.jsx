import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Large floating circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#d4838f]/20 animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-[#c97c88]/15 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-[#be757f]/20 animate-float-reverse"></div>
      
      {/* Medium floating circles */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-[#d4838f]/15 animate-float-medium"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#c97c88]/20 animate-float-slow"></div>
      <div className="absolute top-2/3 left-1/4 w-36 h-36 rounded-full bg-[#be757f]/15 animate-float"></div>

      {/* Small floating circles */}
      <div className="absolute top-1/4 right-1/2 w-24 h-24 rounded-full bg-[#d4838f]/10 animate-float-reverse"></div>
      <div className="absolute bottom-1/2 left-1/3 w-20 h-20 rounded-full bg-[#c97c88]/15 animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#be757f]/20 animate-float-slow"></div>

      {/* Musical notes */}
      <div className="absolute top-20 right-10 w-16 h-16 opacity-20 animate-float-slow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17V5.5L19 3V15" stroke="#be757f" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="6" cy="17" r="3" fill="#be757f"/>
          <circle cx="16" cy="15" r="3" fill="#be757f"/>
        </svg>
      </div>

      {/* Floating flowers */}
      <div className="absolute top-1/4 left-10 w-20 h-20 opacity-20 animate-float">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C14.5 5.5 17 7 20 7C20 13 16.5 19 12 21C7.5 19 4 13 4 7C7 7 9.5 5.5 12 3Z" fill="#d4838f"/>
        </svg>
      </div>

      {/* Paint brush */}
      <div className="absolute bottom-1/4 right-20 w-16 h-16 opacity-20 animate-float-reverse">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4L8.5 15.5M8.5 15.5L4 20M8.5 15.5L12 19" stroke="#c97c88" strokeWidth="2"/>
        </svg>
      </div>

      {/* Paint palette */}
      <div className="absolute bottom-20 left-20 w-20 h-20 opacity-20 animate-float-slow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 17.5228 6.47715 22 12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C16.9706 10 21 5.97056 21 1C21 1 2 2 2 12Z" fill="#F7D794"/>
          <circle cx="7.5" cy="10.5" r="1.5" fill="#E8C5C5"/>
          <circle cx="12" cy="7" r="1.5" fill="#B8D8D8"/>
          <circle cx="16.5" cy="10.5" r="1.5" fill="#9F7AEA"/>
        </svg>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-20 animate-spin-slow">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14 8L19 8L15 12L17 17L12 14L7 17L9 12L5 8L10 8L12 3Z" fill="#9F7AEA"/>
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/4 w-14 h-14 opacity-20 animate-float">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#E8C5C5" strokeWidth="2"/>
          <path d="M12 8V16M8 12H16" stroke="#E8C5C5" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground; 