export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
): void => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
