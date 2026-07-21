import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  FaFilePdf,
  FaUpload,
  FaDownload,
  FaTrash,
} from "react-icons/fa";

const ResumeManager = () => {
  const [resumeName, setResumeName] = useState("No Resume Uploaded");
  const [resumeFile, setResumeFile] = useState("");
    useEffect(() => {
    loadResume();
  }, []);

  const loadResume = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/resume");

      if (res.data.file) {
        setResumeFile(res.data.file);

        const fileName = res.data.file.split("/").pop();

        setResumeName(fileName);
      }

    } catch (error) {
      console.error(error);
    }
  };

  const uploadResume = async (file: File) => {
    try {

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://127.0.0.1:8000/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResumeFile(res.data.file);

      setResumeName(file.name);

      toast.success("Resume Uploaded Successfully");

    } catch (error) {

      console.error(error);

      toast.error("Upload Failed");
    }
  };

  const deleteResume = async () => {
    try {

      await axios.delete("http://127.0.0.1:8000/resume");

      setResumeFile("");

      setResumeName("No Resume Uploaded");

      toast.success("Resume Deleted");

    } catch (error) {

      console.error(error);

      toast.error("Delete Failed");
    }
  };

  return (
    <div className="space-y-8">

      <h2 className="text-4xl font-bold">
        Resume Manager
      </h2>

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* PDF Preview */}

          <div className="w-32 h-32 rounded-3xl bg-[#24143d] flex items-center justify-center border border-purple-500/20">

            <FaFilePdf className="text-red-500 text-6xl" />

          </div>

          {/* Resume Info */}

          <div className="flex-1">

            <h3 className="text-2xl font-semibold">
              Current Resume
            </h3>

            <p className="text-purple-400 mt-3">
              {resumeName}
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Upload your latest resume in PDF format.
            </p>

          </div>

        </div>

        {/* Upload */}

        <div className="mt-10">

          <input
            id="resumeUpload"
            type="file"
            accept=".pdf"
            hidden
            onChange={(e) => {
              if (e.target.files?.length) {
                uploadResume(e.target.files[0]);
              }
            }}
          />

          <div className="flex flex-wrap gap-4">

            <label
              htmlFor="resumeUpload"
              className="cursor-pointer flex items-center gap-3 bg-purple-600 hover:bg-purple-500 transition px-6 py-3 rounded-xl"
            >
              <FaUpload />
              Upload Resume
            </label>

            <button
              onClick={() => {
                if (resumeFile) {
                  window.open(
                    `http://127.0.0.1:8000/${resumeFile}`,
                    "_blank"
                  );
                } else {
                  toast.error("No Resume Uploaded");
                }
              }}
              className="flex items-center gap-3 bg-[#24143d] hover:bg-[#31204d] transition px-6 py-3 rounded-xl"
            >
              <FaDownload />
              Preview Resume
            </button>

            <button
              className="flex items-center gap-3 bg-red-600 hover:bg-red-500 transition px-6 py-3 rounded-xl"
              onClick={deleteResume}
            >
              <FaTrash />
              Delete Resume
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ResumeManager;