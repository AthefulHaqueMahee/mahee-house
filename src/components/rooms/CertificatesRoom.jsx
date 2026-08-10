import { useState } from "react";

function CertificatesRoom() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: "01",
      title: "Certificate Title",
      issuer: "Issuing Organization",
      year: "2026",
      description:
        "Add a short description of what this certificate represents.",
      file: "/certificate-1.pdf",
    },

    {
      id: "02",
      title: "Certificate Title",
      issuer: "Issuing Organization",
      year: "2025",
      description:
        "Add a short description of what this certificate represents.",
      file: "/certificate-2.pdf",
    },

    {
      id: "03",
      title: "Certificate Title",
      issuer: "Issuing Organization",
      year: "2025",
      description:
        "Add a short description of what this certificate represents.",
      file: "/certificate-3.pdf",
    },

    {
      id: "04",
      title: "Certificate Title",
      issuer: "Issuing Organization",
      year: "2024",
      description:
        "Add a short description of what this certificate represents.",
      file: "/certificate-4.pdf",
    },
  ];

  return (
    <section className="certificate-vault">

      {/* HEADER */}

      <div className="vault-header">

        <div>
          <p className="room-kicker">
            THE ACHIEVEMENT VAULT
          </p>

          <h1>
            Certificates
          </h1>

          <p className="vault-subtitle">
            Proof of learning, curiosity and continuous growth.
          </p>
        </div>

        <div className="vault-counter">
          <span>{certificates.length}</span>
          <small>ACHIEVEMENTS</small>
        </div>

      </div>


      {/* VAULT */}

      <div className="certificate-vault-grid">

        {certificates.map((certificate) => (

          <article
            className="certificate-piece"
            key={certificate.id}
            onClick={() =>
              setSelectedCertificate(certificate)
            }
          >

            <div className="certificate-number">
              {certificate.id}
            </div>

            <div className="certificate-shine" />

            <div className="certificate-content">

              <span className="certificate-year">
                {certificate.year}
              </span>

              <div className="certificate-seal">
                ✦
              </div>

              <h2>
                {certificate.title}
              </h2>

              <p>
                {certificate.issuer}
              </p>

              <span className="certificate-open">
                OPEN CERTIFICATE →
              </span>

            </div>

          </article>

        ))}

      </div>


      {/* BOTTOM MESSAGE */}

      <div className="vault-footer">
        <span className="vault-line" />

        <p>
          EVERY CERTIFICATE REPRESENTS A STEP FORWARD.
        </p>

        <span className="vault-line" />
      </div>


      {/* MODAL */}

      {selectedCertificate && (

        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>

            <div className="modal-certificate">

              <span>
                {selectedCertificate.year}
              </span>

              <div className="modal-seal">
                ✦
              </div>

              <p>
                CERTIFICATE OF ACHIEVEMENT
              </p>

              <h2>
                {selectedCertificate.title}
              </h2>

              <div className="modal-divider" />

              <h3>
                {selectedCertificate.issuer}
              </h3>

              <p className="modal-description">
                {selectedCertificate.description}
              </p>

            </div>

            <a
              href={selectedCertificate.file}
              target="_blank"
              rel="noreferrer"
              className="certificate-view-button"
            >
              VIEW ORIGINAL CERTIFICATE →
            </a>

          </div>

        </div>

      )}

    </section>
  );
}

export default CertificatesRoom;