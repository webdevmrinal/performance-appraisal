import Accordion from "react-bootstrap/Accordion";
import CommunicationHistorySteps from "./CommunicationHistorySteps";
import "../styles/CustomAccordion.css"

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span style={{fontWeight:'600', fontSize: "0.75em", color: "#6738d9" }}>
            March 21, 2023
          </span>
        </Accordion.Header>
        <Accordion.Body>
          {Array.from({ length: 5 }).map((item, index) => {
            return <CommunicationHistorySteps key={index} />;
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span style={{fontWeight:'600', fontSize: "0.75em", color: "#6738d9" }}>
            March 20, 2023
          </span>
        </Accordion.Header>
        <Accordion.Body>
          {Array.from({ length: 3 }).map((item, index) => {
            return <CommunicationHistorySteps key={index} />;
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
