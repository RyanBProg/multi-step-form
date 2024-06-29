type Props = {
  stepNo: number;
  stepName: string;
  currentStep: number;
};

export default function FormStep({ stepNo, stepName, currentStep }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${stepNo === currentStep ? "bg-white" : "bg-transparent"}
        h-[36px] w-[36px] rounded-full border border-white flex justify-center items-center`}>
        <span
          className={`${
            stepNo === currentStep ? "text-blue-600" : "text-white"
          }`}>
          {stepNo}
        </span>
      </div>
      <div className="hidden md:flex md:flex-col">
        <p className="hidden text-sm uppercase text-gray-300 md:inline">
          Step {stepNo}
        </p>
        <p className="hidden text-base uppercase text-white md:inline">
          {stepName}
        </p>
      </div>
    </div>
  );
}
