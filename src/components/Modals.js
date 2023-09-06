import React from "react";
import { AddUser } from "./Form";

export default function Modals() {
  return (
    <div className="mb-4">
      <label className="btn btn-sm text-center" htmlFor="modal-1">
        Add User
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay backdrop-blur-sm" htmlFor="modal-1" />
        <div className="modal-content flex flex-col gap-5">
          <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </label>
          <h2 className="text-xl">Add New User:</h2>
          <AddUser />
        </div>
      </div>
    </div>
  );
}
