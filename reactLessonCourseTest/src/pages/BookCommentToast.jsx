import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const BookCommentToast = ({toastShow, setShowToast}) => {


  return (
      <ToastContainer position="middle-center">
        <Toast onClose={() => setShowToast(false)} show={toastShow} delay={3000} autohide>
          <Toast.Body className="custom-toast-style">
            <strong>Comment successfully added</strong>
          </Toast.Body>
        </Toast>
      </ToastContainer>
  );
};

export default BookCommentToast;