import { useState } from "react";
import { motion } from "framer-motion";

const languageOptions = ["EN", "SE", "ES"] as const;
type Lang = typeof languageOptions[number];

const Cv = () => {
  const [language, setLanguage] = useState<Lang>("EN");

  const cycleLanguage = () => {
    const index = languageOptions.indexOf(language);
    const next = languageOptions[(index + 1) % languageOptions.length];
    setLanguage(next);
  };

  const getPdfUrl = () => `/cv/Leo_Browaldh_CV(${language}).pdf`;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">Curriculum Vitae</h1>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[850px]">
          <motion.button
            onClick={cycleLanguage}
            className="mb-2 px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Language: {language}
          </motion.button>

          <div className="w-full h-[80vh]">
            <iframe
              src={getPdfUrl()}
              className="w-full h-full border rounded"
              title={`CV ${language}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
