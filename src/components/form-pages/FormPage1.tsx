import ControlButton from "../ControlButton";
import { useFormContext } from "../../context/FormContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  number: z.string().min(10).max(12),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function FormPage1() {
  const { dispatch, name, email, number } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    // validate
    // input user data into reducer
    // go to next step
    dispatch({ type: "input_data", payload: { ...userData } });
  };

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
          {...register("email")}
          value={name}
          onChange={(e) =>
            dispatch({ type: "name_changed", payload: e.target.value })
          }
        />
      </label>
      <label htmlFor="email" className="text-marineBlue block mt-4">
        Email Address
        <input
          type="email"
          id="email"
          placeholder="stephenking@gmail.com"
          required
          className="border rounded-md p-2 pl-3 w-full mt-1"
          value={email}
          onChange={(e) =>
            dispatch({ type: "email_changed", payload: e.target.value })
          }
        />
      </label>
      <label htmlFor="number" className="text-marineBlue block mt-4">
        Phone Number
        <input
          type="text"
          id="number"
          placeholder="e.g. +1 234 567 890"
          required
          className="border rounded-md p-2 pl-3 w-full mt-1"
          value={number}
          onChange={(e) =>
            dispatch({ type: "number_changed", payload: e.target.value })
          }
        />
      </label>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-end md:absolute md:px-6">
        <ControlButton
          text="Next Step"
          textColor="text-white"
          bgColor="bg-marineBlue"
          action={() => dispatch({ type: "increased_step" })}
        />
      </div>
    </>
  );
}
