export const siteConfig = {
    personName: "Fransisco Wiles",
    siteName: "Fransisco Wiles Marketing",
    companyName: "Fransisco Wiles Marketing LLC",
    email: "f@fransiscowiles.com",
    linkedInUrl: "https://www.linkedin.com/in/fransisco-wiles/",
    siteUrl: "https://fransiscowiles.com",
    defaultDescription:
        "Law firm and legal agency marketing expert. Get higher quality leads, sign more cases, and grow your firm with proven ad campaigns.",
    defaultOgImage: "/article-images/suit-picture.jpg",
    headerCtaLabel: "Schedule your FREE strategy call",
    footerDisclaimer:
        "I am a legal marketer, but not your legal marketer. Results may vary based on your specific case.",
} as const;

export const primaryNavItems = [
    { href: "/articles", label: "Articles" },
    { href: "/reviews", label: "Reviews" },
    { href: "/connect", label: "Connect" },
] as const;

export const footerLinks = [
    { href: "/sitemap", label: "Sitemap" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/fulfillment-policy", label: "Fulfillment Policy" },
] as const;
