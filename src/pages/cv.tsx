import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
const languageOptions = ["EN", "SE", "ES"] as const;
type Lang = typeof languageOptions[number];

const MotionNavLink = motion.create(NavLink);

const Cv = ({setSelectedNav}: {setSelectedNav: (id: number) => void}) => 
{
  const [language, setLanguage] = useState<Lang>("EN");

  const cycleLanguage = () => {
    const index = languageOptions.indexOf(language);
    const next = languageOptions[(index + 1) % languageOptions.length];
    setLanguage(next);
  };

  const getPdfUrl = () => `/images/Leo_Browaldh_CV_${language}.jpg`;

  return (
    <div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[850px]">
          <div className="flex flex-row items-center justify-end gap-4 m-4">

            <MotionNavLink
              to="/contact"
              end
              onClick={() => setSelectedNav(4)}
              className="mb-2 px-4 py-2"
              title="Contact me for full PDF"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </MotionNavLink>

            <motion.button
              onClick={cycleLanguage}
              className="mb-2 px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Language: {language}
            </motion.button>

          </div>

          <div className="w-full h-[80vh] max-h-[90vh] sm:h-[90vh]">
            <img
              src={getPdfUrl()}
              alt={`CV ${language}`}
              className="w-full max-w-[850px] h-auto rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
