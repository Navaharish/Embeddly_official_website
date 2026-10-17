export const RAZORPAY_URL = "https://rzp.io/rzp/embeddly";
export const LINKEDIN_URL = "https://www.linkedin.com/in/akshay-venkatesan";
export const CONTACT_EMAIL = "admin@squaroots.com";
export const CONTACT_PHONES = ["+91 82480 74812", "+91 91502 55738"];
export const CONTACT_TEL = "tel:+918248074812";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/program", label: "Training Program" },
  { to: "/trainer", label: "Trainer" },
  { to: "/experience", label: "Learning Experience" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
