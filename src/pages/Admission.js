import React from 'react';

export default function Admission() {
  return (
    <div className="container py-5 my-5" style={{ maxWidth: '900px' }}>
      <h1 className="display-4 text-center" style={{ color: '#064e03', fontWeight: '700', marginBottom: '2.5rem' }}>
        Admission Procedures
      </h1>

      <div
        className="bg-white rounded shadow p-4 p-md-5 border"
        style={{
          borderColor: '#064e03',
          transition: 'box-shadow 0.3s ease',
          boxShadow: '0 0 10px rgba(6, 78, 3, 0.3)',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 78, 3, 0.7)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = '0 0 10px rgba(6, 78, 3, 0.3)')
        }
      >
        <ol
          className="list-decimal ps-4"
          style={{ color: '#000000', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '500' }}
        >
          <li className="mb-4">
            <span style={{ color: '#064e03', fontWeight: '700' }}>
              Obtain the official application form
            </span>{' '}
            from the Registrar’s Office or download it via the DCC Toril online portal.
          </li>
          <li className="mb-4">
            <span style={{ color: '#064e03', fontWeight: '700' }}>
              Prepare and submit the required documents:
            </span>{' '}
            Form 138 (Report Card), PSA Birth Certificate, and Certificate of Good Moral Character.
          </li>
          <li className="mb-4">
            <span style={{ color: '#064e03', fontWeight: '700' }}>
              Take the entrance exam
            </span>{' '}
            administered by DCC Toril’s Guidance Office.
          </li>
          <li className="mb-4">
            <span style={{ color: '#064e03', fontWeight: '700' }}>
              Attend a personal interview
            </span>{' '}
            with the Admissions Office (if required).
          </li>
          <li>
            <span style={{ color: '#064e03', fontWeight: '700' }}>
              Finalize enrollment
            </span>{' '}
            by settling admission and tuition fees at the Cashier’s Office.
          </li>
        </ol>
      </div>
    </div>
  );
}
