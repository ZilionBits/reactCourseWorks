const CardComponent = (props) => {
  console.log(props);

  return (
    <>
      <img src="src\assets\react.svg" />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </>
  );
};

export default CardComponent;

export const OtherCard = ({ title, text, buttonText = "Click me" }) => {
  return (
    <>
      <img src="src\assets\react.svg" />
      <h4>{title}</h4>
      <p>{text}</p>
      <button>{buttonText}</button>
    </>
  );
};
