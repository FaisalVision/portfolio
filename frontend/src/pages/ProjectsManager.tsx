import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
  FaImage,
  FaStar,
} from "react-icons/fa";

const ProjectsManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Projects Manager
          </h2>

          <p className="text-gray-400 mt-2">
            Manage all portfolio projects.
          </p>

        </div>

        <button
          onClick={() => {setShowModal(true); setEditMode(false);}}
          className="bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-xl flex items-center gap-3"
        >
          <FaPlus />
          Add Project
        </button>

      </div>



      {/* Modal */}

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
            className="bg-[#181028] border border-purple-500/20 rounded-2xl w-[900px] p-8 max-h-[90vh] overflow-y-auto"
          >

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                {editMode ? "Edit Project" : "Add New Project"}
              </h2>

              <button
                onClick={() => {setShowModal(false); setEditMode(false);}}
              >
                <FaTimes size={24} />
              </button>

            </div>
                        {/* Form */}

            <div className="grid grid-cols-2 gap-6">

              {/* Project Title */}

              <div className="col-span-2">

                <label className="block mb-2 text-gray-300">
                  Project Title *
                </label>

                <input
                  type="text"
                  placeholder="Inventory System"
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                />

              </div>



              {/* Technology */}

              <div>

                <label className="block mb-2 text-gray-300">
                  Technology *
                </label>

                <input
                  type="text"
                  placeholder="Python • PyQt6 • MySQL"
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                />

              </div>

              {/* Project Category */}

              <div>

                <label className="block mb-2 text-gray-300">
                  Project Category *
                </label>

                <select
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                >
                  <option>
                    Desktop Application
                  </option>

                  <option>
                    Web Application
                  </option>

                  <option>
                    AI / Machine Learning
                  </option>

                  <option>
                    Mobile Application
                  </option>

                  <option>
                    Backend / API
                  </option>

                  <option>
                    Full Stack Project
                  </option>

                  <option>
                    Game Development
                  </option>

                  <option>
                    Automation Tool
                  </option>

                  <option>
                    Data Science Project
                  </option>

                  <option>
                    Other
                  </option>
                </select>

              </div>

              {/* Project Status */}

              <div>

                <label className="block mb-2 text-gray-300">
                  Project Status *
                </label>

                <select
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                >

                  <option>
                    Completed
                  </option>

                  <option>
                    In Progress
                  </option>

                  <option>
                    Maintenance
                  </option>

                  <option>
                    Discontinued
                  </option>

                </select>

              </div>


              {/* Display Order */}

              <div>

                <label className="block mb-2 text-gray-300">
                  Display Order
                </label>

                <input
                  type="number"
                  placeholder="1"
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                />

              </div>
              {/* Project Year */}

              <div>

                <label className="block mb-2 text-gray-300">
                  Project Year
                </label>

                <input
                  type="number"
                  placeholder="2026"
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                />

              </div>



              {/* Description */}

              <div className="col-span-2">

                <label className="block mb-2 text-gray-300">
                  Description *
                </label>

                <textarea
                  rows={5}
                  placeholder="Write project description..."
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500 resize-none"
                />
              </div>
              {/* Project Features */}

              <div className="col-span-2">

                <label className="block mb-2 text-gray-300">
                  Project Features
                </label>

                <textarea
                  rows={5}
                  placeholder="Example:
              Product Management
              User Authentication
              Sales Tracking"
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500 resize-none"
                />

              </div>



              {/* GitHub */}

              <div>

                <label className="block mb-2 text-gray-300">
                  GitHub Repository
                </label>

                <input
                  type="url"
                  placeholder="https://github.com/..."
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                />

              </div>



              {/* LinkedIn */}

              <div>

                <label className="block mb-2 text-gray-300">
                  Live Demo URL
                </label>

                <input
                  type="url"
                  placeholder="https://your-demo-link.com"
                  className="w-full bg-[#0b0616] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
                />

              </div>
                            {/* Project Image */}

              <div className="col-span-2">

                <label className="block mb-2 text-gray-300">
                  Project Image
                </label>

                <label className="border-2 border-dashed border-purple-500/30 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition">

                  {
                    imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-40 h-40 object-cover rounded-xl"
                      />
                    ) : (
                      <FaImage className="text-5xl text-purple-400 mb-4" />
                    )
                  }

                  <p className="text-lg font-semibold">
                    Drag & Drop Image
                  </p>

                  <p className="text-gray-400 text-sm mt-2">
                    or click to browse
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];

                      if (file) {
                        setImagePreview(URL.createObjectURL(file));
                      }
                    }}
                  />

                </label>

              </div>

              {/* Featured Project */}

              <div className="col-span-2 flex items-center justify-between bg-[#0b0616] border border-purple-500/20 rounded-xl p-5">

                <div>

                  <h3 className="font-semibold flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    Featured Project
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Show this project in the Featured section.
                  </p>

                </div>

                <button
                  onClick={() => setFeatured(!featured)}
                  className={`w-16 h-8 rounded-full transition ${
                    featured
                      ? "bg-purple-600"
                      : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full transition transform ${
                      featured
                        ? "translate-x-8"
                        : "translate-x-0"
                    }`}
                  />
                </button>

              </div>

              {/* Buttons */}

              <div className="col-span-2 flex justify-end gap-4 mt-4">

                <button
                  onClick={() => {setShowModal(false); setEditMode(false);}}
                  className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
                >
                  Cancel
                </button>

                <button
                  className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-semibold"
                >
                  {editMode ? "Update Project" : "Save Project"}
                </button>

              </div>

            </div>

          </div>

        </div>

      )}
            {/* Projects Table */}

      <div className="mt-10 overflow-hidden rounded-2xl border border-purple-500/20">

        <table className="w-full">

          <thead className="bg-[#181028]">

            <tr>

              <th className="p-4 text-left">Image</th>

              <th className="p-4 text-left">Project</th>

              <th className="p-4 text-left">Technology</th>

              <th className="p-4 text-center">Featured</th>

              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t border-purple-500/10 hover:bg-[#140a25] transition">

              <td className="p-4">

                <div className="w-20 h-14 rounded-lg bg-[#0b0616] border border-purple-500/20 flex items-center justify-center">

                  📦

                </div>

              </td>

              <td className="p-4">

                <h3 className="font-semibold">
                  Inventory System
                </h3>

                <p className="text-sm text-gray-400">
                  Desktop Application
                </p>

              </td>

              <td className="p-4">
                Python • PyQt6 • MySQL
              </td>

              <td className="p-4 text-center">

                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                  Featured
                </span>

              </td>

              <td className="p-4">

                <div className="flex justify-center gap-3">

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

                </div>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProjectsManager;