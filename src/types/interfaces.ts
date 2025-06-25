import { IconType } from "react-icons";

export interface Feature {
  name: string;
  description: string;
}

export interface Technology {
  name: string;
  description: string;
  category: string;
  icon: IconType;
  iconColor: string;
  row?: number;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

export interface NavigationLink {
  name: string;
  href: string;
}
