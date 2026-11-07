import { LuCloud, LuCode, LuTerminal } from 'react-icons/lu';
import { FaPhoneAlt } from "react-icons/fa";
import {
  SiBootstrap,
  SiCsswizardry,
  SiDevdotto,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPug,
  SiReact,
  SiSass,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiPrisma, SiJasmine, SiBackbonedotjs
} from 'react-icons/si';

const icons = {
  bootstrap: SiBootstrap,
  cloud: LuCloud,
  csswizardry: SiCsswizardry,
  devto: SiDevdotto,
  gmail: SiGmail,
  html5: SiHtml5,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  mongodb: SiMongodb,
  mui: SiMui,
  netlify: SiNetlify,
  next: SiNextdotjs,
  node: SiNodedotjs,
  phone: FaPhoneAlt,
  pug: SiPug,
  react: SiReact,
  sass: SiSass,
  stripe: SiStripe,
  terminal: LuTerminal,
  code: LuCode,
  prisma: SiPrisma,
  backbone: SiBackbonedotjs,
  jasmine: SiJasmine
};

export default function Icon({ name, className }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    throw new Error(`Unknown icon: "${name}"`);
  }

  return (
    <IconComponent className={className} aria-hidden="true" focusable="false" />
  );
}
