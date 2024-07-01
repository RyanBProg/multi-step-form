import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

export default function FormPage2() {
  return (
    <>
      <h1 className="text-marineBlue text-3xl font-semibold">
        Select you plan
      </h1>
      <p className="mt-3 mb-5 text-lg text-coolGray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-2 md:flex-row">
        <button className="flex rounded-md border p-4 gap-4 md:flex-col hover:bg-lightBlue focus:bg-lightBlue focus:outline">
          <img src={arcadeIcon} alt="arcade icon" />
          <div className="flex flex-col md:flex-row">
            <h3 className="text-marineBlue">Arcade</h3>
            <p className="text-lightBlue">$9/mo</p>
          </div>
        </button>
        <button>
          <img src={advancedIcon} alt="advanced icon" />
          <h3>Advanced</h3>
          <p>$12/mo</p>
        </button>
        <button>
          <img src={proIcon} alt="pro icon" />
          <h3>Pro</h3>
          <p>$15/mo</p>
        </button>
      </div>
    </>
  );
}
