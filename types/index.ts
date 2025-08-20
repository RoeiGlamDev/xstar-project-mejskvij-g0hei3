import { ReactNode } from 'react';

export interface Property {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  images: string[];
  amenities: string[];
  rating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkInDate: Date;
  checkOutDate: Date;
  totalPrice: number;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ContextProps {
  properties: Property[];
  users: User[];
  bookings: Booking[];
  reviews: Review[];
  addProperty: (property: Property) => void;
  addUser: (user: User) => void;
  addBooking: (booking: Booking) => void;
  addReview: (review: Review) => void;
}

export type ChildrenProps = {
  children: ReactNode;
};

export default {}; // Default export for potential future use