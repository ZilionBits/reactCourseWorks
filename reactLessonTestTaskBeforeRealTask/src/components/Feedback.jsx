import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import React from "react";

export const Feedback = () => {
  const [toast, showToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(true);
  };

  return (
    <>
      <Form style={{ width: "50vw", margin: "auto" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFeedback">
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" placeholder="Feedback" />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <ToastContainer position="middle-center" style={{ zIndex: 1 }}>
          <Toast
            onClose={() => showToast(false)}
            show={toast}
            delay={3000}
            autohide
          >
            <Toast.Body>Feedback successfully submited.</Toast.Body>
          </Toast>
        </ToastContainer>
      </Form>
    </>
  );
};
