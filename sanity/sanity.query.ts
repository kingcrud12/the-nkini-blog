import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getArticles() {
  return client.fetch(
    groq`*[_type == "articles"]{
      _id,
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset ->url,
    }`
  );
}

export async function getSingleArticle(slug: string) {
    return client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        name,
        postURL,
        coverImage { alt, "image": asset->url },
        tagline,
        description
      }`,
      { slug }
    );
  }