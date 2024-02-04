import React from "react";
import CustomAccordion from "./Accordion";
import { PiSlidersHorizontalFill } from "react-icons/pi";


import "../styles/CommunicationHistory.css";

import "bootstrap/dist/css/bootstrap.min.css";
import CommunicationHistorySteps from './CommunicationHistorySteps';

const CommunicationHistory = () => {
  return (
    <div className="comm-history-container">
      <div className="comm-history-header">
        <span>Communication History</span>
        <button>
          <PiSlidersHorizontalFill size={25} />
          Filter
        </button>
      </div>

      <CustomAccordion />
    </div>
  );
};

export default CommunicationHistory;
