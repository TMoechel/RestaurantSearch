interface Category {
  alias: string;
  title: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Location {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  country: string;
  display_address: string[];
  state: string;
  zip_code: string;
}
export default interface Restaurant {
  alias: string;
  categories: Category[];
  coordinates: Coordinates;
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: Location;
  name: string;
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  transactions: [];
  url: string;
}
