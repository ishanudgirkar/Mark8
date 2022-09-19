import React, { useState } from "react";
import "./styles.css";

//var userName = prompt("Give me your name");
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "✌️": "Victory Hand",
  "😓": "Downcast Face with Sweat",
  "😑": "annoyance",
  "😂": "Face with Tears of Joy",
  "🙃": "Upside-Down Face",
  "🥰": "Smiling Face with Hearts",
  "🎂": "Birthday Cake",
  "🙈": "See-No-Evil Monkey",
  "🌹": "Rose",
  "🔥": "Fire",
  "🏆": "Trophy",
  "🎮": "Video Game",
  "🍕": "Pizza",
  "🍫": "Chocolate Bar",
  "📱": "Mobile Phone"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database !";
    }

    setMeaning(meaning); //react call to show output
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to show output
  }

  return (
    <div className="App">
      <h1>inside outt !</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2> {/* Actual output set by react using usestate */}
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
//onClick takes a function when click happens. It is a callback function//
