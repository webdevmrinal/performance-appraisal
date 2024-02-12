import React from "react";
import "../styles/SidebarForm.css"

const SidebarForm = ({handleClose}) => {
    const handleCancelClick = (event) => {
        event.preventDefault();
        handleClose();
    } 
  return (
    <>
      <form className="sidebar-form" onSubmit={handleCancelClick}>
        <div>
          <label htmlFor="job-title">Job Title</label>
          <input type="text" id="job-title" />
        </div>
        <div className="group-input">
          <div>
            <label htmlFor="job-code">Job Code</label>
            <input type="text" id="job-code" />
          </div>
          <div>
            <label htmlFor="pay-scale">Pay Scale</label>
            <input type="text" id="pay-scale" />
          </div>
        </div>
        <div>
          <label htmlFor="skills">Required Skills</label>
          <input type="text" id="skills" />
        </div>
        <div className="group-input">
          <div>
            <label htmlFor="no-of-positions">No.of Positions</label>
            <select name="no-of-positions" id="no-of-positions">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
            </select>
          </div>
          <div>
            <label htmlFor="required-exp">Required Exp</label>
            <select name="required-exp" id="required-exp">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select name="location" id="location">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
        </div>
        <div>
          <label htmlFor="education">Education</label>
          <select name="education" id="education">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
        </div>
        <div>
          <label htmlFor="employment-type">Exployment type</label>
          <select name="employment-type" id="employment-type">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="bottom-button">
          <button onClick={handleClose} type="button">Cancel</button>
          <button id="add-button" type="submit">ADD</button>
        </div>
      </form>
    </>
  );
};

export default SidebarForm;
