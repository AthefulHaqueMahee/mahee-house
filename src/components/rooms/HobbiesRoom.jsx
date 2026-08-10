function HobbiesRoom() {
  const hobbies = [
    {
      number: "01",
      label: "EXPLORING",
      title: "Technology",
      description:
        "Exploring new technologies, programming concepts, development tools and emerging ideas in software.",
    },
    {
      number: "02",
      label: "BUILDING",
      title: "Programming",
      description:
        "Experimenting with code, building projects and turning ideas into useful working software.",
    },
    {
      number: "03",
      label: "GROWING",
      title: "Learning",
      description:
        "Continuously learning new concepts and improving technical knowledge and problem-solving skills.",
    },
    {
      number: "04",
      label: "SHARING",
      title: "Teaching",
      description:
        "Enjoying the process of explaining concepts and helping others understand difficult topics simply.",
    },
    {
      number: "05",
      label: "CREATING",
      title: "Creative Design",
      description:
        "Experimenting with layouts, interfaces and visual ideas to create engaging digital experiences.",
    },
    {
      number: "06",
      label: "CHALLENGING",
      title: "Problem Solving",
      description:
        "Enjoying programming challenges, debugging and finding simpler solutions to complex problems.",
    },
  ];

  return (
    <section className="hobbies-room">

      <p className="room-kicker">
        THE HOBBY ROOM
      </p>

      <h1>
        Hobbies & Interests
      </h1>

      <p className="hobbies-intro">
        Beyond academics and software engineering,
        these are the things that keep me curious,
        creative and constantly learning.
      </p>

      <div className="hobbies-grid">

        {hobbies.map((hobby) => (
          <div
            className="hobby-card"
            key={hobby.number}
          >

            <div className="hobby-top">
              <span className="hobby-number">
                {hobby.number}
              </span>

              <span className="hobby-label">
                {hobby.label}
              </span>
            </div>

            <h2>
              {hobby.title}
            </h2>

            <div className="hobby-details">

              <p>
                {hobby.description}
              </p>

              <span className="hobby-explore">
                EXPLORE →
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HobbiesRoom;