import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

import { SiReaddotcv } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { FaMedapps } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const IconSideNav = () => {
  return (
    <div className="bg-slate-900 text-slate-100 flex">
      <SideNav />
    </div>
  );
};

const SideNav = () => {
  const [selected, setSelected] = useState(0);

  return (
    <nav className="h-screen w-fit bg-slate-950 p-4 flex flex-col items-center gap-2">
      <NavItem to="/" label="Home" selected={selected === 0} id={0} setSelected={setSelected}>
        <IoHome />
      </NavItem>
      <NavItem to="/cv" label="CV" selected={selected === 1} id={1} setSelected={setSelected}>
        <SiReaddotcv />
      </NavItem>
      <NavItem to="/projects" label="Projects" selected={selected === 2} id={2} setSelected={setSelected}>
        <FaMedapps />
      </NavItem>
      <NavExternalLink to="https://github.com/leobrowaldh" label="Github">
        <FaGithub />
      </NavExternalLink>
    </nav>
  );
};

const MotionNavLink = motion(NavLink);

type NavItemProps = {
  children: ReactNode;
  selected: boolean;
  id: number;
  setSelected: (id: number) => void;
  label: string;
  to: string;
};

const NavItem = ({ children, selected, id, setSelected, label, to }: NavItemProps) => {
  return (
    <MotionNavLink
      to={to}
      end
      onClick={() => setSelected(id)}
      className="group relative block p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>

      <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-slate-800 text-sm px-2 py-1 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20">
        {label}
      </span>

      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-indigo-600 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 0 }}
          />
        )}
      </AnimatePresence>
    </MotionNavLink>
  );
};

const NavExternalLink = ({
  children,
  label,
  to,
}: {
  children: ReactNode;
  label: string;
  to: string;
}) => (
  <motion.a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="block relative z-10">{children}</span>
    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-slate-800 text-sm px-2 py-1 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20">
      {label}
    </span>
  </motion.a>
);


export default IconSideNav;