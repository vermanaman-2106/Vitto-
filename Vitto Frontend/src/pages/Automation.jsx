import AnimatedWrapper from "../components/AnimatedWrapper";

export default function Automation() {
  const layers = [
    {
      title: "Layer A — Customer Acquisition",
      color: "from-blue-500 to-blue-600",
      modules: [
        "Lead Management",
        "Partner Onboarding",
        "DIY / Assisted Journeys",
        "Partner & Employee Flows",
      ],
    },
    {
      title: "Layer B — Underwriting & LOS",
      color: "from-green-500 to-green-600",
      modules: [
        "KYC (Individual + Entity)",
        "UCIC & De-duplication",
        "Document Analyzer",
        "Rule Engine & Underwriting",
        "E-Sign & Disbursement",
      ],
    },
    {
      title: "Layer C — Collections",
      color: "from-yellow-500 to-yellow-600",
      modules: [
        "Case Allotment",
        "PTP Capture",
        "Payment Gateway Integration",
        "Omni-channel Automation",
      ],
    },
    {
      title: "Layer D — LMS",
      color: "from-purple-500 to-purple-600",
      modules: [
        "Ledger Creation",
        "Insurance Auto Deduct",
        "Loan Closure",
        "Debt Tagging",
      ],
    },
    {
      title: "Layer E — CRM & Communications",
      color: "from-red-500 to-red-600",
      modules: [
        "360° Customer View",
        "Service Management",
        "Internal Hub",
        "Campaigns",
        "Reporting & Analytics",
      ],
    },
  ];

  return (
    <AnimatedWrapper>
      <div className="bg-white overflow-hidden">

        {/* 🔥 HERO */}
        <section className="py-28 px-6 text-center relative bg-gradient-to-br from-blue-50 via-white to-red-50">

          {/* glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-400 blur-3xl opacity-20 rounded-full"></div>

          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Full-Stack Lending Automation
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vitto unifies every operational layer of lending into a single,
            AI-native infrastructure — from acquisition to collections.
          </p>
        </section>

        {/* 🔥 LAYERS */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto space-y-16">

            {layers.map((layer, i) => (
              <div
                key={i}
                className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >

                {/* HEADER */}
                <div
                  className={`bg-gradient-to-r ${layer.color} text-white px-6 py-4 font-semibold`}
                >
                  {layer.title}
                </div>

                {/* MODULES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

                  {layer.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >

                      {/* subtle glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition"></div>

                      <p className="text-sm font-medium text-gray-800">
                        {mod}
                      </p>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>
        </section>

      </div>
    </AnimatedWrapper>
  );
}