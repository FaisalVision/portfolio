import { FaSave, FaImage } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const HomeManager = () => {
  const [imageName, setImageName] = useState("No image selected");
  const [previewImage, setPreviewImage] = useState("");
  const [heroName, setHeroName] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");

  const [cvButton, setCvButton] = useState("");
  const [contactButton, setContactButton] = useState("");
  const [projectsCount, setProjectsCount] = useState("");
  const [skillsCount, setSkillsCount] = useState("");
  const [certificatesCount, setCertificatesCount] = useState("");
  const [experienceCount, setExperienceCount] = useState("");
  const [availableForWork, setAvailableForWork] = useState(true);
  const [badgeText, setBadgeText] = useState("");

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [typingTexts, setTypingTexts] = useState([
  { id: 1, text: "" },
  { id: 2, text: "" },
  { id: 3, text: "" },
  { id: 4, text: "" },
]);
      useEffect(() => {
      loadHomeData();
      loadTypingTexts();
    }, []);

    const loadHomeData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/home");

        const data = res.data.data;

        setHeroName(data.hero_name);
        setProfession(data.profession);
        setDescription(data.short_description);

        setCvButton(data.cv_button_text);
        setContactButton(data.contact_button_text);

        setGithub(data.github_url);
        setLinkedin(data.linkedin_url);
        setInstagram(data.instagram_url);
        setFacebook(data.facebook_url);
        setProjectsCount(data.projects_count);
        setSkillsCount(data.skills_count);
        setCertificatesCount(data.certificates_count);
        setExperienceCount(data.experience_count);
        setAvailableForWork(data.available_for_work);
        setBadgeText(data.badge_text);
        setPreviewImage(`http://127.0.0.1:8000/${data.profile_image}`);

      } catch (error) {
        console.error(error);
      }
    };
    const loadTypingTexts = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/home/typing-texts"
        );

        setTypingTexts(res.data.data);

      } catch (error) {
        console.error(error);
      }
    };
    const uploadImage = async (file: File) => {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post(
          "http://127.0.0.1:8000/home/upload-image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setImageName(res.data.image);
        setPreviewImage(`http://127.0.0.1:8000/${res.data.image}`);
        toast.success("Image Uploaded Successfully");

      } catch (error) {
        console.error(error);
        toast.error("Image Upload Failed");
      }
    };
    const saveHomeData = async () => {
    try {
      await axios.put("http://127.0.0.1:8000/home", {
        hero_name: heroName,
        profession: profession,
        typing_text: "",
        short_description: description,
        cv_button_text: cvButton,
        contact_button_text: contactButton,
        github_url: github,
        linkedin_url: linkedin,
        instagram_url: instagram,
        facebook_url: facebook,
        projects_count: projectsCount,
        skills_count: skillsCount,
        certificates_count: certificatesCount,
        experience_count: experienceCount,
        available_for_work: availableForWork,
        badge_text: badgeText,
      });
      await axios.put("http://127.0.0.1:8000/home/typing-texts", {
        items: typingTexts,
      });

      toast.success("Home Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Update");
    }
  };
  return (

    <div className="space-y-8">

      <h2 className="text-4xl font-bold">
        Home Section
      </h2>

      {/* Hero Information */}
      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8">

        <h3 className="text-2xl font-semibold mb-6">
          Hero Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
              className="w-full bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Profession
            </label>

            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
            />
          </div>

        </div>

        <div className="mt-6">

          <label className="block mb-2 text-gray-300">
            Hero Description
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none resize-none focus:border-purple-500"
          />

        </div>

      </div>

      {/* Animated Titles */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8">

        <h3 className="text-2xl font-semibold mb-6">
          Animated Titles
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {typingTexts.map((item, index) => (
            <input
              key={item.id}
              type="text"
              value={item.text}
              onChange={(e) => {
                const updated = [...typingTexts];
                updated[index].text = e.target.value;
                setTypingTexts(updated);
              }}
              className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4 outline-none focus:border-purple-500"
            />
          ))}

        </div>
              {/* Hero Image */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8">

        <h3 className="text-2xl font-semibold mb-6">
          Hero Image
        </h3>

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <div className="w-48 h-48 rounded-3xl overflow-hidden bg-[#24143d] border-2 border-dashed border-purple-500/30 flex items-center justify-center">

            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-center px-4">
                Image Preview
              </span>
            )}

          </div>

          <div className="flex-1">
            <input
              type="file"
                onChange={(e) => {
                 if (e.target.files?.length) {
                   uploadImage(e.target.files[0]);
                 }
             }}
             className="w-full bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
            />

            <p className="text-purple-400 mt-3 flex items-center gap-2">
            <FaImage />
            {imageName}
            </p>

            <p className="text-gray-400 text-sm mt-3">
              Recommended Size: 800 × 800 PNG
            </p>

          </div>

        </div>

      </div>



      {/* Hero Buttons */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8">

        <h3 className="text-2xl font-semibold mb-6">
          Hero Buttons
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2">
              View Projects Button
            </label>

            <input
              placeholder="View Projects"
              className="w-full bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
            />

          </div>

          <div>

            <label className="block mb-2">
              Hire Me Button
            </label>

            <input
              value={contactButton}
              onChange={(e) => setContactButton(e.target.value)}
              className="w-full bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
            />

          </div>

          <div className="md:col-span-2">

            <label className="block mb-2">
              Download CV Button
            </label>

            <input
              value={cvButton}
              onChange={(e) => setCvButton(e.target.value)}
              className="w-full bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
            />

          </div>

        </div>

      </div>


      {/* Hero Stats */}

      <div className="bg-[#181028] border border-purple-500/20 rounded-2xl p-8">

        <h3 className="text-2xl font-semibold mb-6">
          Hero Statistics
        </h3>

        <div className="grid md:grid-cols-4 gap-6">

          <input
            value={projectsCount}
            onChange={(e) => setProjectsCount(e.target.value)}
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
          />

          <input
            value={skillsCount}
            onChange={(e) => setSkillsCount(e.target.value)}
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
          />

          <input
            value={certificatesCount}
            onChange={(e) => setCertificatesCount(e.target.value)}
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
          />

          <input
            value={experienceCount}
            onChange={(e) => setExperienceCount(e.target.value)}
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
          />

        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <input
            value={badgeText}
            onChange={(e) => setBadgeText(e.target.value)}
            placeholder="Badge Text"
            className="bg-[#24143d] border border-purple-500/20 rounded-xl p-4"
          />

          <label className="flex items-center gap-3 bg-[#24143d] border border-purple-500/20 rounded-xl p-4">
            <input
              type="checkbox"
              checked={availableForWork}
              onChange={(e) => setAvailableForWork(e.target.checked)}
            />
            Available For Work
          </label>

        </div>
        <div className="flex justify-end mt-10 pb-10">

        <button
            onClick={saveHomeData}
            className="flex items-center gap-3 bg-gradient-to-r
            from-purple-600
            to-fuchsia-500
            hover:scale-105
            transition
            px-8
            py-4
            rounded-xl
            font-semibold
            shadow-lg shadow-purple-600/30"
        >

            <FaSave />

            Save Changes

        </button>

        </div>

      </div>

      </div>

    </div>
  );
};

export default HomeManager;