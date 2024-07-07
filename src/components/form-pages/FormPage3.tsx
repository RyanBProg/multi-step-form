import { useFormContext } from "../../context/FormContext";
import { pricingData } from "../../data/pricingData";
import ControlButton from "../ControlButton";

export default function FormPage3() {
  const { dispatch, subscriptionType, addOns } = useFormContext();

  const pricing =
    subscriptionType === "monthly" ? pricingData.monthly : pricingData.annual;

  const toggleAddon = (payload: string) => {
    if (addOns.includes(payload)) {
      dispatch({ type: "addOn_removed", payload: payload });
    } else {
      dispatch({ type: "addOn_added", payload: payload });
    }
  };

  return (
    <>
      <h1 className="text-marineBlue text-3xl font-semibold">Pick add-ons</h1>
      <p className="mt-3 mb-5 text-lg text-coolGray">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-3 sm:gap-4">
        <button
          tabIndex={-1}
          className={`${
            addOns.includes("online services")
              ? "outline outline-blue-500 outline-2 bg-blue-50"
              : "outline-none"
          }
              grid grid-rows-[1fr_min-content] grid-cols-[min-content_1fr] gap-x-4 items-center 
              rounded-md border p-4 gap-2 hover:bg-blue-50 sm:p-6 sm:gap-6 sm:grid-rows-1 sm:grid-cols-[min-content_1fr_min-content]`}
          onClick={() => toggleAddon("online services")}>
          <input
            type="checkbox"
            className="size-5 hover:cursor-pointer row-span-2 sm:row-span-1 sm:size-6"
            onChange={() => toggleAddon("online services")}
            checked={addOns.includes("online services")}
          />
          <div className="flex flex-col flex-grow sm:gap-1">
            <h3 className="text-marineBlue font-medium text-left">
              Online services
            </h3>
            <p className="text-gray-400 text-left text-sm">
              Access to multiplayer games
            </p>
          </div>
          <p className="text-purplishBlue text-left">
            +${pricing.addOns.onlineService}/mo
          </p>
        </button>
        <button
          tabIndex={-1}
          className={`${
            addOns.includes("larger storage")
              ? "outline outline-blue-500 outline-2 bg-blue-50"
              : "outline-none"
          }
              grid grid-rows-[1fr_min-content] grid-cols-[min-content_1fr] gap-x-4 items-center 
              rounded-md border p-4 gap-2 hover:bg-blue-50 sm:p-6 sm:gap-6 sm:grid-rows-1 sm:grid-cols-[min-content_1fr_min-content]`}
          onClick={() => toggleAddon("larger storage")}>
          <input
            type="checkbox"
            className="size-5 hover:cursor-pointer row-span-2 sm:row-span-1 sm:size-6"
            onChange={() => toggleAddon("larger storage")}
            checked={addOns.includes("larger storage")}
          />
          <div className="flex flex-col gap-1 flex-grow">
            <h3 className="text-marineBlue font-medium text-left">
              Larger storage
            </h3>
            <p className="text-gray-400 text-left text-sm">
              Extra 1TB of cloud storage
            </p>
          </div>
          <p className="text-purplishBlue text-left">
            +${pricing.addOns.largerStorage}/mo
          </p>
        </button>
        <button
          tabIndex={-1}
          className={`${
            addOns.includes("custom profile")
              ? "outline outline-blue-500 outline-2 bg-blue-50"
              : "outline-none"
          }
              grid grid-rows-[1fr_min-content] grid-cols-[min-content_1fr] gap-x-4 items-center 
              rounded-md border p-4 gap-2 hover:bg-blue-50 sm:p-6 sm:gap-6 sm:grid-rows-1 sm:grid-cols-[min-content_1fr_min-content]`}
          onClick={() => toggleAddon("custom profile")}>
          <input
            type="checkbox"
            className="size-5 hover:cursor-pointer row-span-2 sm:row-span-1 sm:size-6"
            onChange={() => toggleAddon("custom profile")}
            checked={addOns.includes("custom profile")}
          />
          <div className="flex flex-col gap-1 flex-grow">
            <h3 className="text-marineBlue font-medium text-left">
              Customizable profile
            </h3>
            <p className="text-gray-400 text-left text-sm">
              Custom theme on your profile
            </p>
          </div>
          <p className="text-purplishBlue text-left">
            +${pricing.addOns.customProfile}/mo
          </p>
        </button>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between md:absolute md:px-6">
        <ControlButton
          text="Go Back"
          textColor="text-gray-500"
          bgColor="bg-white"
          action={() => dispatch({ type: "decreased_step" })}
        />
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
