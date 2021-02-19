import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";
function mapFunction(emoji) {
  return (
    <Entery
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(mapFunction)}</dl>
    </div>
  );
}

export default App;
