import { motion } from "framer-motion";
import { certificates } from "../data/certificates";

const Certificates = () => {
  return (
    <section
        id="certificates"
        className="min-h-screen bg-[#0A0A0A] text-white py-24"
    >
        <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-5xl font-bold text-center mb-16">
            My <span className="text-purple-500">Certificates</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((certificate) => (
                <motion.div
                    key={certificate.id}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl border border-purple-500/20 bg-[#111] overflow-hidden hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.20)]"
                >

                    <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-56 object-cover"
                    />

                    <div className="p-6">
                        <h3 className="text-2xl font-bold">
                        {certificate.title}
                        </h3>

                        <p className="text-purple-400 mt-2">
                        {certificate.organization}
                        </p>

                        <p className="text-gray-400 mt-2">
                        📅 {certificate.date}
                        </p>

                        {certificate.credentialId && (
                        <p className="text-sm text-gray-500 mt-2">
                            ID: {certificate.credentialId}
                        </p>
                        )}

                        <div className="mt-6">
                        <a
                            href={certificate.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
                        >
                            View Credential
                        </a>
                        </div>
                    </div>

                </motion.div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default Certificates;