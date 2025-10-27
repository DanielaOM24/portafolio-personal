declare module 'lucide-react' {
  import { FunctionComponent, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
  }
  
  export type Icon = FunctionComponent<IconProps>;
  
  export const Send: Icon;
  export const CheckCircle: Icon;
  export const AlertCircle: Icon;
  export const Home: Icon;
  export const User: Icon;
  export const Folder: Icon;
  export const Mail: Icon;
  export const Linkedin: Icon;
  export const Facebook: Icon;
  export const Instagram: Icon;
  export const ArrowRight: Icon;
  export const Sparkles: Icon;
}

