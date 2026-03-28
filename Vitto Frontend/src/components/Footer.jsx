import AnimatedWrapper from "./AnimatedWrapper";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedWrapper>
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              Vitto
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              AI-native infrastructure for modern lending
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Product</a>
            <a href="#" className="hover:text-white transition">Solutions</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>© 2026 Vitto Technologies</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>

        </div>

      </AnimatedWrapper>
      </div>
    </footer>
  );
}