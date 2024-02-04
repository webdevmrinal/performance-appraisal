import { FiArrowLeftCircle } from "react-icons/fi";
import EmployeeDetails from "./components/EmployeeDetails";
import CommunicationHistory from "./components/CommunicationHistory";
import "./App.css";

function App() {
  return (
    <div className="escalation-details-container">
      <button className="back-button">
        <FiArrowLeftCircle />
        <span>Back</span>
      </button>
      <EmployeeDetails />
      <CommunicationHistory />
    </div>
  );
}

export default App;
