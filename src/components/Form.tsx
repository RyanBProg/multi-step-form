import FormPage1 from "./form-pages/FormPage1";
import FormPage2 from "./form-pages/FormPage2";
import { useFormContext } from "../context/FormContext";
import FormPage3 from "./form-pages/FormPage3";
import FormPage4 from "./form-pages/FormPage4";
import FormCompleted from "./form-pages/FormCompleted";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";

export type TFormInput = {
  name: string;
  email: string;
  number: string;
};

export default function Form() {
  const { dispatch, currentStep, formComplete } = useFormContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    dispatch({ type: "user_data_submitted", payload: data });
  };

  const onError = (errors: FieldValues) => {
    console.log("Errors:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
      className="absolute top-24 right-4 left-4 h-fit md:h-full px-6 py-8 mb-40 bg-white 
      shadow-md rounded-xl md:shadow-none md:relative md:top-auto md:left-auto 
      md:right-auto md:w-full">
      {currentStep === 1 && <FormPage1 register={register} errors={errors} />}
      {currentStep === 2 && <FormPage2 />}
      {currentStep === 3 && <FormPage3 />}
      {currentStep === 4 && !formComplete && <FormPage4 />}
      {formComplete && <FormCompleted />}
    </form>
  );
}
