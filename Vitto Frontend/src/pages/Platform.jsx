import AnimatedWrapper from "../components/AnimatedWrapper";

export default function Platform() {
  const modules = [
    {
      title: "Data-Based Assessment",
      desc: "Unified ingestion of bureau, banking, and behavioral data into a single decision layer.",
    },
    {
      title: "ML Model",
      desc: "Domain-trained models for credit scoring, segmentation, and default prediction.",
    },
    {
      title: "Rule Engine & Decisioning",
      desc: "Hybrid decisioning combining deterministic policies with ML outputs.",
    },
    {
      title: "Fraud Intelligence",
      desc: "Real-time anomaly detection using identity, behavioral, and transaction signals.",
    },
    {
      title: "Collections Intelligence",
      desc: "Predictive prioritization and recovery strategy optimization.",
    },
    {
      title: "Agentic AI",
      desc: "AI agents powered by policy-aware models for decisioning and operations.",
    },
  ];

  return (
    <AnimatedWrapper>
      <div className="bg-white overflow-hidden">

        {/* 🔥 HERO */}
        <section className="py-28 px-6 text-center relative bg-gradient-to-br from-blue-50 via-white to-red-50">
          
          {/* glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-400 blur-3xl opacity-20 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              AI-First Lending Platform
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built from the ground up to integrate data, decisioning, and operations
            into a unified AI-native infrastructure.
          </p>
        </section>

        {/* 🔥 OVERVIEW */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed text-lg">
            Vitto’s AI layer is embedded directly into the lending stack.
            Each module operates on a shared data architecture, enabling real-time,
            explainable, and policy-aligned decisioning across the lifecycle.
          </div>
        </section>

        {/* 🔥 MODULES GRID */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {modules.map((mod, i) => (
              <div
                key={i}
                className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* glow hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition"></div>

                <h3 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition">
                  {mod.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* 🔥 AGENTIC AI SECTION */}
        <section className="py-28 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto space-y-10">

            <h2 className="text-4xl font-bold text-center">
              Agentic AI in Lending Infrastructure
            </h2>

            {/* glass content */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/40 p-8 rounded-2xl shadow-lg space-y-6 text-gray-700 leading-relaxed">

              <p>
                Vitto uses a Retrieval-Augmented Generation (RAG) pipeline combined
                with a domain-trained Small Language Model (SLM). Each query is
                enriched with credit policies, internal rules, and customer data
                before generating a response.
              </p>

              <p>
                Generic LLMs lack access to internal policy layers, making them
                unsuitable for regulated environments. They introduce hallucination
                risks and lack auditability.
              </p>

              <p>
                A domain-trained SLM ensures explainability, compliance, and
                deterministic behavior, making it suitable for underwriting and
                collections workflows.
              </p>

            </div>

            {/* AGENTS */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">

              {[
                {
                  title: "Borrower Agent",
                  desc: "Handles borrower queries, EMI breakdowns, and status tracking.",
                },
                {
                  title: "Field Agent",
                  desc: "Assists collections with prioritization and recovery strategies.",
                },
                {
                  title: "Underwriter Agent",
                  desc: "Provides policy Q&A and decision explanations.",
                },
              ].map((agent, i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-white/70 border border-white/40 p-6 rounded-xl shadow-lg hover:scale-105 transition"
                >
                  <h4 className="font-semibold mb-2">{agent.title}</h4>
                  <p className="text-sm text-gray-600">{agent.desc}</p>
                </div>
              ))}

            </div>

          </div>
        </section>

      </div>
    </AnimatedWrapper>
  );
}