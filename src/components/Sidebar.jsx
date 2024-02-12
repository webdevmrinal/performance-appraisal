import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SidebarForm from "./SidebarForm";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: "#fed665",
          border: "none",
          color: "#000",
          fontWeight: "600",
          fontSize: ".90em",
        }}
      >
        + Create New
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header
          closeButton
          style={{
            backgroundColor: "#aa82fd",
            color: "#fff",
          }}
        >
          <Offcanvas.Title>ADD NEW JOB</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0" }}>
          <SidebarForm handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
