"use client";

import { useForm } from "react-hook-form";
import RadioForm from "./form-Components/radio-form";
import { questions } from "@/lib/formdata";
import SubmitButton from "./form-Components/submit-button";

const ApplicationForm = () => {
  const { register, formState, watch, handleSubmit } = useForm();
  const { department, company } = questions;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='bg-orange-100 flex justify-center w-96 border-r-4 border-b-4 border-gray-900 rounded-xl shadow-lg'>
      <form
        className='flex flex-col w-full p-6 border-2 border-gray-900 rounded-lg gap-y-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <RadioForm
          name='department'
          options={department.options}
          register={register}
          key='department'
          question={department.question}
        />
        <RadioForm
          name='company'
          options={company.options}
          register={register}
          key='company'
          question={company.question}
        />
        <SubmitButton text='Give me this job' />
      </form>
    </div>
  );
};

export default ApplicationForm;
