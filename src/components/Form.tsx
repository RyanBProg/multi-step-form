import { FormEvent } from "react";
import FormPage1 from "./form-pages/FormPage1";
import FormPage2 from "./form-pages/FormPage2";
import { useFormContext } from "../context/FormContext";

export default function Form() {
  const { currentStep } = useFormContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="absolute top-28 right-4 left-4 px-6 py-10 bg-white 
      shadow-md rounded-xl md:shadow-none md:relative md:top-auto md:left-auto 
      md:right-auto md:w-full">
      {currentStep === 1 && <FormPage1 />}
      {currentStep === 2 && <FormPage2 />}
    </form>
  );
}
