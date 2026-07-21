import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
} from "react-icons/fa";
const SkillsManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  return (
    <div> 
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">
            Skills Manager
          </h2>

          <p className="text-gray-400 mt-2">
            Manage all portfolio skills.
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
          Add Skill
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
            className="bg-[#181028] border border-purple-500/20 rounded-2xl w-[700px] max-h-[90vh] overflow-y-auto p-8"
          >

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                {editMode ? "Edit Skill" : "Add Skill"}
              </h2>

              <button onClick={() => {setShowModal(false); setEditMode(false);}}>
                <FaTimes size={24} />
              </button>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <input
                placeholder="Skill Name"
                className="bg-[#24143d] p-4 rounded-xl border border-purple-500/20 outline-none"
              />

              <input
                placeholder="Percentage"
                type="number"
                className="bg-[#24143d] p-4 rounded-xl border border-purple-500/20 outline-none"
              />

              <select className="bg-[#24143d] p-4 rounded-xl border border-purple-500/20 outline-none">
                <option>Frontend</option>
                <option>Backend</option>
                <option>Database</option>
                <option>Desktop</option>
                <option>Mobile</option>
                <option>AI / Machine Learning</option>
                <option>Cloud</option>
                <option>DevOps</option>
                <option>Cyber Security</option>
                <option>Programming Languages</option>
                <option>Tools</option>
                <option>Data Science</option>
                <option>Game Development</option>
                <option>UI / UX</option>
                <option>Other</option>
              </select>

              <select className="bg-[#24143d] p-4 rounded-xl border border-purple-500/20 outline-none">

                <option>🐍 Python</option>
                <option>☕ Java</option>
                <option>🟨 JavaScript</option>
                <option>📘 TypeScript</option>
                <option>⚛️ React</option>
                <option>🟢 Node.js</option>
                <option>▲ Next.js</option>
                <option>💚 Vue.js</option>
                <option>🅰️ Angular</option>
                <option>🌐 HTML5</option>
                <option>🎨 CSS3</option>
                <option>💨 Tailwind CSS</option>
                <option>🅱️ Bootstrap</option>
                <option>🖥️ PyQt6</option>
                <option>🔥 Firebase</option>
                <option>🗄️ MySQL</option>
                <option>🐘 PostgreSQL</option>
                <option>🍃 MongoDB</option>
                <option>🐬 MariaDB</option>
                <option>🚀 FastAPI</option>
                <option>🌶 Flask</option>
                <option>🎯 Django</option>
                <option>📱 Flutter</option>
                <option>🤖 TensorFlow</option>
                <option>🧠 PyTorch</option>
                <option>👁 OpenCV</option>
                <option>🔗 LangChain</option>
                <option>🤖 OpenAI API</option>
                <option>📊 Pandas</option>
                <option>🔢 NumPy</option>
                <option>📈 Matplotlib</option>
                <option>☁️ AWS</option>
                <option>🔷 Azure</option>
                <option>☁️ Google Cloud</option>
                <option>🐳 Docker</option>
                <option>☸️ Kubernetes</option>
                <option>🌿 Git</option>
                <option>🐙 GitHub</option>
                <option>🐧 Linux</option>
                <option>🛡 Cyber Security</option>
                <option>🎮 Unity</option>
                <option>🎲 Unreal Engine</option>
                <option>🎨 Figma</option>
                <option>🔧 VS Code</option>
                <option>💎 C#</option>
                <option>➕ C++</option>
                <option>🔷 C</option>
                <option>🐘 PHP</option>
                <option>💎 Kotlin</option>
                <option>🍎 Swift</option>
                <option>📡 REST API</option>
                <option>🔌 GraphQL</option>
                <option>⚡ Electron</option>

              </select>

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => {setShowModal(false); setEditMode(false);}}
                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl"
              >
                Cancel
              </button>

              <button className="bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-xl">
                {editMode ? "Update Skill" : "Save Skill"}
              </button>

            </div>

          </div>

        </div>
      )}
      {/* Skills Table */}

      <div className="overflow-hidden rounded-2xl border border-purple-500/20">

        <table className="w-full">

          <thead className="bg-[#181028]">

            <tr>

              <th className="text-left p-4">Icon</th>

              <th className="text-left p-4">Skill</th>

              <th className="text-left p-4">Category</th>

              <th className="text-left p-4">Percentage</th>

              <th className="text-left p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t border-purple-500/10 hover:bg-[#140a25] transition">

              <td className="p-4">🐍</td>

              <td className="p-4">Python</td>

              <td className="p-4">Backend</td>

              <td className="p-4">

                <div className="flex items-center gap-3">

                  <div className="w-28 h-2 bg-[#24143d] rounded-full">

                    <div
                      className="h-2 bg-purple-500 rounded-full"
                      style={{ width: "95%" }}
                    />

                  </div>

                  <span>95%</span>

                </div>

              </td>

              <td className="p-4 flex gap-3">

                <button
                  onClick={() => {
                    setEditMode(true);
                    setShowModal(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaEdit />
                  Edit
                </button>

                <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2">
                  <FaTrash />
                  Delete
                </button>

              </td>

            </tr>

            <tr className="border-t border-purple-500/10 hover:bg-[#140a25] transition">

              <td className="p-4">⚛️</td>

              <td className="p-4">React</td>

              <td className="p-4">Frontend</td>

              <td className="p-4">

                <div className="flex items-center gap-3">

                  <div className="w-28 h-2 bg-[#24143d] rounded-full">

                    <div
                      className="h-2 bg-purple-500 rounded-full"
                      style={{ width: "90%" }}
                    />

                  </div>

                  <span>90%</span>

                </div>

              </td>

              <td className="p-4 flex gap-3">

                <button
                  onClick={() => {
                    setEditMode(true);
                    setShowModal(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaEdit />
                  Edit
                </button>

                <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2">
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

export default SkillsManager;