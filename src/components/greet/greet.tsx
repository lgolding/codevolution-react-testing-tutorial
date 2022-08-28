import React, { FC } from "react";
import { GreetProps } from "./greet.types";

export const Greet: FC<GreetProps> = ({ name }) => {
  return <div>Hello, {name}</div>;
};
