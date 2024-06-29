import { useState } from "react";
import FormStep from "./components/FormStep";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="h-screen bg-gray-200 md:px-2 md:pt-[100px]">
      <form className="max-w-[1000px] h-screen flex flex-col bg-white md:mx-auto md:flex-row md:h-[600px] md:p-4 md:rounded-lg">
        <div className="flex justify-center items-start pt-8 gap-6 bg-sidebarMobile bg-cover bg-no-repeat h-44 md:bg-sidebarDesktop md:justify-start md:flex-col md:h-full md:w-[250px] md:rounded-md md:pl-8 md:gap-8">
          <FormStep stepNo={1} stepName="Your Info" currentStep={currentStep} />
          <FormStep
            stepNo={2}
            stepName="Select Plan"
            currentStep={currentStep}
          />
          <FormStep stepNo={3} stepName="Add-ons" currentStep={currentStep} />
          <FormStep stepNo={4} stepName="Summary" currentStep={currentStep} />
        </div>
        <div>
          <div>
            <h1>Personal Info</h1>
            <p>Please provide your personal information.</p>
            <label htmlFor="name">
              <input type="text" id="name" />
            </label>
          </div>
        </div>
      </form>
    </main>
  );
}

export default App;
