import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4lhcnhg",
        "template_1j7lcxj",
        form.current,
        "O5HC7jZjKxpVmLeG2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Message envoyé ! MERCI !!");

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }; //formulaire de contact
  return (
    <div className="w-full center sm:mb-24 sm:p-5 sm:backdrop-blur-sm sm:bg-white/10  sm:rounded sm:rounded-xl lg:backdrop-blur-none lg:bg-transparent">
      <div className="lg:ml-96 lg:-mt-32 ">
        <div className="">
          <section className="text-gray-700 body-font w-full">
            <div className="w-full lg:mt-20">
              <div className="lg:w-100 md:w-2/3 mx-auto">
                <div className="flex flex-col w-100 sm:text-center lg:text-left">
                  <form
                    ref={form}
                    name="contact"
                    method="post"
                    className="contact__form"
                    onSubmit={sendEmail}
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact"
                    ></input>
                    <div className="p-2">
                      <div className="relative">
                        <label
                          for="email"
                          className="leading-7 text-sm lg:block sm:hidden  text-gray-50 text-xl font-mono"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          placeholder="Votre Email"
                          required
                          className="lg:w-96  bg-transparent sm:w-96  border rounded-xl border-gray-300 focus:border-red-600 text-base outline-none text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-100">
                      <div className="relative">
                        <label
                          for="name"
                          className="leading-7 text-sm lg:block sm:hidden  text-gray-50 text-xl font-mono"
                        >
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          placeholder="Votre nom"
                          required
                          className="lg:w-96  sm:w-96 bg-transparent sm:w-96    border rounded-xl border-gray-300 focus:border-red-600 text-base outline-none text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          for="message"
                          className="leading-7 text-sm lg:block sm:hidden text-gray-50 text-xl font-mono"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Votre message"
                          required
                          className=" lg:w-10/12 sm:w-96 bg-transparent rounded-xl border border-gray-300 focus:border-red-600 h-32 text-base outline-none text-gray-50 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full  ">
                      <button
                        type="submit"
                        className=" lg:w-1/12  text-black text-3xl mx-auto text-whit bg-gray-300 border-0 py-2 px-8 focus:outline-none hover:bg-red-800 rounded text-lg"
                      >
                        Envoyer...
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
