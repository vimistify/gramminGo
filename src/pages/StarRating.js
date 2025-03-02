import { useState } from "react";
import { Star } from "lucide-react";
import "./StarRating.css";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`star ${star <= (hover || rating) ? "filled" : "outline"}`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );
}
