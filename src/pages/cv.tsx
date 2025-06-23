import { useState } from "react";

const languageOptions = ["EN", "SE", "ES"] as const;
type Lang = typeof languageOptions[number];

const Cv = () => {
  const [language, setLanguage] = useState<Lang>("EN");

  const cycleLanguage = () => {
    const index = languageOptions.indexOf(language);
    const next = languageOptions[(index + 1) % languageOptions.length];
    setLanguage(next);
  };

  // Adapted path and file name with ? replaced by _
  const getPdfUrl = () => `/cv/Leo_Browaldh_CV(${language}).pdf`;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-shadow-lg/30">Curriculum Vitae</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={cycleLanguage}
          className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-white"
        >
          {language}
        </button>
      </div>

      <div className="w-full h-[80vh] flex justify-center">
        <div className="w-full max-w-[800px] h-full">
          <iframe
            src={getPdfUrl()}
            className="w-full h-full border rounded"
            title={`CV ${language}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Cv;
