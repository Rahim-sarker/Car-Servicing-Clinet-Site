import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = `https://car-servicing-server.adaptable.app/service`;
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Service Added Successfully");
        data.target.reset();
      });
  };

  return (
    <div className="w-50 mx-auto">
      <div style={{ "margin-top": "25%" }}>
        <h3 className="text-primary text-center ">Please add a Service</h3>
      </div>

      <div style={{ "margin-bottom": "22%" }}>
        <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-2"
            placeholder="Enter name"
            {...register("name", { required: true })}
          />
          <textarea
            className="mb-2"
            placeholder="Description"
            {...register("description")}
          />
          <input
            type="number"
            className="mb-2"
            placeholder="price"
            {...register("price")}
          />
          <input
            type="text"
            className="mb-2"
            placeholder="Photo url"
            {...register("img")}
          />
          <input type="submit" value="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
