export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-[#0b0b0b]/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
  
          {/* Logo */}
          <a
            href="#top"
            className="text-xl font-semibold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent"
          >
            OVR
          </a>
  
          {/* Nav Links */}
          <div className="flex space-x-3 text-gray-400 text-sm items-center">
            <a href="#about" className="hover:text-white transition">About</a>
            <span className="text-gray-700">|</span>
            <a href="#community" className="hover:text-white transition">Community</a>
            <span className="text-gray-700">|</span>
            <a href="#shop" className="hover:text-white transition">Shop</a>
          </div>
  
        </div>
      </nav>
    );
  }
  