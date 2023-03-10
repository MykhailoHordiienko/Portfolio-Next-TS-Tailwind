import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:gordienkomichael191@gmail.com?subject=${formData.subject}&body=${formData.name}.  message=${formData.message}.     email=${formData.email}`;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 w-fit mx-auto">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
        <input
          {...register("name")}
          placeholder="Name"
          className="contact-input"
          type="text"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="contact-input"
          type="email"
        />
      </div>
      <input
        {...register("subject")}
        placeholder="Subject"
        className="contact-input"
        type="text"
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        className="contact-input"
      />
      <button
        className="contact-btn"
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
