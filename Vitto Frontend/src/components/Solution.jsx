import AnimatedWrapper from "./AnimatedWrapper";
export default function Solution() {
  return (
    <AnimatedWrapper>
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14 leading-tight">
          <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
            AI-native decisioning
          </span>{" "}
          meets full-stack automation
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Vitto is not an AI layer on top of legacy systems.
              It is built as a unified infrastructure where decisioning,
              data, and operations are tightly integrated.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every underwriting decision, fraud signal, and collection action
              is powered by domain-trained models and a shared data layer —
              enabling real-time, consistent, and explainable outcomes.
            </p>
          </div>

          {/* RIGHT SIDE — CARDS */}
          <div className="space-y-6">

            <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Domain-trained models
              </h3>
              <p className="text-gray-600">
                Models trained specifically on lending workflows and credit policies.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Unified architecture
              </h3>
              <p className="text-gray-600">
                No LOS/LMS/CRM silos — everything operates on a single data layer.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Explainability & compliance
              </h3>
              <p className="text-gray-600">
                Every decision is traceable, auditable, and aligned with policy.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    </AnimatedWrapper>
  );
}