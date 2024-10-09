import { useState } from "react";

export const Moretext = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
        // show ? setShow(false) : setShow(true);
    };

  return (
    <div className="text-center">
      <button onClick={handleShow}>Show more</button>
      
      {show &&
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id
        perferendis corrupti illo temporibus maxime perspiciatis rerum.
        Recusandae vero a, temporibus voluptatem optio tenetur eius provident
        sequi, nam sapiente nostrum?
      </p>}

    </div>
  );
};
