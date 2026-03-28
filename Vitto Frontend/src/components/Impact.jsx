import AnimatedWrapper from "./AnimatedWrapper";
export default function Impact() {
  const impacts = [
    {
      title: "Faster Credit Decisions",
      desc: "Reduce approval time from days to minutes with automated underwriting.",
      metric: "70%",
    },
    {
      title: "Reduced Portfolio Risk",
      desc: "Improve risk assessment using real-time data and ML-driven scoring.",
      metric: "30%",
    },
    {
      title: "Higher Recovery Rates",
      desc: "Increase collections efficiency with predictive prioritization.",
      metric: "25%",
    },
    {
      title: "Seamless Integrations",
      desc: "Connect with 50+ data providers, CRMs, and payment systems.",
      metric: "50+",
    },
  ];

  return (
    <AnimatedWrapper>
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14">
          Business Impact —{" "}
          <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
            Measurable
          </span>{" "}
          from Day One
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {impacts.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >

              {/* METRIC */}
              <div className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent mb-3">
                {item.metric}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
    </AnimatedWrapper>
  );
}