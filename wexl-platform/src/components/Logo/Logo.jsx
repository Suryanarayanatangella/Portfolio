/**
 * UiTECH Logo Component
 * Professional logo with code brackets and modern design
 */

const Logo = ({ size = "default", className = "" }) => {
  const sizes = {
    small: { container: "w-8 h-8", text: "text-lg", icon: "w-4 h-4" },
    default: { container: "w-10 h-10", text: "text-2xl md:text-3xl", icon: "w-6 h-6" },
    large: { container: "w-16 h-16", text: "text-4xl", icon: "w-10 h-10" }
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${currentSize.container} bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group`}>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Code brackets icon */}
        <svg 
          className={`${currentSize.icon} text-white relative z-10 group-hover:scale-110 transition-transform duration-300`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
          />
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <h1 className={`font-dm-sans ${currentSize.text} font-bold bg-gradient-to-r from-primary via-[#0d2f43] to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
          UiTECH
        </h1>
      </div>
    </div>
  );
};

export default Logo;
