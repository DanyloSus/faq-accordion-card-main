import React from "react";

function Img({ w, h }) {
  return (
    <>
      <section id="imges" className="">
        <img
          src="./illustration-box-desktop.svg"
          alt="illustration box desktop"
          id="cube"
          className="absolute w-2/5 left-[-60px] inset-y-[35%] z-10"
        />
        <img
          id="laptop"
          src="./illustration-woman-online-desktop.svg"
          alt="illustration woman online desktop"
          className="absolute w-auto left-[-50px] inset-y-[20%]"
        />
        <img
          src="./bg-pattern-desktop.svg"
          alt="bg pattern desktop"
          className="absolute left-[-50px] inset-y-[20%]"
        />
      </section>
    </>
  );
}

export default Img;
