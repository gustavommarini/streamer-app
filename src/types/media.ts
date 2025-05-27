export interface Media {
  id: number;
  title: string;
  type: "movie" | "documentary" | "live";
  genre: string;
  duration: number;
  thumbnail: string;
  url: string;
  description: string;
  year: number;
  rating?: number;
}
