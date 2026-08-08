import { useState } from "react";
import {
  User,
  GraduationCap,
  Code2,
  Briefcase,
  FolderGit2,
  Palette,
  Award,
  Mail,
  ArrowLeft,
} from "lucide-react";

import LivingRoom from "../components/rooms/LivingRoom";
import EducationRoom from "../components/rooms/EducationRoom";
import SkillsRoom from "../components/rooms/SkillsRoom";
import ProjectsRoom from "../components/rooms/ProjectsRoom";
import ExperienceRoom from "../components/rooms/ExperienceRoom";
import HobbiesRoom from "../components/rooms/HobbiesRoom";
import CertificatesRoom from "../components/rooms/CertificatesRoom";
import ContactRoom from "../components/rooms/ContactRoom";

import "./Interior.css";

function Interior() {
  const [room, setRoom] = useState("living");

  const rooms = [
    {
      id: "living",
      title: "About Me",
      icon: User,
      component: <LivingRoom />,
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      component: <EducationRoom />,
    },
    {
      id: "skills",
      title: "Skills",
      icon: Code2,
      component: <SkillsRoom />,
    },
    {
      id: "projects",
      title: "Projects",
      icon: FolderGit2,
      component: <ProjectsRoom />,
    },
    {
      id: "experience",
      title: "Experience",
      icon: Briefcase,
      component: <ExperienceRoom />,
    },
    {
      id: "hobbies",
      title: "Hobbies",
      icon: Palette,
      component: <HobbiesRoom />,
    },
    {
      id: "certificates",
      title: "Certificates",
      icon: Award,
      component: <CertificatesRoom />,
    },
    {
      id: "contact",
      title: "Contact",
      icon: Mail,
      component: <ContactRoom />,
    },
  ];

  const currentRoom = rooms.find((item) => item.id === room);

  return (
    <div className="interior">

      <header className="interior-header">
        <div>
          <p className="house-label">MAHEE'S HOUSE</p>
          <h1>{currentRoom.title}</h1>
        </div>

        <button
          className="back-home"
          onClick={() => setRoom("living")}
        >
          <ArrowLeft size={18} />
          Home
        </button>
      </header>

      <div className="interior-layout">

        <aside className="room-menu">

          <p className="menu-title">EXPLORE THE HOUSE</p>

          {rooms.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`room-button ${
                  room === item.id ? "active" : ""
                }`}
                onClick={() => setRoom(item.id)}
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </button>
            );
          })}

        </aside>

        <main className="room-area">
          {currentRoom.component}
        </main>

      </div>

    </div>
  );
}

export default Interior;