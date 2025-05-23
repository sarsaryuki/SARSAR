import React from 'react';

export default function Academic() {
  const programs = [
    { title: 'College of Information Technology Education (ITE)' },
    { title: 'College of Criminal Justice Education (CSJE)' },
    { title: 'College of Business Administration (BSBA)' },
    { title: 'College of Hospitality Management Education (HME)' },
    { title: 'College of Liberal Education and Arts (CELA)' },
  ];

  return (
    <div className="container py-12 px-3" style={{ maxWidth: '1100px' }}>
      <h1
        className="text-center mb-12"
        style={{
          fontSize: '2.75rem',
          fontWeight: '700',
          color: '#064e03', // dark green
        }}
      >
        Academic Programs
      </h1>

      <div
        className="d-grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          display: 'grid',
        }}
      >
        {programs.map((program, index) => (
          <div
            key={index}
            className="rounded shadow p-5 text-center"
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #064e03',
              color: '#000000',
              fontWeight: '600',
              fontSize: '1.15rem',
              cursor: 'default',
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 78, 3, 0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {program.title}
          </div>
        ))}
      </div>
    </div>
  );
}
