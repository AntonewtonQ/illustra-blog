export interface Post {
    id: string;
    title: string;
    content: string;
    tags?: string[];
    authorID: string;
    createdAt?: { seconds: number; nanoseconds: number };
    image?: string;
    author_img?: string;
  }