import React from "react";
import FAQElement from "./FAQElement";

function Section() {
  return (
    <section id="faq" className=" flex flex-col pt-12 pb-20 pr-24">
      <h1 className=" text-4xl font-black text-[--very-dark-desaturated-blue] mb-10">
        FAQ
      </h1>
      <div className="flex flex-col items-stretch justify-between h-full overflow-y-auto overflow-x-hidden">
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
