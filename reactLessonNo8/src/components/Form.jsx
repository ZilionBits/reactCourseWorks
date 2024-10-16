import { useState } from "react";

export const Form = () => {
  const [inputValue, setInputValue] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputError, setInputError] = useState();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length < 10) {
        setInputError("Field should have more than 10 chars.");
    } else {
        setInputError("");
    }
  };
  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name} Email: ${formData.email}`);
  };

  return (
    <div style={{ marginLeft: "100px" }}>
      <h1>FORM</h1>
      <form action="">
        <label htmlFor="">Fill in the form: </label>
        <input value={inputValue} type="text" onChange={handleOnChange} />

        <button disabled={inputError}>Submit</button>
        <p>Input value is: {inputValue} {inputError}</p>
      </form>

      <form action="">
        <label htmlFor="">Dropdown option:</label>
        <select
          name=""
          id=""
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="...">...</option>
          <option value="kaunas">Kaunas</option>
          <option value="klaipeda">Klaipeda</option>
          <option value="kedainiai">Kedainiai</option>
        </select>
        <p>Pasirinktas miestas: {selectedOption}</p>
      </form>

      <form action="">
        <label htmlFor="">Checkbox: </label>
        <input
          checked={isChecked}
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div>
          Checkbox status: {isChecked ? <p>selected</p> : <p>not selected</p>}
        </div>
      </form>

      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">name:</label>
        <input name="name" type="text" onChange={handleForm} />
        <label htmlFor="">email:</label>
        <input name="email" type="text" onChange={handleForm} />
        <label htmlFor="">message:</label>
        <textarea name="message" type="text" onChange={handleForm} />
        <button>Submit</button>
        <p>name: {formData.name}</p>
        <p>email: {formData.email}</p>
        <p>message: {formData.message}</p>
      </form>
    </div>
  );
};
