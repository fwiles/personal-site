import type { CollectionEntry } from "astro:content";
import { siteConfig } from "../site";

type ArticleEntry = CollectionEntry<"articles">;

export const formatArticleDate = (date: Date) => {
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`;
};

export const toYouTubeEmbedUrl = (url: string) => {
    try {
        const parsed = new URL(url);
        const host = parsed.hostname.replace(/^www\./, "");
        let videoId = "";

        if (host === "youtu.be") {
            videoId = parsed.pathname.slice(1);
        } else if (host === "youtube.com" || host === "m.youtube.com") {
            if (parsed.pathname === "/watch") {
                videoId = parsed.searchParams.get("v") ?? "";
            } else if (parsed.pathname.startsWith("/embed/")) {
                videoId = parsed.pathname.split("/")[2] ?? "";
            } else if (parsed.pathname.startsWith("/shorts/")) {
                videoId = parsed.pathname.split("/")[2] ?? "";
            }
        }

        if (!videoId) {
            return "";
        }

        return `https://www.youtube.com/embed/${videoId}`;
    } catch {
        return "";
    }
};

export const calculateReadTimeMinutes = (content: string) => {
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 200));
};

export const getArticleImage = (article: ArticleEntry) =>
    article.data.heroImage ??
    article.data.author.avatar ??
    siteConfig.defaultOgImage;

export const buildArticleStructuredData = (
    article: ArticleEntry,
    canonicalPath: string
) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.data.title,
    description: article.data.description,
    datePublished: article.data.date.toISOString(),
    author: {
        "@type": "Person",
        name: article.data.author.name,
        jobTitle: article.data.author.title,
        url: `${siteConfig.siteUrl}/`,
        sameAs: article.data.author.socials.map((social) => social.url),
    },
    mainEntityOfPage: `${siteConfig.siteUrl}${canonicalPath}`,
    image: [`${siteConfig.siteUrl}${getArticleImage(article)}`],
});
