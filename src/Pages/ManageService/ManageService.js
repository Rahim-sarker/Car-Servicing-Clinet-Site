import React from "react";
import useService from "../../Hook/useService";

const ManageService = () => {
  const [services, setServices] = useService();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete ?");
    if (proceed) {
      const url = `https://car-servicing-server.adaptable.app/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("deleted");
          if (data.deletedCount > 0) {
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
          }
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-success">This is manage service</h3>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button onClick={() => handleDelete(service._id)}>x</button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
