"use client";
import { useEffect, useState } from "react";

const ContactBlock = (props) => {
  const { displayContact } = props;
  return (
    <section key={props.displayContact}>
      {props.displayContact == true ? "true" : "false"}
    </section>
  );
};
const Contact = () => {
  let phone = true ? 98511000000 : "false";
  const [renderContact, setRenderContact] = useState(false);
  useEffect(() => {
    console.log("this is renderContact value update:::", renderContact);
  }, [renderContact]);
  function contactBlock(displayContact) {
    return <section>{displayContact == true ? "true" : "false"}</section>;
  }
  return (
    <>
      {contactBlock(renderContact)}
      <ContactBlock key={renderContact} displayContact={renderContact} />
      <button
        onClick={() => {
          setRenderContact(!renderContact);
        }}
      >
        click me
      </button>
      <section className="contact">
        <div className="container">
          <h2>This is a contact page {renderContact ? phone : "null"}</h2>
        </div>
      </section>
    </>
  );
};

export default Contact;
