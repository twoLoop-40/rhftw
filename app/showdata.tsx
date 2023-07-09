interface ShowDataProps {
  [propsKey: string]: any;
}
const ShowData = ({ userData }: ShowDataProps) => {
  return (
    <div className='flex flex-col'>
      <span>Form Values</span>
      {Object.keys(userData).map((key, index) => (
        <div className='flex gap-x-2' key={index}>
          <label className='text-gray-800 text-lg font-bold '>{`${key
            .toString()
            .toUpperCase()}:`}</label>
          <p className='text-gray-800 text-lg font-semibold '>
            {userData[key]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
