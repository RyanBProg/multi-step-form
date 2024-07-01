import FormPage1 from "./FormPage1";
import ControlButton from "./ControlButton";

export default function Form() {
  return (
    <form className="relative px-4 md:px-10 md:flex md:flex-col md:justify-between lg:px-20">
      <div className="bg-white rounded-xl px-6 py-10 absolute -top-16 right-4 left-4 shadow-md md:relative md:shadow-none md:top-auto md:left-auto md:right-auto md:px-0">
        <FormPage1 />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 flex justify-end md:relative md:left-auto md:px-0">
        <ControlButton
          text="Next Step"
          textColor="text-white"
          bgColor="bg-marineBlue"
          action={() => {}}
        />
      </div>
    </form>
  );
}
