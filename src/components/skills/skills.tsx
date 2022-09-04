import { FC } from "react";
import { SkillsProps } from "./skills.type";

export const Skills: FC<SkillsProps> = ({ skills }) => (
  <ul>
    {skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
);
