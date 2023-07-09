import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextFormProps {
  type: string;
  formOptions?: RegisterOptions;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errorMessage?: string | undefined;
}

const TextForm = (props: TextFormProps) => {
  const { formOptions, label, name, register, errorMessage, type } = props;
  return (
    <div className='flex flex-col'>
      <div className='flex  flex-col mb-2'>
        <label className='text-gray-800 text-lg font-bold '>{label}</label>
      </div>
      <div className='flex flex-col'>
        <input
          className='form-input h-8 w-full text-gray-800 rounded-md border-2 border-gray-900 px-2'
          {...register(name, { ...formOptions })}
          type={type}
        />
      </div>
      {errorMessage && (
        <p className='text-red-500 font-semibold text-sm italic'>{`${errorMessage}`}</p>
      )}
    </div>
  );
};

export default TextForm;
