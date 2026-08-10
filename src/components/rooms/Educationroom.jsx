function EducationRoom() {
  const education = [
    {
      number: "01",
      type: "BACHELOR'S DEGREE",
      period: "CURRENT",
      title: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      description:
        "Currently pursuing a Bachelor of Science in Software Engineering, developing a strong foundation in programming, software engineering, algorithms, databases, web development and computer science.",
      details: [
        "Software Engineering",
        "Programming",
        "Algorithms",
        "Databases",
      ],
    },

    {
      number: "02",
      type: "HIGHER SECONDARY",
      period: "2022",
      title: "Higher Secondary Certificate (HSC)",
      institution: "Notre Dame College, Dhaka",
      description:
        "Completed Higher Secondary Certificate in 2022 with outstanding academic performance under the Dhaka Education Board.",
      details: [
        "GPA 5.00",
        "Golden GPA",
        "Dhaka Board",
        "Completed 2022",
      ],
    },

    {
      number: "03",
      type: "SECONDARY",
      period: "2020",
      title: "Secondary School Certificate (SSC)",
      institution: "St. Gregory's High School & College, Dhaka",
      description:
        "Completed Secondary School Certificate in 2020 with GPA 5.00 under the Dhaka Education Board.",
      details: [
        "GPA 5.00",
        "Dhaka Board",
        "Completed 2020",
      ],
    },
  ];

  return (
    <section className="education-room">

      <p className="room-kicker">
        THE STUDY
      </p>

      <h1>
        Education
      </h1>

      <p className="education-intro">
        The academic journey that built my foundation
        and continues to shape my path in software engineering.
      </p>

      <div className="education-timeline">

        {education.map((item) => (
          <div
            className="education-item"
            key={item.number}
          >

            {/* Number */}
            <div className="education-number">
              {item.number}
            </div>

            {/* Card */}
            <div className="education-card">

              <div className="education-top">

                <span className="education-type">
                  {item.type}
                </span>

                <span className="education-period">
                  {item.period}
                </span>

              </div>

              <h2>
                {item.title}
              </h2>

              <h3>
                {item.institution}
              </h3>

              {/* Hidden details */}
              <div className="education-details">

                <p>
                  {item.description}
                </p>

                <div className="education-tags">

                  {item.details.map((detail) => (
                    <span key={detail}>
                      {detail}
                    </span>
                  ))}

                </div>

              </div>

              <div className="education-explore">
                VIEW DETAILS →
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default EducationRoom;