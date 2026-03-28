import AnimatedWrapper from "./AnimatedWrapper";
export default function CTA() {
  return (
    <AnimatedWrapper>
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-blue-600 text-white">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Discover how{" "}
          <span className="text-white underline decoration-white/30">
            AI-native infrastructure
          </span>{" "}
          transforms lending
        </h2>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
          Join forward-thinking banks and NBFCs already leveraging Vitto.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          {/* PRIMARY CTA */}
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book a Demo
          </button>

          {/* SECONDARY CTA */}
          <button className="border border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
            Learn More
          </button>

        </div>
      </div>
    </section>
    </AnimatedWrapper>
  );
}