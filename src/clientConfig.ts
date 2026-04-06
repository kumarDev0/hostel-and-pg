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

  "virat-boys-hostel": {
  hostelName: "Virat Boys Hostel",
  tagline: "Your perfect stay awaits.",
  description: "Experience comfort and warm hospitality at Virat Boys Hostel, located in the heart of Bhopal.",
  phone: "08764529026",
  whatsapp: "918764529026",
  email: "contact@viratboyshostel.com",
  address: "Ward No 26, Krishnapuri Colony, Neelbad, Bhopal, Madhya Pradesh 462044",
  heroImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
  aboutImage: "https://i.postimg.cc/HnMJFRdv/virat-jpg.png",
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
      name: "The Deluxe Dorm",
      type: "6-Bed Dorm",
      price: "₹15k",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      desc: "Spacious and bright dorm with premium mattresses and attached bathroom.",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Bhopal, India",
      text: "Amazing hospitality! The staff is very friendly and the rooms are super clean. Best hostel in Bhopal!",
      rating: 5,
    },
    {
      id: 2,
      name: "Amit Kumar",
      location: "Indore, India",
      text: "Great value for money. The location is perfect and very comfortable stay.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Patel",
      location: "Delhi, India",
      text: "Very clean and well maintained. The staff is helpful and friendly.",
      rating: 5,
    },
  ],
},

"astha-niketan-girls-hostel": {
  hostelName: "Astha Niketan Girls' Hostel",
  tagline: "A safe and comfortable home for girls.",
  description: "Experience safety, comfort and warm hospitality at Astha Niketan Girls' Hostel, located in Maharana Pratap Nagar, Bhopal.",
  phone: "09165572900",
  whatsapp: "919165572900",
  email: "contact@asthaniketanhostel.com",
  address: "94, Zone-II, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011",
  heroImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
  aboutImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
  rooms: [
    {
      id: 1,
      name: "Private Room",
      type: "Single Occupancy",
      price: "₹8k",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      desc: "Comfortable private room with all amenities and 24/7 security.",
    },
    {
      id: 2,
      name: "Shared Room",
      type: "Double Occupancy",
      price: "₹5k",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
      desc: "Spacious shared room with privacy curtains and secure lockers.",
    },
    {
      id: 3,
      name: "Deluxe Room",
      type: "Triple Occupancy",
      price: "₹4k",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      desc: "Affordable and comfortable stay with all basic amenities included.",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Bhopal, India",
      text: "Very safe and comfortable hostel for girls. Staff is very caring and helpful. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sneha Patel",
      location: "Indore, India",
      text: "Best girls hostel in Bhopal! Clean rooms, good food and very secure environment.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anita Verma",
      location: "Delhi, India",
      text: "Felt like home! The warden is very supportive and the facilities are excellent.",
      rating: 5,
    },
  ],
},

"divyaprabha-girls-hostel": {
  hostelName: "Divyaprabha Girls Hostel",
  tagline: "A peaceful and secure home for girls.",
  description: "Experience safety, comfort and homely atmosphere at Divyaprabha Girls Hostel, located in Gautam Nagar, Bhopal.",
  phone: "09425012618",
  whatsapp: "919425012618",
  email: "contact@divyaprabhahostel.com",
  address: "M-167, Gautam Nagar, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011",
  heroImage: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=2074&auto=format&fit=crop",
  aboutImage: "https://i.postimg.cc/tCbjGw5y/img2.png",
  rooms: [
    {
      id: 1,
      name: "Private Room",
      type: "Single Occupancy",
      price: "₹9k",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      desc: "Comfortable private room with all amenities and 24/7 security.",
    },
    {
      id: 2,
      name: "Shared Room",
      type: "Double Occupancy",
      price: "₹6k",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
      desc: "Spacious shared room with privacy curtains and secure lockers.",
    },
    {
      id: 3,
      name: "Deluxe Room",
      type: "Triple Occupancy",
      price: "₹4k",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      desc: "Affordable and comfortable stay with all basic amenities included.",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Kavita Singh",
      location: "Bhopal, India",
      text: "Very safe and homely environment. Staff is very caring. Best girls hostel in Bhopal!",
      rating: 5,
    },
    {
      id: 2,
      name: "Pooja Sharma",
      location: "Jabalpur, India",
      text: "Clean rooms, good food and very secure. Felt very safe here. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Ritu Verma",
      location: "Indore, India",
      text: "Excellent facilities and very supportive staff. Felt like home away from home!",
      rating: 5,
    },
  ],
},

"youth-living-pg": {
  hostelName: "Youth Living PG",
  tagline: "Modern living for the youth of today.",
  description: "Experience modern comfort and vibrant community living at Youth Living PG, located in the heart of Hinjawadi, Pune.",
  phone: "09503140404",
  whatsapp: "919503140404",
  email: "contact@youthlivingpg.com",
  address: "Narayan Nagar, Phase 1, Hinjawadi, Pune, Maharashtra 411057",
  heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
  aboutImage: "https://i.postimg.cc/431Kpq5g/img4.png",
  rooms: [
    {
      id: 1,
      name: "Private Room",
      type: "Single Occupancy",
      price: "₹10k",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      desc: "Modern private room with high-speed WiFi, AC and all amenities.",
    },
    {
      id: 2,
      name: "Shared Room",
      type: "Double Occupancy",
      price: "₹7k",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
      desc: "Comfortable shared room with study table, wardrobe and secure lockers.",
    },
    {
      id: 3,
      name: "Deluxe Room",
      type: "Triple Occupancy",
      price: "₹5k",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      desc: "Affordable modern stay with all basic amenities and common area access.",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Rohan Mehta",
      location: "Pune, India",
      text: "Best PG in Hinjawadi! Very clean, modern facilities and great location near IT park.",
      rating: 5,
    },
    {
      id: 2,
      name: "Akash Joshi",
      location: "Mumbai, India",
      text: "Amazing place to stay! High speed WiFi, clean rooms and very cooperative staff.",
      rating: 5,
    },
    {
      id: 3,
      name: "Neha Kulkarni",
      location: "Nashik, India",
      text: "Very comfortable and safe PG. Great value for money. Highly recommended!",
      rating: 5,
    },
  ],
},

"ornate-pg-hinjawadi": {
  hostelName: "Ornate PG Hinjawadi",
  tagline: "Elegant living in the IT hub of Pune.",
  description: "Experience elegant and comfortable living at Ornate PG, located right in Hinjawadi Rajiv Gandhi Infotech Park, Pune.",
  phone: "09325575355",
  whatsapp: "919325575355",
  email: "contact@ornatepg.com",
  address: "Mann Road, in front of The Cliff Garden, Phase 3, Hinjawadi Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057",
  heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
  aboutImage: "https://i.postimg.cc/K8SwMHjY/img5.png",
  rooms: [
    {
      id: 1,
      name: "Premium Room",
      type: "Single Occupancy",
      price: "₹12k",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
      desc: "Elegant private room with AC, high-speed WiFi and premium furnishings.",
    },
    {
      id: 2,
      name: "Shared Room",
      type: "Double Occupancy",
      price: "₹8k",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
      desc: "Comfortable shared room with study table, wardrobe and secure lockers.",
    },
    {
      id: 3,
      name: "Deluxe Room",
      type: "Triple Occupancy",
      price: "₹6k",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      desc: "Affordable and elegant stay with all modern amenities included.",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Rahul Desai",
      location: "Pune, India",
      text: "Best PG near Hinjawadi IT Park! Very elegant rooms and excellent facilities.",
      rating: 5,
    },
    {
      id: 2,
      name: "Amit Kulkarni",
      location: "Mumbai, India",
      text: "Great location, clean rooms and very professional staff. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Joshi",
      location: "Nashik, India",
      text: "Very comfortable and safe PG. Perfect for IT professionals working in Hinjawadi.",
      rating: 5,
    },
  ],
},
  
};



export function getClientConfig(slug: string): ClientConfig {
  return clients[slug] || clients["sps-boys-hostel"];
}