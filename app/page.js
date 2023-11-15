"use client";

import { list } from "postcss";
import React, { useState } from "react";

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    setdesc("");
    settitle("");
  };

  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)


  }

  let renderTask = <h2>No task avialable</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex item-center justify-between mb-8">
          <div className="flex items-center justify-between  w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-medium">{t.desc}</h6>
          </div>
          <button className="bg-red-400 text-white px-4 py-2 rounded font-bold" onClick={()=>{
            deleteHandler(i)
          }}>
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-7 text-2xl font-bold text-center">
        My ToDo list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border border-gray-800 m-8 px-4 py-2"
          placeholder="enter task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border border-gray-800 m-8 px-4 py-2"
          placeholder="Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 rounded-lg m-10">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
