import React from 'react';
import logo from '../logo.png';

export default function Home() {
  return (
    <>
      {/* Header with centered Logo */}
      <header className="py-5 d-flex justify-content-center bg-light">
        <img src={logo} alt="Davao Central College Logo" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
      </header>

      {/* Main Content */}
      <main className="container py-5">
        {/* Vision */}
        <section className="mb-5 text-center">
          <h2 className="fw-bold mb-3">Vision</h2>
          <p className="text-secondary fs-5">
            Empowered individuals imbued with Christian ideals for service.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-5 text-center">
          <h2 className="fw-bold mb-3">Mission</h2>
          <div className="mx-auto text-start text-secondary fs-5" style={{ maxWidth: '600px' }}>
            <ul className="list-unstyled">
              <li>• Provide integral formation of students</li>
              <li>• Develop God-loving and community service-oriented individuals</li>
              <li>• Promote competence through quality instruction and research for nation building</li>
            </ul>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-5 text-center">
          <h2 className="fw-bold mb-3">Goals</h2>
          <div className="mx-auto text-start text-secondary fs-5" style={{ maxWidth: '600px' }}>
            <ul className="list-unstyled">
              <li>• To produce graduates who are morally upright, intellectually competent, and socially responsible.</li>
              <li>• To continuously improve academic programs to meet global standards.</li>
              <li>• To foster community partnerships and outreach programs that promote sustainable development.</li>
            </ul>
          </div>
        </section>

        {/* Core Values */}
        <section className="text-center">
          <h2 className="fw-bold mb-3">Core Values</h2>
          <div className="mx-auto text-start text-secondary fs-5" style={{ maxWidth: '600px' }}>
            <ul className="list-unstyled">
              <li>• <strong>Faith</strong> — Commitment to Christian beliefs and values.</li>
              <li>• <strong>Excellence</strong> — Pursuit of the highest standards in education.</li>
              <li>• <strong>Integrity</strong> — Upholding honesty and moral principles.</li>
              <li>• <strong>Service</strong> — Dedication to community and nation.</li>
              <li>• <strong>Stewardship</strong> — Responsible management of resources and environment.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
