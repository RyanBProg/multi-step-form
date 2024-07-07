import { useFormContext } from "../../context/FormContext";
import { pricingData } from "../../data/pricingData";
import ControlButton from "../ControlButton";

export default function FormPage4() {
  const { dispatch, subscriptionType, planType, addOns } = useFormContext();

  const pricing =
    subscriptionType === "monthly" ? pricingData.monthly : pricingData.annual;

  const getAddonPrice = (name: string) => {
    if (name === "larger storage") {
      return pricing.addOns.largerStorage;
    } else if (name === "custom profile") {
      return pricing.addOns.customProfile;
    } else {
      return pricing.addOns.onlineService;
    }
  };

  const getPlanPrice = (subscription: string) => {
    if (subscription === "advanced") {
      return pricing.plans.advanced;
    } else if (subscription === "arcade") {
      return pricing.plans.arcade;
    } else {
      return pricing.plans.pro;
    }
  };

  const getTotal = () => {
    const subTotal = getPlanPrice(subscriptionType);

    if (addOns.length > 0) {
      const addOnsTotal = addOns
        .map((addOn) => getAddonPrice(addOn))
        .reduce((prev, current) => prev + current);
      return subTotal + addOnsTotal;
    } else {
      return subTotal;
    }
  };

  return (
    <>
      <h1 className="text-marineBlue text-3xl font-semibold">Finishing up</h1>
      <p className="mt-3 mb-5 text-lg text-coolGray">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-blue-50 rounded-lg py-8 px-4">
        <div className="flex justify-between pb-4 border-b-[1px]">
          <h2 className="text-marineBlue font-medium capitalize">
            {planType}
            <span className="ml-1">({subscriptionType})</span>
          </h2>
          <p className="text-marineBlue font-medium">
            ${getPlanPrice(subscriptionType)}/mo
          </p>
        </div>
        <ul className="mt-6 flex flex-col gap-2">
          {addOns.map((addOn) => (
            <li className="capitalize text-gray-400 flex justify-between">
              <p>{addOn}</p>
              <p className="text-marineBlue">+${getAddonPrice(addOn)}/mo</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between py-8 px-4">
        <p className="text-gray-400 text-lg">Total ({subscriptionType})</p>
        <p className="text-purplishBlue font-medium text-lg">
          +${getTotal()}/mo
        </p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between md:absolute md:px-6">
        <ControlButton
          text="Go Back"
          textColor="text-gray-500"
          bgColor="bg-white"
          action={() => dispatch({ type: "decreased_step" })}
        />
        <ControlButton
          text="Confirm"
          textColor="text-white"
          bgColor="bg-purplishBlue"
          action={() => dispatch({ type: "increased_step" })}
        />
      </div>
    </>
  );
}
