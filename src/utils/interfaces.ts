import { Premission } from "./enums";

export interface User {
  name: string;
  age: number;
  job: string;
  junior: boolean;
  familys: (String | number[] | any[])[];
  run: () => string;
  premission: Premission;
}

export interface Features {
  wifi: boolean;
  parking: boolean;
  offer: boolean;
}

export interface TravelItem {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: Features[];
}

export interface InitialState {
  id: string;
  value: string;
}
