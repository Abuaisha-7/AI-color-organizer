import React from "react";
import StarRating from "./StarRating";

function Color({
  title,
  color,
  rating = 0,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section className="color">
      <h1 className="p__opensans">{title}</h1>
      <button onClick={onRemove}>X</button>

      <div className="h-[100px]" style={{ backgroundColor: color }}></div>
      <div className="w-full my-3 px-3">
        <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </section>
  );
}

export default Color;
