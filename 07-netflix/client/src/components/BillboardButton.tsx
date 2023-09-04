import { PlayIcon } from "@heroicons/react/24/solid";

interface BillboardButtonProps {
  text: string;
  theme: "light" | "dark";
}

export default function BillboardButton({ text, theme }: BillboardButtonProps) {
  return (
    <button
      className={`${
        theme === "dark" ? "bg-opacity-30" : null
      } bg-white rounded-md py-2 px-4 w-auto text-lg font-semibold flex items-center hover:bg-neutral-400 transiton`}
    >
      <PlayIcon
        className={`w-7 ${theme === "light" ? null : "text-white"} mr-1`}
      />
      <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
        {text}
      </p>
    </button>
  );
}
