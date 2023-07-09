export type RadioButtons = {
  question: string;
  options: string[];
};

const department: RadioButtons = {
  question: "What department do you want to work for?",
  options: ["Sales", "Marketing", "Accounting", "Customer Service"],
};

const company: RadioButtons = {
  question: "Why do you want to join this company?",
  options: [
    "I want money!",
    "I love this company!",
    "I want to learn",
    "I don't know why",
  ],
};

export const questions = { department, company };
