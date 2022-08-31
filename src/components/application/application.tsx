import React, { FC, Fragment } from "react";

export type ApplicationProps = {};

export const Application: FC<ApplicationProps> = ({}) => {
  return (
    <Fragment>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory.</p>
      <img
        src="https://via.placeholder.com/150"
        alt="a person with a laptop"
        title="a person with a cell phone"
      ></img>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full name"
            value="Larry"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="textarea" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions.
          </label>
        </div>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};
