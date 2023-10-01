import { PortableTextBlock } from "sanity";


export type articlesType = {
    _id: string;
    name: string;
    slug: string;
    tagline: string;
    projectUrl: string;
    logo: string;
    coverImage: {
      alt: string | null;
      image: string;
    };
    description: PortableTextBlock[];
  };
