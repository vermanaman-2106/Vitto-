import AnimatedWrapper from "./AnimatedWrapper"; 
export default function Problem() {
  return (
    <AnimatedWrapper>
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14">
          The Reality of{" "}
          <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
            Modern Lending Tech
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fragmented Systems
            </h3>
            <p className="text-gray-600">
              LOS, LMS, and CRM operate in silos with no unified data layer.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI as an Add-on
            </h3>
            <p className="text-gray-600">
              Most vendors bolt AI onto legacy systems instead of building natively.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reactive Collections
            </h3>
            <p className="text-gray-600">
              Collections happen after default instead of predicting risk early.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Static Rule Engines
            </h3>
            <p className="text-gray-600">
              Traditional rule systems don't adapt or learn from new data.
            </p>
          </div>

        </div>
      </div>
    </section>
    </AnimatedWrapper>
  );
}