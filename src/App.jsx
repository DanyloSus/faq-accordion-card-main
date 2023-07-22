import React from "react";
import Img from "./Elements/Img";
import Section from "./Elements/Section";

function App() {
  return (
    <main className="bg-white lg:w-[62.5%] lg:h-[66.6666%] rounded-lg shadow-2xl flex flex-col lg:flex-row w-[79.1666%] h-[66.6666%]">
      <Img />
      <Section />
    </main>
  );
}

export default App;
