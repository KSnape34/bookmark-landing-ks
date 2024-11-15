import React, {useState, useRef} from "react"
import iconError from "../images/icon-error.svg"

export default function CTA_contact() {

  const [enteredEmail, setEnteredEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function submitHandler(e) {
    e.preventDefault();
    if (enteredEmail.match(emailRegex)) {
      setIsError(false);
      setEnteredEmail("");
      alert("Success");
    } else {
      setIsError(true);
    }
  }


  return (
    <>
    <section className="btn-blue px-8 py-20">
        <div className="max-w-7xl mx-auto">

        <h3 className="text-white font-normal text-sm uppercase tracking-widest mb-8 text-center">35,000+ already joined</h3>
        <h2 className="text-white text-3xl mb-8 lg:text-4xl text-center lg:w-96 lg:mx-auto">Stay up to date with what we're doing</h2>

        <form
        noValidate
        onSubmit={(e) => submitHandler(e)}
        className="py-8 sm:py-9 flex flex-col sm:flex-row gap-4 max-w-[468px] mx-auto"
      >
        <label className="sr-only" htmlFor="emailForm">
          Enter your email address
        </label>

        <span className="relative flex-grow">
          {isError ? (
            <span className=" btn-red bg-accent ring-2 ring-accent rounded-b-md absolute -bottom-6 left-0 text-xs italic text-start px-3 pt-3 pb-1 text-white w-full select-none pointer-events-none">
              Whoops, make sure it's an email
            </span>
          ) : null}
          {isError ? (
            <img src={iconError} alt="Red error icon" width={20} height={20} className="absolute z-20 bottom-1/2 translate-y-1/2 right-0 mr-4"/>
          ) : null}

          <input
            id="emailForm"
            type="email" className={`text-background relative w-full px-5 py-3.5 rounded-md text-sm ${isError ? "ring-2 ring-accent" : ""
            }`}
            placeholder="Enter your email address"
            ref={inputRef}
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
        </span>
        <button className="btn-red sm:flex-1 text-sm sm:py-0 sm:px-6 text-white py-2 px-4 rounded shadow-lg md:w-40 cursor-pointer border-red-400 hover:border-red-400 border-2 hover:bg-white hover:text-red-400 transition-all duration-200">
          Contact Us
        </button>
      </form>


        </div>
    </section>
      
    </>
  )
}

