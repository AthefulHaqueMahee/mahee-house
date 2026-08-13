import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Map,
  Sparkles,
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

function Interior({ onBack }) {
  const [room, setRoom] = useState("living");
  const [showMap, setShowMap] = useState(false);

  const rooms = [
    {
      id: "living",
      title: "About Me",
      short: "Living Room",
      icon: User,
      number: "01",
      atmosphere: "warm",
      label: "THE LIVING ROOM",
      description: "Where the story begins.",
      component: <LivingRoom />,
    },
    {
      id: "education",
      title: "Education",
      short: "Study",
      icon: GraduationCap,
      number: "02",
      atmosphere: "study",
      label: "THE STUDY",
      description: "Where knowledge becomes foundation.",
      component: <EducationRoom />,
    },
    {
      id: "skills",
      title: "Skills",
      short: "Workshop",
      icon: Code2,
      number: "03",
      atmosphere: "tech",
      label: "THE WORKSHOP",
      description: "Where ideas become solutions.",
      component: <SkillsRoom />,
    },
    {
      id: "projects",
      title: "Projects",
      short: "Laboratory",
      icon: FolderGit2,
      number: "04",
      atmosphere: "lab",
      label: "THE LABORATORY",
      description: "Where ideas come to life.",
      component: <ProjectsRoom />,
    },
    {
      id: "experience",
      title: "Experience",
      short: "Office",
      icon: Briefcase,
      number: "05",
      atmosphere: "office",
      label: "THE OFFICE",
      description: "Where experience is built.",
      component: <ExperienceRoom />,
    },
    {
      id: "hobbies",
      title: "Hobbies",
      short: "Creative Studio",
      icon: Palette,
      number: "06",
      atmosphere: "creative",
      label: "THE CREATIVE STUDIO",
      description: "Where personality lives.",
      component: <HobbiesRoom />,
    },
    {
      id: "certificates",
      title: "Certificates",
      short: "Gallery",
      icon: Award,
      number: "07",
      atmosphere: "gallery",
      label: "THE GALLERY",
      description: "Milestones worth remembering.",
      component: <CertificatesRoom />,
    },
    {
      id: "contact",
      title: "Contact",
      short: "Communication Room",
      icon: Mail,
      number: "08",
      atmosphere: "contact",
      label: "THE COMMUNICATION ROOM",
      description: "Let's start a conversation.",
      component: <ContactRoom />,
    },
  ];

  const currentRoom =
    rooms.find((item) => item.id === room) || rooms[0];

  const changeRoom = (roomId) => {
    setShowMap(false);
    setRoom(roomId);
  };

  return (
    <main
      className={`interior-page atmosphere-${currentRoom.atmosphere}`}
    >

      {/* =========================================
          AMBIENT BACKGROUND
      ========================================= */}

      <div className="ambient-background">

        <div className="ambient-glow ambient-glow-one" />
        <div className="ambient-glow ambient-glow-two" />

        <div className="ambient-grid" />

      </div>


      {/* =========================================
          HEADER
      ========================================= */}

      <header className="interior-header">

        <div className="interior-title">

          <div className="title-row">

            <span className="title-room-number">
              {currentRoom.number}
            </span>

            <div>

              <p className="house-label">
                MAHEE'S HOUSE
              </p>

              <h1>
                {currentRoom.title}
              </h1>

            </div>

          </div>

          <span className="room-location">
            {currentRoom.label}
          </span>

        </div>


        <div className="interior-actions">

          <button
            className="map-button"
            onClick={() => setShowMap(!showMap)}
          >
            <Map size={18} />

            {showMap ? "Close Map" : "House Map"}
          </button>


          <button
            className="back-home"
            onClick={onBack}
          >
            <ArrowLeft size={18} />

            Back to House
          </button>

        </div>

      </header>


      {/* =========================================
          ROOM DESCRIPTION
      ========================================= */}

      <AnimatePresence mode="wait">

        <motion.div
          key={currentRoom.id}
          className="room-atmosphere-label"
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >

          <Sparkles size={15} />

          <span>
            {currentRoom.description}
          </span>

        </motion.div>

      </AnimatePresence>


      {/* =========================================
          HOUSE MAP
      ========================================= */}

      <AnimatePresence>

        {showMap && (

          <motion.div
            className="house-map"
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <div className="map-heading">

              <div>

                <span>
                  EXPLORE
                </span>

                <h2>
                  MAHEE'S HOUSE
                </h2>

              </div>

              <p>
                Choose a room to explore
              </p>

            </div>


            <div className="map-grid">

              {rooms.map((item) => {

                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.id}
                    className={`map-room ${
                      room === item.id
                        ? "map-room-active"
                        : ""
                    }`}
                    onClick={() =>
                      changeRoom(item.id)
                    }
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >

                    <span className="map-room-number">
                      {item.number}
                    </span>

                    <span className="map-room-icon">
                      <Icon size={22} />
                    </span>

                    <span className="map-room-info">

                      <strong>
                        {item.title}
                      </strong>

                      <small>
                        {item.short}
                      </small>

                    </span>

                    <span className="map-room-arrow">
                      →
                    </span>

                  </motion.button>
                );

              })}

            </div>

          </motion.div>

        )}

      </AnimatePresence>


      {/* =========================================
          MAIN LAYOUT
      ========================================= */}

      <div className="interior-layout">


        {/* SIDEBAR */}

        <aside className="room-menu">

          <div className="menu-title">

            <span>
              EXPLORE
            </span>

            <strong>
              ROOMS
            </strong>

          </div>


          {rooms.map((item) => {

            const Icon = item.icon;

            const active =
              room === item.id;

            return (
              <motion.button
                key={item.id}
                className={`room-button ${
                  active ? "active" : ""
                }`}
                onClick={() =>
                  changeRoom(item.id)
                }
                whileHover={{
                  x: 5,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >

                <span className="room-number">
                  {item.number}
                </span>

                <span className="room-icon">
                  <Icon size={18} />
                </span>

                <span className="room-name">
                  {item.title}
                </span>

                <span className="room-arrow">
                  →
                </span>

              </motion.button>
            );

          })}

        </aside>


        {/* =========================================
            ROOM CONTENT
        ========================================= */}

        <main className="room-area">

          <div className="room-corner room-corner-top" />
          <div className="room-corner room-corner-bottom" />


          <AnimatePresence mode="wait">

            <motion.div
              key={room}
              className="room-content"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >

              {currentRoom.component}

            </motion.div>

          </AnimatePresence>

        </main>

      </div>

    </main>
  );
}

export default Interior;