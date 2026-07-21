import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";
const JourneyManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Journey Timeline
          </h2>

          <p className="text-gray-400 mt-2">
            Manage your timeline journey.
          </p>

        </div>

        <button
          onClick={() => {
            setEditMode(false);
            setShowModal(true);
          }}
          className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-xl flex items-center gap-3"
        >
          <FaPlus />
          Add Timeline
        </button>

      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => {
            setShowModal(false);
            setEditMode(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#181028] border border-purple-500/20 rounded-2xl w-[800px] p-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                {editMode ? "Edit Timeline" : "Add Timeline"}
              </h2>

              <button
                onClick={() => {
                  setShowModal(false);
                  setEditMode(false);
                }}
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Year (e.g. 2026)"
                className="bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20"
              />

              <input
                placeholder="Title"
                className="bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20"
              />

              <textarea
                placeholder="Description"
                className="md:col-span-2 bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20 h-32 resize-none"
              />

              <input
                type="number"
                placeholder="Display Order"
                className="bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20"
              />

              <select className="bg-[#24143d] rounded-xl p-4 outline-none border border-purple-500/20">
                <option>Current</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditMode(false);
                }}
                className="px-6 py-3 rounded-xl border border-purple-500/30 hover:bg-purple-500/10 transition"
              >
                Cancel
              </button>

              <button className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-xl">
                {editMode ? "Update Timeline" : "Save Timeline"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-hidden rounded-2xl border border-purple-500/20">
        <table className="w-full">
          <thead className="bg-[#181028]">
            <tr>
              <th className="p-4 text-left">Year</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t border-purple-500/10">
              <td className="p-4">2025</td>
              <td className="p-4">
                Started BS Software Engineering
              </td>
              <td className="p-4">
                Bahria University Karachi Campus
              </td>

              <td className="p-4 flex gap-3">
                <button
                  onClick={() => {
                    setEditMode(true);
                    setShowModal(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaEdit />
                  Edit
                </button>

                <button className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-lg flex items-center gap-2">
                  <FaTrash />
                  Delete
                </button>
              </td>

            </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default JourneyManager;