
export interface ElectronicsProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


export interface JeweleryProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


export interface MensClothingProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


export interface WomensClothingProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type QueryType = WomensClothingProduct[] | MensClothingProduct[] | JeweleryProduct[] | ElectronicsProduct[]



export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand?: string;
  thumbnail: string; 
  images?: string[];
  rating?: number;
  stock?: number;
}

