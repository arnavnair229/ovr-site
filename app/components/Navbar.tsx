import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0b0b]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-xl font-semibold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">
          OVR
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#community" className="hover:text-white transition">Community</a>
          <a href="#shop" className="hover:text-white transition">Shop</a>
        </div>

      </div>
    </nav>
  );
}