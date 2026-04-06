export interface Room {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
  desc: string;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface ClientConfig {
  hostelName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  heroImage: string;
  aboutImage: string;
  rooms: Room[];
  reviews: Review[];
}

export const clients: Record<string, ClientConfig> = {
  "sps-boys-hostel": {
    hostelName: "SPS Boys Hostel",
    tagline: "Find rest in the heart of the city.",
    description: "Experience local culture, meet fellow travelers, and enjoy comfortable, beautifully designed spaces at SPS Boys Hostel.",
    phone: "+91 9876543210",
    whatsapp: "919876543210",
    email: "hello@spsboyshostel.com",
    address: "123 Main Street, Delhi, India",
    heroImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
    aboutImage: "https://images.pexels.com/photos/34983161/pexels-photo-34983161.jpeg",
    rooms: [
      {
        id: 1,
        name: "The Private Suite",
        type: "Private Room",
        price: "₹12k",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
        desc: "A serene private room with an en-suite bathroom, queen bed, and city views.",
      },
      {
        id: 2,
        name: "The Cozy Dorm",
        type: "4-Bed Mixed Dorm",
        price: "₹7k",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
        desc: "Comfortable bunk beds with privacy curtains, reading lights, and secure lockers.",
      },
      {
        id: 3,
        name: "The Female Dorm",
        type: "6-Bed Female Dorm",
        price: "₹15k",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
        desc: "Spacious and bright female-only dorm with premium mattresses and vanity area.",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Jenkins",
        location: "London, UK",
        text: "Absolutely loved my stay here! The design is stunning, the beds are incredibly comfortable, and the staff went out of their way to make me feel welcome.",
        rating: 5,
      },
      {
        id: 2,
        name: "Mateo Garcia",
        location: "Madrid, Spain",
        text: "The best hostel experience I have ever had. It feels more like a boutique hotel. The common areas are perfect for meeting people.",
        rating: 5,
      },
      {
        id: 3,
        name: "Emma Watson",
        location: "Sydney, Australia",
        text: "Clean, safe, and beautifully decorated. The location is unbeatable, right in the center but tucked away on a quiet street.",
        rating: 5,
      },
    ],
  },

  "suneri-hostel": {
    hostelName: "Suneri Hostel",
    tagline: "Your golden home away from home.",
    description: "Experience warmth, comfort, and golden hospitality at Suneri Hostel — where every guest is family.",
    phone: "+91 8765432109",
    whatsapp: "918765432109",
    email: "hello@sunerihostel.com",
    address: "456 Gold Street, Mumbai, India",
    heroImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    rooms: [
      {
        id: 1,
        name: "Golden Suite",
        type: "Private Room",
        price: "₹10k",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
        desc: "A luxurious private room with premium amenities and stunning city views.",
      },
      {
        id: 2,
        name: "Buddy Dorm",
        type: "4-Bed Dorm",
        price: "₹5k",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
        desc: "Cozy dorm beds with privacy curtains, personal lockers, and reading lights.",
      },
      {
        id: 3,
        name: "Deluxe Dorm",
        type: "6-Bed Dorm",
        price: "₹8k",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
        desc: "Spacious dorm with premium mattresses, AC, and attached bathroom.",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Rahul Sharma",
        location: "Pune, India",
        text: "Amazing hospitality! The staff is very friendly and the rooms are super clean. Best hostel in Mumbai!",
        rating: 5,
      },
      {
        id: 2,
        name: "Priya Patel",
        location: "Bangalore, India",
        text: "Great value for money. The location is perfect and the food is delicious. Will definitely come back!",
        rating: 5,
      },
      {
        id: 3,
        name: "Amit Kumar",
        location: "Delhi, India",
        text: "Very comfortable stay. The beds are cozy and the common area is great for socializing.",
        rating: 5,
      },
    ],
  },
};

export function getClientConfig(slug: string): ClientConfig {
  return clients[slug] || clients["sps-boys-hostel"];
}