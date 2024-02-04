import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/EmployeeDetails.css";

import { MdMailOutline } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { TbFileUpload } from "react-icons/tb";
import DropDown from "./DropDown";

const EmployeeDetails = () => {
  const [details] = useState({
    name: "Judith Kathryn",
    id: "0850",
    email: "Judithkathryn@gmail.com",
    pos: "Full-time",
    dept: "IT-Developer",
    tel: "(704) 555-0127",
  });

  return (
    <div className="component-container">
      <div className="employee-detail-container">
        <div className="heading">Employee Details</div>
        <div className="details">
          <div>Employee Name: {details.name}</div>
          <div>ID: {details.id}</div>
          <div className="accent-color bold center">
            <MdMailOutline size={25} /> {details.email}
          </div>
          <div>Position: {details.pos}</div>
          <div>Department: {details.dept}</div>
          <div className="accent-color bold center">
            <HiOutlinePhone size={25} /> {details.tel}
          </div>
        </div>
      </div>
      <div className="esc-details-container">
        <div className="heading esc-heading">
          <span>Escalation Details</span>
          <button>
            <TbFileUpload size={25} />
            Upload File
          </button>
        </div>
        <div className="esc-details">
          <div className="esc-details-item custom-select">
            <label htmlFor="esc-reason">Reason for Escalation</label>
            <select name="esc-reason" id="esc-reason">
              <option value="reason-1">reason-1</option>
              <option value="reason-2">reason-2</option>
              <option value="reason-3">reason-3</option>
            </select>
          </div>
          <div className="esc-details-item">
            <label htmlFor="esc-init">Initiated by</label>
            <select name="esc-init" id="esc-init">
              <option value="reason-1">reason-1</option>
              <option value="reason-2">reason-2</option>
              <option value="reason-3">reason-3</option>
            </select>
          </div>
          <div className="esc-details-item">
            <label htmlFor="esc-date">Date of Escalation</label>
            <select name="esc-date" id="esc-date">
              <option value="date-1">Date-1</option>
              <option value="date-2">Date-2</option>
              <option value="date-3">Date-3</option>
            </select>
          </div>
          <div className="esc-details-item">
            <label htmlFor="esc-level">Escalation Level</label>
            <select name="esc-level" id="esc-level">
              <option value="date-1">Level-1</option>
              <option value="date-2">Level-2</option>
              <option value="date-3">Level-3</option>
            </select>
          </div>
          <div className="esc-details-item comment-item">
            <span>Comment</span>
            <textarea name="" id="" cols="30" rows="7"></textarea>
          </div>
          <div className="esc-cta-buttons">
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
