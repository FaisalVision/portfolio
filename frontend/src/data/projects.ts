export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management System",
    description:
      "A professional desktop application built with Python, PyQt6 and MySQL featuring authentication, inventory management, sales, purchases and reporting.",
    technologies: ["Python", "PyQt6", "MySQL"],
    image: "https://placehold.co/1200x700/111111/8b5cf6?text=Inventory+System",
    github: "",
    demo: "",
  },
];

export default projects;