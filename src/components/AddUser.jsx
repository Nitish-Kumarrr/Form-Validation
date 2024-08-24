import React, { useState } from "react";
import Form from "./Form";

const AddUser = () => {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl text-orange-400">Check List</h1>
        </div>
        <div className="flex gap-10">
          <div className="border border-orange-400 px-2 py-1">
            <input
              className="border-none outline-none rounded-lg "
              type="text"
              placeholder="Search checklist"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <button
            className="bg-orange-400 p-2 text-white rounded-lg"
            onClick={() => setDisplayForm(true)}
          >
            <i className="fa-regular fa-square-plus mr-2"></i>
            Add New
          </button>
        </div>
      </div>
      <div className="flex  bg-black p-4 text-white">
        <p className="w-[20%]">S.No</p>
        <p className="w-[30%]">Category </p>
        <p className="w-[50%]">Heading</p>
      </div>

      {displayForm && <Form setDisplayForm={setDisplayForm} />}
    </div>
  );
};

export default AddUser;
