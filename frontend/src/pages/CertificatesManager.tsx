import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
  FaUpload,
} from "react-icons/fa";

const CertificatesManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center mb-8">

          <div>
              <h2 className="text-3xl font-bold">
                  Certificates Manager
              </h2>

              <p className="text-gray-400 mt-2">
                  Manage all certificates.
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
              Add Certificate
          </button>

      </div>

      {showModal && (

      <div
        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        onClick={() => {
          setShowModal(false);
          setEditMode(false);
        }}
      >

        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-[#181028] border border-purple-500/20 rounded-2xl w-[800px] p-8 max-h-[90vh] overflow-y-auto"
        >

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold">
              {editMode ? "Edit Certificate" : "Add Certificate"}
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

          <div className="grid grid-cols-2 gap-6">

            <input
              placeholder="Certificate Name"
              className="bg-[#24143d] p-4 rounded-xl outline-none border border-purple-500/20"
            />

            <input
              placeholder="Issuing Organization"
              className="bg-[#24143d] p-4 rounded-xl outline-none border border-purple-500/20"
            />

            <input
              type="date"
              className="bg-[#24143d] p-4 rounded-xl outline-none border border-purple-500/20"
            />

            <input
              placeholder="Credential URL"
              className="bg-[#24143d] p-4 rounded-xl outline-none border border-purple-500/20"
            />

            <div className="col-span-2">

              <label className="block mb-2 text-gray-300">
                Credential ID
              </label>

              <input
                placeholder="AWS-CP-123456"
                className="w-full bg-[#24143d] p-4 rounded-xl outline-none border border-purple-500/20"
              />

            </div>

            <div className="col-span-2">

              <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-xl">
                <FaUpload />
                Upload Certificate Image
              </button>

            </div>

          </div>

          <div className="flex justify-end gap-4 mt-8">

            <button
              onClick={() => {
                setShowModal(false);
                setEditMode(false);
              }}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl"
            >
              Cancel
            </button>

            <button className="bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-xl">
              {editMode ? "Update Certificate" : "Save Certificate"}
            </button>

          </div>

        </div>

      </div>

      )}
      {/* Certificates Table */}

      <div className="overflow-hidden rounded-2xl border border-purple-500/20">

        <table className="w-full">

          <thead className="bg-[#181028]">

            <tr>

              <th className="text-left p-4">Image</th>

              <th className="text-left p-4">Certificate</th>

              <th className="text-left p-4">Organization</th>

              <th className="text-left p-4">Date</th>

              <th className="text-left p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t border-purple-500/10">

              <td className="p-4">🏆</td>

              <td className="p-4">
                AWS Cloud Practitioner
              </td>

              <td className="p-4">
                Amazon Web Services
              </td>

              <td className="p-4">
                Jul 2026
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

            <tr className="border-t border-purple-500/10">

              <td className="p-4">🎓</td>

              <td className="p-4">
                Python Programming
              </td>

              <td className="p-4">
                Coursera
              </td>

              <td className="p-4">
                May 2026
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

export default CertificatesManager;