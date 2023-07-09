interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <button
      type='submit'
      className='w-full flex justify-center items-center  bg-yellow-400 border-b-4 border-r-4 border-gray-900 rounded-lg shadow-md hover:bg-yellow-500'
    >
      <span className='flex justify-center border-2 border-gray-900 w-full text-lg font-bold p-2 rounded-md'>
        {text}
      </span>
    </button>
  );
};

export default SubmitButton;
