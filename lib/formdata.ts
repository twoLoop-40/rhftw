export type FormValues = {
  department: string;
  why: string;
  email: string;
  salary: string;
  introduction: string;
  dream: string;
};

export type RadioButtons = {
  question: string;
  options: string[];
};

export type SelectOption = {
  label: string;
  options: string[];
};

const department: RadioButtons = {
  question: "What department do you want to work for?",
  options: ["Sales", "Marketing", "Accounting", "Customer Service"],
};

const why: RadioButtons = {
  question: "Why do you want to join this company?",
  options: [
    "I want money!",
    "I love this company!",
    "I want to learn",
    "I don't know why",
  ],
};

const salary: SelectOption = {
  label: "Salary",
  options: ["$50k", "$100k", "$150k", "$200k"],
};

export const typeAssertion = <T>(obj: any): T => obj as T;
export const questions = { department, why, salary };
