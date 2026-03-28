import AnimatedWrapper from "./AnimatedWrapper";
export default function Modules() {
  const modules = [
    {
      title: "Data-Based Assessment",
      desc: "Unified ingestion of bureau, banking, and behavioral data.",
    },
    {
      title: "ML Model",
      desc: "Credit scoring and risk prediction using domain-trained models.",
    },
    {
      title: "Rule Engine & Decisioning",
      desc: "Policy-based approval logic with dynamic rule evaluation.",
    },
    {
      title: "Fraud Intelligence",
      desc: "Real-time fraud detection using anomaly signals and patterns.",
    },
    {
      title: "Collections Intelligence",
      desc: "Predictive recovery strategies with prioritization scoring.",
    },
    {
      title: "Agentic AI Layer",
      desc: "AI agents for borrower queries, field collections, and underwriting.",
    },
  ];

  return (
    <AnimatedWrapper>
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14">
          The{" "}
          <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
            AI Layer
          </span>{" "}
          of Vitto
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {modules.map((mod, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-blue-600 text-white mb-4 text-xl font-bold">
                {index + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {mod.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 mb-4">
                {mod.desc}
              </p>

              {/* LINK */}
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-300"
              >
                Explore →
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
    </AnimatedWrapper> 
  );
}