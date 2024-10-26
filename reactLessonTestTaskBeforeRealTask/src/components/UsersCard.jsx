import { Card, Image, Stack } from "react-bootstrap";
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export const UsersCard = ({ firstName, lastName, age, editIcon }) => {
  const [editToast, showEditToast] = useState(false);
  return (
    <>
      <Card>
        <Stack direction="horizontal">
          <Card.Body>
            <Card.Title>
              {firstName} {lastName}
            </Card.Title>
            <Card.Subtitle>Age: {age}</Card.Subtitle>
          </Card.Body>
          <Image src={editIcon} onClick={showEditToast} />
        </Stack>
        <ToastContainer
          position="middle-center"
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => showEditToast(false)}
            show={editToast}
            delay={3000}
            autohide
          >
            <Toast.Body>User edit interface.</Toast.Body>
          </Toast>
        </ToastContainer>
      </Card>
    </>
  );
};
