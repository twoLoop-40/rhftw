import { RadioButtons } from "@/lib/formdata";

interface RadioFormProps {
  question: RadioButtons["question"];
  options: RadioButtons["options"];
  name: string;
  register: any;
  errors?: any;
}

const RadioForm = ({
  question,
  name,
  options,
  register,
  errors,
}: RadioFormProps) => {
  return (
    <div className='flex flex-col'>
      <label className='text-gray-800 text-md font-bold mb-2'>{question}</label>
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
              {...register(name)}
            />
            <label className='ml-2 text-gray-700 text-sm'>{option}</label>
          </div>
        ))}
      </div>
      {errors?.name && (
        <p className='text-red-500 text-xs italic'>{errors?.name.message}</p>
      )}
    </div>
  );
};

export default RadioForm;
