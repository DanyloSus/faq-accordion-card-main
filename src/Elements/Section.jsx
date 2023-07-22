import React from "react";
import FAQElement from "./FAQElement";

function Section() {
  return (
    <section
      id="faq"
      className=" flex flex-col lg:pt-12 lg:pb-20 lg:pr-24 w-full lg:w-auto px-5 pb-14 pt-[20%]"
    >
      <h1 className=" text-4xl font-black text-[--very-dark-desaturated-blue] my-7 mx-auto">
        FAQ
      </h1>
      <div className="flex flex-col lg:items-stretch justify-between h-full overflow-y-auto overflow-x-hidden items-center">
        <FAQElement h="How many team members can I invite?" p="0" />
        <FAQElement
          h="What is the maximum file upload size?"
          p="No more than 2GB. All files in ypur account must fit your allotted storage space"
        />
        <FAQElement
          h="What is the maximum file upload size?"
          p="No more than 2GB. All files in ypur account must fit your allotted storage space"
        />
        <FAQElement
          h="What is the maximum file upload size?"
          p="No more than 2GB. All files in ypur account must fit your allotted storage space"
        />
        <FAQElement
          h="What is the maximum file upload size?"
          p="No more than 2GB. All files in ypur account must fit your allotted storage space"
        />
        <FAQElement h="How do I reset my password?" p="0" />
        <FAQElement h="Can I cancel my subscription?" p="0" />
        <FAQElement h="Do you provide additional support?" p="0" />
      </div>
    </section>
  );
}

export default Section;
