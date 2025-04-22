export interface AppData {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  authorLink?: string;
  category: string;
  rating: number;
  releaseDate: string;
  link: string;
  githubUrl?: string;
  additionalInfo?: string;
}