import AnimatedWrapper from "./AnimatedWrapper";
export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "Vitto reduced our loan processing time by 60% while improving risk accuracy.",
      name: "Rahul Mehta",
      role: "Head of Credit",
      company: "ABC NBFC",
    },
    {
      quote:
        "The unified architecture eliminated our dependency on multiple vendors.",
      name: "Anjali Verma",
      role: "CTO",
      company: "XYZ Finance",
    },
  ];

  return (
    <AnimatedWrapper>
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
            Modern Financial Institutions
          </span>
        </h2>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-16 opacity-70">
          <div className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition">BankCo</div>
          <div className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition">FinCorp</div>
          <div className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition">LendX</div>
          <div className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition">CreditFlow</div>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* QUOTE ICON */}
              <div className="text-3xl text-red-500 mb-4">“</div>

              {/* TEXT */}
              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                {t.quote}
              </blockquote>

              {/* USER */}
              <div className="flex items-center gap-4">

                {/* AVATAR */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-blue-600 text-white font-bold">
                  {t.name[0]}
                </div>

                {/* INFO */}
                <div>
                  <div className="font-semibold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {t.role}, {t.company}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
    </AnimatedWrapper>  
  );
}