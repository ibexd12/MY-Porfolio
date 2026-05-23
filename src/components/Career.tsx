import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Hospital Management System — Air University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a full-stack Hospital Management System using HTML, CSS, and
              Python. Implemented modules for patient registration, doctor
              appointment scheduling, and pharmacy/medicine management with SQL
              database integration.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Desktop App Developer</h4>
                <h5>Inventory Management System — Air University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a desktop-based Inventory & Store Management System
              using Python. Enabled real-time stock tracking, product management,
              and reporting features through an intuitive desktop interface.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile App Developer</h4>
                <h5>SwiftShare — Final Year Project</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building SwiftShare, a peer-to-peer video streaming mobile app
              using Flutter. Features include real-time P2P streaming, live
              rooms, a shorts feed, in-app chat, and user authentication &
              profiles.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;