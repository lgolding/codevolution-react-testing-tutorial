import { FC, Fragment, useState } from "react";
import { SkillsProps } from "./skills.type";

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Fragment>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
    </Fragment>
  );
};
