export type Page = 'home' | 'rooms' | 'gallery' | 'contact';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  category: 'standard' | 'deluxe' | 'suite' | 'penthouse';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  size: string;
  capacity: string;
  bed: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  popular: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  source: 'Google' | 'Trustpilot' | 'Booking.com';
  avatar: string;
  text: string;
  verified: boolean;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  validUntil: string;
  image: string;
  badge: string;
  amenities: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rooms' | 'Interior' | 'Dining' | 'Exterior' | 'Facilities';
  image: string;
  span?: string;
}
