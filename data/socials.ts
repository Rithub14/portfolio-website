export interface SocialLink {
  name: "Gmail" | "LinkedIn" | "GitHub";
  href: string;
  icon: {
    light: string;
    dark: string;
    alt: string;
  };
}

export const socialLinks: SocialLink[] = [
  {
    name: "Gmail",
    href: "mailto:hello@rizwanaslam.dev",
    icon: {
      light: "/assets/gmail-1.png",
      dark: "/assets/gmail-2.png",
      alt: "Gmail icon"
    }
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rizwanaslam",
    icon: {
      light: "/assets/linkedin-1.png",
      dark: "/assets/linkedin-2.png",
      alt: "LinkedIn icon"
    }
  },
  {
    name: "GitHub",
    href: "https://github.com/rizwan-aslam",
    icon: {
      light: "/assets/github-1.png",
      dark: "/assets/github-2.png",
      alt: "GitHub icon"
    }
  }
];
