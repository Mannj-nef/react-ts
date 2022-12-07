import { useEffect, useState } from "react";
import { Premission } from "./utils/enums";
import { parseCoordinate } from "./utils/function";
import { TravelItem, User } from "./utils/interfaces";
import { ICoordinate } from "./utils/function";
import "./utils/app";

const reviews = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

const user: User = {
  name: "Mquan",
  age: 20,
  job: "FE dev",
  familys: ["bo", "me", "em trai", "ong", "ba", ["asdas"]],
  run: () => "nhanh",
  junior: true,
  premission: Premission.EDITOR,
};

const travelItem: TravelItem[] = [
  {
    image: "",
    name: "",
    totalReviews: 0,
    rating: 0,
    location: "",
    price: 0,
    date: "",
    departure: "",
    features: [
      {
        offer: false,
        parking: true,
        wifi: true,
      },
    ],
  },
];

function App() {
  const [count, setCount] = useState(0);

  const handleDisplayReview = (
    total: number,
    name: string,
    premium: boolean
  ) => {
    return (
      <>
        Review total <strong>{total}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  };
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {handleDisplayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
