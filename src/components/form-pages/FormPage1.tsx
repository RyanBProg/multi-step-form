import { UseFormRegister, FieldErrors } from "react-hook-form";
import { TFormInput } from "../Form";

interface FormPage1Props {
  register: UseFormRegister<TFormInput>;
  errors: FieldErrors<TFormInput>;
}

export default function FormPage1({ register, errors }: FormPage1Props) {
  return (
    <>
      <h1 className="text-marineBlue text-3xl font-semibold">Personal Info</h1>
      <p className="mt-3 mb-5 text-lg text-coolGray">
        Please provide your name, email address, and phone number.
      </p>
      <label htmlFor="name" className="text-marineBlue">
        Name
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          className="border rounded-md p-2 pl-3 w-full mt-1"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </label>
      <label htmlFor="email" className="text-marineBlue block mt-4">
        Email Address
        <input
          type="email"
          id="email"
          placeholder="stephenking@gmail.com"
          className="border rounded-md p-2 pl-3 w-full mt-1"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </label>
      <label htmlFor="number" className="text-marineBlue block mt-4">
        Phone Number
        <input
          type="text"
          id="number"
          placeholder="e.g. +1 234 567 890"
          className="border rounded-md p-2 pl-3 w-full mt-1"
          {...register("number", {
            required: "Phone number is required",
            minLength: { value: 6, message: "Minimum length is 6" },
            maxLength: { value: 12, message: "Maximum length is 12" },
          })}
        />
        {errors.number && (
          <p className="text-red-500">{errors.number.message}</p>
        )}
      </label>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-end md:absolute md:px-6">
        <button className="bg-marineBlue text-white rounded-md p-2 px-4 transition-colors hover:brightness-125">
          Next Step
        </button>
      </div>
    </>
  );
}
