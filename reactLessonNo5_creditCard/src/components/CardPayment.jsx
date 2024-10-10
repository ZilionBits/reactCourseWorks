import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";
import { Stack, Card, Button } from "react-bootstrap";

export const CardPayment = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const [show, setShow] = useState(false);

  const printInfo = () => {
    setShow(!show);
  };

  return (
    <>
      <Card
        body
        style={{
          border: "none",
          width: "450px",
          alignItems: "center",
          margin: "auto",
          backgroundImage: "linear-gradient(to bottom right, #65DB82, #DBA865)",
        }}
        className="text-center mt-5"
      >
        <h1>React Credit Cards</h1>
        <h2>Beautiful credit cards for your payment forms</h2>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form>
          <Stack gap={2} className="mx-auto m-3">
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-between"
            >
              <input
                type="number"
                name="expiry"
                placeholder="Expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Stack>
            <Button onClick={printInfo}>Pay</Button>
          </Stack>
        </form>
        {show && (
          <>
            <p>number: {state.number}</p>
            <p>name: {state.name}</p>
            <p>expiry: {state.expiry}</p>
            <p>CVC: {state.cvc}</p>
          </>
        )}
      </Card>
    </>
  );
};
