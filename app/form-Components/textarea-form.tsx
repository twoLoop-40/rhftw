import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextAreaFormProps {
  formOptions?: RegisterOptions;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errorMessage?: string | undefined;
}

const TextAreaForm = ({
  formOptions,
  label,
  name,
  register,
  errorMessage,
}: TextAreaFormProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex  flex-col mb-2'>
        <label className='text-gray-800 text-lg font-bold '>{label}</label>
      </div>
      <div className='flex flex-col'>
        <textarea
          className='form-textarea h-24 w-full text-gray-800 rounded-md border-2 border-gray-900 px-2'
          {...register(name, { ...formOptions })}
        />
      </div>
      {errorMessage && (
        <p className='text-red-500 font-semibold text-sm italic'>{`${errorMessage}`}</p>
      )}
    </div>
  );
};

export default TextAreaForm;
