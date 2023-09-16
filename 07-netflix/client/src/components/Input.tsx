import { useContext } from "react";
import { AuthFormContext, Inputs } from "../pages/LoginPage";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  name: keyof Inputs;
  validate?: () => string | true;
}

export default function Input({ id, label, type, name, validate }: InputProps) {
  const { register, errors } = useContext(AuthFormContext);

  if (!register) return null;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
        {...register(name, {
          required: true,
          validate,
        })}
      />
      <label
        className="absolute 
          text-md
          text-zinc-400
          duration-150 
          transform 
          -translate-y-3 
          scale-75 
          top-4 
          z-10 
          origin-[0] 
          left-6
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-3"
      >
        {label}
      </label>
      {errors[name]?.type === "required" && (
        <p className="text-red-600">This field is required</p>
      )}
      {errors[name]?.type === "validate" && (
        <p className="text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );
}
