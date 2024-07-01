type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  action: () => void;
};

export default function ControlButton({
  text,
  bgColor,
  textColor,
  action,
}: Props) {
  return (
    <button
      className={`${bgColor} ${textColor} rounded-md p-2 px-4 transition-colors hover:brightness-125`}
      onClick={action}>
      {text}
    </button>
  );
}
