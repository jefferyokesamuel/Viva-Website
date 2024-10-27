import Section from "./Section";
import Heading from "./Heading";
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xwpeeybp"); // Replace with your Formspree project ID

  return (
    <Section id="contact-us">
      <div className="container">
        <Heading
          title="Contact Us"
          text="We would love to hear from you. Feel free to reach out through any of the methods below."
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col lg:flex-row items-start h-auto mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-auto">
            
            {/* Left side: Contact Info */}
            <div className="w-full lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
              <h4 className="h4 mb-4">Book a Meeting</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Schedule a time that works best for you via Calendly:
              </p>
              <a
                href="https://calendly.com/jefferyokesamuel1/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Book a meeting on Calendly
              </a>

              <h4 className="h4 mb-4 mt-10">Contact Information</h4>
              <p className="body-2 mb-[1rem] text-n-3">
                Email:{" "}
                <a href="mailto:jeffery@vivaconsulting.com" className="text-primary underline">
                 jeffery@vivaconsulting.com
                </a>
              </p>
              <p className="body-2 mb-[3rem] text-n-3">
                Whatsapp:{" "}
                <a href="https://wa.link/rzcema" className="text-primary underline">
                  +2347083465418
                </a>
              </p>
            </div>

            {/* Right side: Contact Form or Thank You Message */}
            <div className="w-full lg:w-1/2">
              {state.succeeded ? (
                <p className="text-center text-lg font-semibold">💜 Thanks for reaching out 💜</p>
              ) : (
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <label htmlFor="name">
                    <span className="body-2">Your Name</span>
                    <input
                      id="name"
                      type="text"
                      name="name" // Added name attribute for Formspree
                      className="w-full p-3 border border-n-6 rounded-lg"
                      placeholder="Enter your name"
                      required
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                    />
                  </label>

                  <label htmlFor="company">
                    <span className="body-2">Company Name</span>
                    <input
                      id="company"
                      type="text"
                      name="company" // Added name attribute for Formspree
                      className="w-full p-3 border border-n-6 rounded-lg"
                      placeholder="Enter your company name"
                    />
                    <ValidationError 
                      prefix="Company" 
                      field="company"
                      errors={state.errors}
                    />
                  </label>

                  <label htmlFor="email">
                    <span className="body-2">Your Email</span>
                    <input
                      id="email"
                      type="email"
                      name="email" // Added name attribute for Formspree
                      className="w-full p-3 border border-n-6 rounded-lg"
                      placeholder="Enter your email"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </label>

                  <label htmlFor="message">
                    <span className="body-2">Your Message</span>
                    <textarea
                      id="message"
                      name="message" // Added name attribute for Formspree
                      className="w-full p-3 border border-n-6 rounded-lg"
                      rows="5"
                      placeholder="Enter your message"
                      required
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </label>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-n-9 text-white rounded-lg transition-all duration-300 hover:bg-purple-600"
                    disabled={state.submitting}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
