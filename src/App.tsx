import { useState } from "react";
import FormStep from "./components/FormStep";
import Form from "./components/Form";

function App() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <main className="h-screen bg-lightBlue md:px-2 md:pt-[100px]">
      <div className="max-w-[900px] md:bg-white h-screen flex flex-col md:mx-auto md:flex-row md:h-[600px] md:p-4 md:rounded-lg">
        <div className="flex justify-center items-start pt-8 gap-6 bg-sidebarMobile bg-cover bg-no-repeat h-44 md:bg-sidebarDesktop md:justify-start md:flex-col md:h-full md:w-[250px] md:rounded-md md:pl-8 md:gap-8 md:flex-grow md:flex-shrink-0">
          <FormStep stepNo={1} stepName="Your Info" currentStep={currentStep} />
          <FormStep
            stepNo={2}
            stepName="Select Plan"
            currentStep={currentStep}
          />
          <FormStep stepNo={3} stepName="Add-ons" currentStep={currentStep} />
          <FormStep stepNo={4} stepName="Summary" currentStep={currentStep} />
        </div>
        <Form />
      </div>
    </main>
  );
}

export default App;
