import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { useFormContext } from "../../context/FormContext";
import { pricingData } from "../../data/pricingData";
import ControlButton from "../ControlButton";

export default function FormPage2() {
  const { dispatch, subscriptionType, planType } = useFormContext();

  const pricing =
    subscriptionType === "monthly" ? pricingData.monthly : pricingData.annual;

  const toggleSubcription = () => {
    if (subscriptionType === "annual") {
      dispatch({ type: "subscription_monthly" });
    } else {
      dispatch({ type: "subscription_annual" });
    }
  };

  return (
    <>
      <h1 className="text-marineBlue text-3xl font-semibold">
        Select you plan
      </h1>
      <p className="mt-3 mb-5 text-lg text-coolGray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-3 md:flex-row">
        <button
          type="button"
          className={` ${planType === "arcade" && "outline"}
          flex rounded-md border p-4 gap-4 grow basis-0 md:flex-col hover:bg-blue-50 
          focus:bg-blue-50 focus:outline outline-2 outline-blue-500`}
          onClick={() => dispatch({ type: "plan_changed", payload: "arcade" })}>
          <img src={arcadeIcon} alt="arcade icon" />
          <div className="flex flex-col gap-1">
            <h3 className="text-marineBlue font-medium text-left">Arcade</h3>
            <p className="text-gray-400 text-left">
              ${pricing.plans.arcade}/mo
            </p>
            {subscriptionType === "annual" && (
              <p className="text-marineBlue text-sm">2 months free</p>
            )}
          </div>
        </button>
        <button
          type="button"
          className={` ${planType === "advanced" && "outline"}
          flex rounded-md border p-4 gap-4 grow basis-0 md:flex-col hover:bg-blue-50 
          focus:bg-blue-50 focus:outline outline-2 outline-blue-500`}
          onClick={() =>
            dispatch({ type: "plan_changed", payload: "advanced" })
          }>
          <img src={advancedIcon} alt="advanced icon" />
          <div className="flex flex-col gap-1">
            <h3 className="text-marineBlue font-medium text-left">Advanced</h3>
            <p className="text-gray-400 text-left">
              ${pricing.plans.advanced}/mo
            </p>
            {subscriptionType === "annual" && (
              <p className="text-marineBlue text-sm">2 months free</p>
            )}
          </div>
        </button>
        <button
          type="button"
          className={` ${planType === "pro" && "outline"}
          flex rounded-md border p-4 gap-4 grow basis-0 md:flex-col hover:bg-blue-50 
          focus:bg-blue-50 focus:outline outline-2 outline-blue-500`}
          onClick={() => dispatch({ type: "plan_changed", payload: "pro" })}>
          <img src={proIcon} alt="pro icon" />
          <div className="flex flex-col gap-1">
            <h3 className="text-marineBlue font-medium text-left">Pro</h3>
            <p className="text-gray-400 text-left">${pricing.plans.pro}/mo</p>
            {subscriptionType === "annual" && (
              <p className="text-marineBlue text-sm">2 months free</p>
            )}
          </div>
        </button>
      </div>
      <div className="mt-4 flex justify-center items-center gap-6 p-4 bg-blue-50 rounded-md">
        <p
          className={`
        ${subscriptionType === "monthly" ? "text-marineBlue" : "text-gray-400"}
        font-medium
          `}>
          Monthly
        </p>
        <button
          type="button"
          className="bg-marineBlue h-6 w-10 rounded-full px-1 relative"
          onClick={toggleSubcription}>
          <div
            className={` ${
              subscriptionType === "monthly" ? "left-1" : "right-1"
            }
            absolute h-4 w-4 rounded-full bg-white bottom-1`}></div>
        </button>
        <p
          className={`
        ${subscriptionType === "annual" ? "text-marineBlue" : "text-gray-400"}
        font-medium
          `}>
          Yearly
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
          text="Next Step"
          textColor="text-white"
          bgColor="bg-marineBlue"
          action={() => dispatch({ type: "increased_step" })}
        />
      </div>
    </>
  );
}
