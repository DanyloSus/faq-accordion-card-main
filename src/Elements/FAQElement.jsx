import React, { useRef } from "react";

function FAQElement({ h, p }) {
  const divRef = useRef(null);

  const toggleClass = (divRef) => {
    divRef.current.classList.toggle("active");
  };

  return (
    <div id="faq-div" ref={divRef}>
      <h2
        className="flex items-center justify-between ease-in-out duration-1000 text-[--dark-grayish-blue] font-light cursor-pointer"
        onClick={() => toggleClass(divRef)}
      >
        {h}
        <img
          src="./icon-arrow-down.svg"
          alt="icon arrow down"
          className=" ease-in-out duration-1000 cursor-pointer"
          onClick={() => toggleClass(divRef)}
        />
      </h2>
      <p className="ease-in-out duration-1000 max-h-0 scale-0 mb-3">{p}</p>
      <hr />
    </div>
  );
}

export default FAQElement;
