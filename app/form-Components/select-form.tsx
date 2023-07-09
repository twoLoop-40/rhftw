import { SelectOption } from "@/lib/formdata";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface SelectFormProps {
  formOptions?: RegisterOptions;
  label: SelectOption["label"];
  options: SelectOption["options"];
  name: string;
  register: UseFormRegister<any>;
  errorMessage?: string | undefined;
}

const SelectForm = ({
  formOptions,
  label,
  options,
  name,
  register,
  errorMessage,
}: SelectFormProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex  flex-col mb-2'>
        <label className='text-gray-800 text-lg font-bold '>{label}</label>
      </div>
      <div className='flex flex-col'>
        <select
          className='form-select h-8 w-full text-gray-800 rounded-md border-2 border-gray-900'
          {...register(name, { ...formOptions })}
        >
          {options.map((option, index) => (
            <option className='flex items-center' key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && (
        <p className='text-red-500 text-sm italic'>{`*${errorMessage}`}</p>
      )}
    </div>
  );
};

export default SelectForm;
