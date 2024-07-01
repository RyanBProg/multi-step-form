import tickIcon from "../../assets/images/icon-thank-you.svg";

export default function FormCompleted() {
  return (
    <div>
      <img src={tickIcon} alt="tick icon" className="mx-auto" />
      <h1 className="text-marineBlue text-3xl font-semibold text-center">
        Thank you!
      </h1>
      <p className="mt-3 mb-5 text-lg text-coolGray text-center">
        Thanks for confirming you subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
