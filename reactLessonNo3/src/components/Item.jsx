const Suitcase = ({ name, isPaked, importance }) => {
  return (
    <div className="d-flex flex-row">
      <p>{name}: </p>
      {isPaked ? "✔" : "❌"}
      {importance > 0 && <p className="fw-bolder">(Svarbumas: {importance})</p>}
    </div>
  );
};

export default Suitcase;

// const Suitcase = () => {

//     return items.map((i) =>
//     <div key={i.item}>
//       <div className="d-flex flex-row">
//       <h1>{i.item}:</h1>{i.isPaked ?
//       (<img src="src\images\checked.png"  style={{width: 40}}/>)
//       :
//       (<img src="src\images\close.png"  style={{width: 40}}/>)
//       }
//       {!i.isPaked && <p>Isidek!</p>}
//       {i.isPaked && <p>Jau yra.</p>}
//       </div>
//     </div>
//   )};
