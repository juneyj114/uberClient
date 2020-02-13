import React from "react";

interface IProps {
  submitFn: any;
  className?: string;
  children: React.ReactFragment;
}

const Form = ({ submitFn, className, children }: IProps) => (
  <form
    className={className}
    onSubmit={event => {
      event.preventDefault();
      submitFn();
    }}
  >
    {children}
  </form>
);

export default Form;
