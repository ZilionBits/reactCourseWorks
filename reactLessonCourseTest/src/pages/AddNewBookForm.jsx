import { Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { libraryApi } from "../libraryApi/LibraryApi";
import { useAuth } from "../contextGlobal/AuthContext";

const AddNewBookForm = () => {

  const Auth = useAuth();
  const token = Auth.getUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [postDataReturn, setConfirmDataReturn] = useState({});

  const onSubmit = (data) => {
    libraryApi.addNewBook(data, token)
      .then((get) => setConfirmDataReturn(get));
      navigate("/booksList");
  };

  console.log(postDataReturn);
  
    return (
      <div style={{backgroundColor: "grey"}}>
        <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "50%", margin: "auto" }}
      >
        <h1 className="text-center">
          Write <u>all</u> information about new book
        </h1>
        <Stack gap={2}>
          <label>Title:</label>
          <input {...register("title", { required: true })} />
          {errors.title && <span>Title is required</span>}
  
          <label>Price:</label>
          <input
            {...register("price", { required: true, min: 0 })}
          />
          {errors.price && <span>Number must be positive</span>}
  
          <label>Book author:</label>
          <input 
            {...register("author", { required: true })} />
          {errors.author && <span>Author is required</span>}
  
          <label>Book category:</label>
          <input {...register("category", { required: true })} />
          {errors.category && <span>Category is required</span>}
   
          <label>Book cover URL:</label>
          <input {...register("cover", { required: true })} />
          {errors.cover && <span>Cover URL is required</span>} 

          <label>Reserved:</label>
          <input 
          type="checkbox"
          {...register("reserved")} />

  
          <input type="submit" />
        </Stack>
      </form>
      </div>
    );
};

export default AddNewBookForm;