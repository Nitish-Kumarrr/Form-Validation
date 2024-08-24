import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ setDisplayForm }) => {
  const [formData, setFormData] = useState({
    Department: "",
    Category: "",
    Heading: "",
    FormNo: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.Department.trim()) {
      validationErrors.Department = "Department is required";
      setErrors(validationErrors);
      toast.error("Please Enter department");
      return;
    }
    if (!formData.Category.trim()) {
      validationErrors.Category = "Category is required";
      setErrors(validationErrors);
      toast.error("Please Enter Category");
      return;
    }
    if (!formData.Heading.trim()) {
      validationErrors.Heading = "Heading is required";
      setErrors(validationErrors);
      toast.error("Please Enter Heading");

      return;
    }
    if (!formData.FormNo.trim()) {
      validationErrors.FormNo = "FormNo is required";
      toast.error("Please Enter FormNo");
      setErrors(validationErrors);

      return;
    }

    if (Object.keys(validationErrors).length === 0) {
      setFormData({
        Department: "",
        Category: "",
        Heading: "",
        FormNo: "",
      });
      toast.success("Form Submitted Successfully");
    }
  };
  return (
    <div className="h-[650px] w-full mt-5 ">
      <div className="h-full max-w-[1280px] mx-auto shadow-lg rounded-lg relative">
        <i
          className="fa-solid fa-xmark absolute top-3 right-2 text-white cursor-pointer"
          onClick={() => setDisplayForm(false)}
        ></i>
        <h3 className="text-center bg-black text-white  p-2 rounded-t-lg">
          Add New Design Form
        </h3>
        <form
          action="submit"
          className="w-[80%] mx-auto mt-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-6 gap-2">
            <label>Department</label>
            <input
              name="Department"
              type="text"
              placeholder="Enter Department.."
              className="p-3 bg-gray-300 border-none outline-none rounded-lg"
              value={formData.Department}
              onChange={handleChange}
            />
            {errors.Department && (
              <p className="text-sm text-red-500">{errors.Department}</p>
            )}
          </div>
          <div className="flex flex-col mb-6 gap-2">
            <label>Category</label>
            <input
              name="Category"
              type="text"
              placeholder="Enter Category.."
              className="p-3 bg-gray-300 border-none outline-none rounded-lg"
              value={formData.Category}
              onChange={handleChange}
            />
            {errors.Category && (
              <p className="text-sm text-red-500">{errors.Category}</p>
            )}
          </div>
          <div className="flex flex-col mb-6 gap-2">
            <label>Heading</label>
            <input
              name="Heading"
              type="text"
              placeholder="Enter Heading.."
              className="p-3 bg-gray-300 border-none outline-none rounded-lg"
              value={formData.Heading}
              onChange={handleChange}
            />
            {errors.Heading && (
              <p className="text-sm text-red-500">{errors.Heading}</p>
            )}
          </div>
          <div className="flex flex-col mb-6 gap-2">
            <label>FormNo</label>
            <input
              name="FormNo"
              type="text"
              placeholder="Enter FormNo.."
              className="p-3 bg-gray-300 border-none outline-none rounded-lg"
              value={formData.FormNo}
              onChange={handleChange}
            />
            {errors.FormNo && (
              <p className="text-sm text-red-500">{errors.FormNo}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button className="py-2 px-4 rounded-lg border-none bg-orange-500 text-white">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};
export default Form;
