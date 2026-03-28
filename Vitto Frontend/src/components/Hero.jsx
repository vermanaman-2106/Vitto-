import AnimatedWrapper from "./AnimatedWrapper";
import { useState } from "react";
import HeroChart from "./HeroChart";
import { motion } from "framer-motion";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(1);

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [loanSize, setLoanSize] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sendOtp = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone }),
      });

      const data = await res.json();
      alert(`Your OTP is: ${data.otp}`);
      setStep(2);
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP verified!");
        setStep(3);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  const submitLead = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailOrPhone,
          phone,
          institution_name: institution,
          city,
          loan_book_size: loanSize,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStep(4);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting lead");
    }
  };

  return (
    <AnimatedWrapper>
    <section
      onMouseMove={(e) =>
        setMousePos({ x: e.clientX, y: e.clientY })
      }
      className="relative py-20 px-6 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50"
    >

      {/* 🔥 MOUSE FOLLOW GLOW */}
      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-red-400 to-blue-400"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
        }}
      />

      {/* 🔥 BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">

        {/* LEFT */}
        <div className="space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              AI-First Infrastructure
            </span>{" "}
            for Modern Lending
          </motion.h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Built for Banks, NBFCs, and MFIs. Unified underwriting,
            decisioning, collections, and servicing.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Book a Demo
            </button>

            <button className="px-8 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100">
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >

          {/* DASHBOARD */}
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-2xl p-6">

            <h4 className="font-semibold mb-4">
              Live Loan Analytics
            </h4>

            <HeroChart />

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-sm text-gray-500">Approvals</p>
                <p className="text-lg font-bold text-green-600">
                  +32%
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Risk</p>
                <p className="text-lg font-bold text-red-500">
                  Low
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-44"
          >
            <img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
      alt="user"
      className="w-20 h-20 object-cover rounded-lg"
    />
            <p className="text-sm font-semibold">Approved</p>
            <p className="text-xs text-gray-500">₹2.5L Loan</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-44"
          >
            <img
      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
      alt="user"
      className="w-20 h-20 object-cover rounded-lg"
    />
            <p className="text-sm font-semibold">Low Risk</p>
            <p className="text-xs text-gray-500">AI Score</p>
          </motion.div>

        </motion.div>
      </div>

      {/* FORM MODAL */}
{showForm && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white p-8 rounded-2xl w-full max-w-md shadow-xl"
    >
      <h3 className="text-xl font-bold mb-4 text-center">
        Get Started
      </h3>

      {/* STEP 1 — EMAIL */}
      {step === 1 && (
        <>
          <input
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Email or Phone"
            className="w-full p-3 border rounded-xl mb-4"
          />

          <button
            onClick={sendOtp}
            className="w-full bg-gradient-to-r from-red-500 to-blue-600 text-white py-3 rounded-xl"
          >
            Send OTP
          </button>
        </>
      )}

      {/* STEP 2 — OTP */}
      {step === 2 && (
        <>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full p-3 border rounded-xl mb-4"
          />

          <button
            onClick={verifyOtp}
            className="w-full bg-gradient-to-r from-red-500 to-blue-600 text-white py-3 rounded-xl"
          >
            Verify OTP
          </button>
        </>
      )}

      {/* STEP 3 — LEAD FORM */}
      {step === 3 && (
        <>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full p-3 border rounded-xl mb-3"
          />

          <input
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            placeholder="Institution"
            className="w-full p-3 border rounded-xl mb-3"
          />

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="w-full p-3 border rounded-xl mb-3"
          />

          <input
            value={loanSize}
            onChange={(e) => setLoanSize(e.target.value)}
            placeholder="Loan Size"
            className="w-full p-3 border rounded-xl mb-4"
          />

          <button
            onClick={submitLead}
            className="w-full bg-gradient-to-r from-red-500 to-blue-600 text-white py-3 rounded-xl"
          >
            Submit
          </button>
        </>
      )}

      {/* STEP 4 — SUCCESS */}
      {step === 4 && (
        <div className="text-center">
          <h4 className="text-green-600 font-semibold text-lg">
            🎉 Success!
          </h4>
          <p className="text-gray-600 mt-2">
            We will contact you shortly.
          </p>
        </div>
      )}

      {/* CLOSE */}
      <button
        onClick={() => {
          setShowForm(false);
          setStep(1);
        }}
        className="mt-4 text-sm text-gray-500 w-full"
      >
        Close
      </button>
    </motion.div>
  </div>
)}
    </section>
    </AnimatedWrapper>
  );
}