import React from "react";
import { GoDotFill } from "react-icons/go";
import step from "../assets/step.svg";
import '../styles/CommHistorySteps.css'

function CommunicationHistorySteps() {
  return (
    <div className="unit-step-container">
      <img src={step} alt="" style={{ height: "60px" }} />
      <div>
        <div style={{ fontWeight: "500" }}>11:30AM</div>
        <div className="comm-history-msg">
          <span>Status Changed</span>
          <GoDotFill />
          <span style={{ fontWeight: "600" }}>
            Inactive to active <span style={{ fontWeight: "400" }}>by</span>{" "}
            Fikri
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommunicationHistorySteps;
