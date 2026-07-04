export interface Perfume {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  volume: string;
  image: string;
  type: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  longevity: string;
  sillage: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  rating: number;
  text: string;
  author: string;
  location: string;
}
