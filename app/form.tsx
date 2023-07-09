"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import RadioForm from "./form-Components/radio-form";
import { FormValues, questions, typeAssertion } from "@/lib/formdata";
import SubmitButton from "./form-Components/submit-button";
import SelectForm from "./form-Components/select-form";
import TextForm from "./form-Components/text-form";
import TextAreaForm from "./form-Components/textarea-form";
import { useState } from "react";
import ShowData from "./showdata";

const ApplicationForm = () => {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      introduction: "",
      dream: "",
      email: "",
      department: "",
      why: "",
    },
  });
  const { department, why, salary } = questions;
  const [userData, setUserData] = useState<FormValues>();

  const onReset = () => {
    setUserData(() => undefined);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (isSubmitted) {
      setUserData(() => data);
      reset();
    }
  };
  return (
    <div className='flex-col bg-orange-100 flex justify-center w-[36rem]  border-r-4 border-b-4 border-gray-900 rounded-xl shadow-lg'>
      <form
        className='flex flex-col w-full p-6 border-2 border-gray-900 rounded-lg gap-y-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <header className='relative flex items center justify-center'>
          <h1 className='text-2xl font-bold text-center text-gray-800'>
            Job Application Form
          </h1>
          {userData ? (
            <button
              onClick={onReset}
              className='absolute top-0 right-0 text-gray-800 text-sm font-bold border p-2 border-gray-900 rounded-xl transform hover:bg-indigo-400 duration-200'
            >
              reset
            </button>
          ) : null}
        </header>

        <RadioForm
          errorMessage={typeAssertion<string>(errors.department?.message)}
          formOptions={{ required: "Please select a department" }}
          name='department'
          options={department.options}
          register={register}
          key='department'
          question={department.question}
        />
        <RadioForm
          errorMessage={typeAssertion<string>(errors.why?.message)}
          formOptions={{ required: "Please select a reason" }}
          name='why'
          options={why.options}
          register={register}
          key='why'
          question={why.question}
        />
        <SelectForm
          label={salary.label}
          name='salary'
          options={salary.options}
          register={register}
        />
        <TextForm
          errorMessage={typeAssertion<string>(errors.introduction?.message)}
          formOptions={{ required: "Please write down your introduction" }}
          label='Introduce yourself'
          name='introduction'
          register={register}
          type='text'
        />
        <TextAreaForm
          errorMessage={typeAssertion<string>(errors.dream?.message)}
          formOptions={{
            required: "Please tell us what your dreams are",
            minLength: {
              value: 10,
              message: "Please write more than 10 characters",
            },
          }}
          label='Tell us what your dreams are'
          name='dream'
          register={register}
        />
        <TextForm
          errorMessage={typeAssertion<string>(errors.email?.message)}
          formOptions={{
            required: "Please write down your email",
            pattern: {
              value: /.*@naver\.com$/,
              message: "Only @naver.com email available",
            },
          }}
          label='Email'
          name='email'
          register={register}
          type='email'
        />
        <SubmitButton text='Give me this job' />
        {userData ? <ShowData userData={userData} /> : null}
      </form>
    </div>
  );
};

export default ApplicationForm;
