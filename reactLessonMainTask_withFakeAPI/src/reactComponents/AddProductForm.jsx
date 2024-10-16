import { Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "../css/ErrorColor.css";
import AddProductFormToast from "./AddProductFormToast";

export const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [postDataReturn, setConfirmDataReturn] = useState({});

  const [showToast, setShowToast] = useState(false);
  const handleShowConfirm = () => setShowToast(true);
  const handleClose = () => setShowToast(false);

  const onSubmit = (data) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((get) => setConfirmDataReturn(get));
    handleShowConfirm();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "50%", margin: "auto" }}
    >
      <h1 className="text-center">
        Write <u>all</u> information about new product
      </h1>
      <Stack gap={2}>
        <label>Title:</label>
        <input {...register("title", { required: true })} />
        {errors.title && <span>Title is required</span>}

        <label>Price:</label>
        <input
          type="number"
          {...register("price", { required: true, min: 0 })}
        />
        {errors.price && <span>Number must be positive</span>}

        <label>Product category:</label>
        <input {...register("category", { required: true })} />
        {errors.category && <span>Category is required</span>}

        <label>Thumbnail url:</label>
        <input {...register("thumbnail", { required: true })} />
        {errors.thumbnail && <span>Thumbnail URL is required</span>}

        <label>Description:</label>
        <textarea
          {...register("description", { required: true, minLength: 5 })}
        />
        {errors.description && (
          <span>Description must contain atleast 5 characters</span>
        )}

        <input type="submit" />
        <AddProductFormToast
          show={showToast}
          disableShow={handleClose}
          {...postDataReturn}
        />
      </Stack>
    </form>
  );
};
