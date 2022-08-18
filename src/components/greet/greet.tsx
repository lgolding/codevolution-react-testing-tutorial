import React, { FC } from "react";

type GreetProps = {
  name?: string;
};

export const Greet: FC<GreetProps> = ({ name }) => {
  return <div>Hello, {name}</div>;
};
