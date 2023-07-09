import { RadioButtons } from "@/lib/formdata";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface RadioFormProps {
  formOptions?: RegisterOptions;
  question: RadioButtons["question"];
  options: RadioButtons["options"];
  name: string;
  register: UseFormRegister<any>;
  errorMessage?: string | undefined;
}

const RadioForm = ({
  formOptions,
  question,
  name,
  options,
  register,
  errorMessage,
}: RadioFormProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex  flex-col mb-2'>
        <label className='text-gray-800 text-lg font-bold '>{question}</label>
        {errorMessage && (
          <p className='text-red-500 font-semibold text-sm italic'>{`*${errorMessage}`}</p>
        )}
      </div>

      <div className='flex flex-col'>
        {options.map((option, index) => (
          <div
            key={index}
            className='flex flex-row items-center mr-2 font-semibold'
          >
            <input
              className='form-radio h-4 w-4 text-gray-800'
              type='radio'
              value={option}
              {...register(name, { ...formOptions })}
            />
            <label className='ml-2 text-gray-700 text-md'>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioForm;
