import React, { useState } from "react";
import StarRating from "./StarRating";
import { describeColorWithAI, getAIRatingFromAPI } from "../api/openai";

function Color({
  title,
  color,
  rating = 0,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {

  const [error, setError] = useState(null);
  const [mood, setMood] = useState('');
  const [mooderror, setMoodError] = useState(null);

  const handleAIRating = async () => {
    setError(null)

    try {
      
      const response = await getAIRatingFromAPI(title, color);
    const rating = parseInt(response.match(/\d+/)?.[0], 10);

    if (rating >= 1 && rating <= 5) {
      onRate(rating);
    }

    } catch (error) {
      
      console.error("AI Rating Failed", error);
      setError("Couldn't get rating from AI Please Try again!")
    }

    
  }

  const handleAIDescription = async () => {
    setMoodError(null)
    setMood("")
    try {
      const result = await describeColorWithAI(title, color);
      setMood(result)
    } catch (error) {
      console.error(" Fectch AI Description Failed", error);
      setMoodError("Couldn't get Description from AI Please Try again!")
    }
  }

  return (
    <section className="color">
      <h1 className="p__opensans">{title}</h1>
      <div className="color_button">
        <button className="" onClick={handleAIDescription}>Describe with AI</button>
        <button className="mx-1" onClick={handleAIRating}>Rate with AI</button>
        <button className="w-[25px]" onClick={onRemove}>X</button>
        
      </div>
     
      <div className="h-[100px]" style={{ backgroundColor: color }}></div>
      {mood && (<div className="p__cormorant">{mood}</div>)}
      {error && (<div className="p__cormorant-error">{error}</div>) }
      <div className="w-full my-3 px-3">
        <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </section>
  );
}

export default Color;
