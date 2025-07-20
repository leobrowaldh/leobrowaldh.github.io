import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

import { SiReaddotcv } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { FaMedapps } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaBars, FaTimes  } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

type IconSideNavProps = 
{  
  selected: number;
  setSelected: (id: number) => void; 
};

const IconSideNav = ({selected, setSelected}: IconSideNavProps) => 
{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger toggle (mobile only) */}
      <button
        className="md:hidden absolute top-4 left-0 z-50 p-2 rounded 
             text-slate-800 dark:text-white 
             bg-white dark:bg-slate-800 
             border border-slate-300 dark:border-transparent 
             shadow"
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginLeft: '0.5rem' }} // optional: matches sidebar padding
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar (mobile: toggle, desktop: always visible) */}
      <div
        className={`
          bg-neutral-50 dark:bg-neutral-900 text-slate-100 p-4 pt-18
          ${isOpen ? "flex" : "hidden"} 
          md:flex
          fixed md:static top-0 left-0 flex-col z-40
          h-screen md:h-auto md:min-h-screen
        `}
      >
        <SideNav 
          close={() => setIsOpen(false)}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

type SideNavProps = 
{
  close: () => void;
  selected: number;
  setSelected: (id: number) => void;
};


const SideNav = ({ close, selected, setSelected }: SideNavProps) => 
{

  return (
    <nav className="flex flex-col items-center gap-2">
      <NavItem to="/" label="Home" selected={selected === 0} id={0} setSelected={setSelected} close={close}>
        <IoHome />
      </NavItem>
      <NavItem to="/cv" label="CV" selected={selected === 1} id={1} setSelected={setSelected} close={close}>
        <TbFileCv />
      </NavItem>
      <NavItem to="/projects" label="Projects" selected={selected === 2} id={2} setSelected={setSelected} close={close}>
        <FaMedapps />
      </NavItem>
      <NavItem to="/articles" label="Articles" selected={selected === 3} id={3} setSelected={setSelected} close={close}>
        <SiReaddotcv />
      </NavItem>
      <NavExternalLink to="https://github.com/leobrowaldh" label="Github">
        <FaGithub />
      </NavExternalLink>
      <NavExternalLink to="https://www.linkedin.com/in/leo-browaldh-75650a229/" label="LinkedIn">
        <FaLinkedin />
      </NavExternalLink>
      <NavItem to="/contact" label="Contact" selected={selected === 4} id={4} setSelected={setSelected} close={close}>
        <IoIosMail />
      </NavItem>
    </nav>
  );
};


const MotionNavLink = motion.create(NavLink);

type NavItemProps = 
{
  children: ReactNode;
  selected: boolean;
  id: number;
  setSelected: (id: number) => void;
  label: string;
  to: string;
  close: () => void;
};

const NavItem = ({ children, selected, id, setSelected, label, to, close }: NavItemProps) => 
{
  return (
    <MotionNavLink
      to={to}
      end
      onClick={() => {
        setSelected(id);
        if (window.innerWidth < 768) close();
      }}
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