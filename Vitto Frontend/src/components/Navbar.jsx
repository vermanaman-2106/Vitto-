import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="text-xl font-bold cursor-pointer bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent"
        >
          Vitto
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm text-gray-700">

          <button
            onClick={() => navigate("/")}
            className="hover:text-black transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/platform")}
            className="hover:text-black transition"
          >
            Platform
          </button>

          <button
            onClick={() => navigate("/automation")}
            className="hover:text-black transition"
          >
            Automation
          </button>

        </div>

        {/* CTA */}
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
        >
          Book Demo
        </button>

      </div>
    </div>
  );
}