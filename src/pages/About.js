import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6" style={{ color: '#000000' }}>
      <h1
        className="text-center mb-10 font-extrabold"
        style={{ fontSize: '3rem', color: '#064e03' }} // dark green heading
      >
        Our Journey
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed"
        style={{ color: '#1a1a1a' }} // very dark gray for text
      >
        <div className="space-y-6">
          <p>
            <strong>Davao Central College, Inc. (DCCI)</strong> was founded in 1948, rising from the aftermath of World War II as the first high school in Toril, then known as <em>Davao Central Institute (DCI)</em>, with just 76 students.
          </p>
          <p>
            Spearheaded by visionary Christian leader <strong>Mr. Salustiano Advincula</strong>, DCI emerged from a desire to give every child a fair chance at education—motivated by the global movement “Each one, teach one” and his own humble beginnings.
          </p>
          <p
            className="italic border-l-4 pl-4"
            style={{
              color: '#064e03',
              borderColor: '#a3d18c', // light green border
            }}
          >
            “It is very difficult for a poor man’s son to get an education!”
          </p>
        </div>

        <div className="space-y-6">
          <p>
            DCI operated from a rented house until 1950, when it moved to a two-hectare property. After surviving two devastating fires—in 1959 and 1991—Mr. Advincula’s unwavering commitment helped rebuild and grow the institution.
          </p>
          <p>
            Government recognition was reestablished in 1965. By 1968, the school was renamed <strong>Davao Central College</strong>, launching its College of Liberal Arts and recognized Evening High School program.
          </p>
          <p>
            In the decades that followed, DCC expanded its academic offerings and facilities while staying true to its values: <strong style={{ color: '#064e03' }}>“Live, Love, Light.”</strong>
          </p>
        </div>
      </div>

      <div
        className="mt-12 max-w-3xl mx-auto space-y-6 text-center text-lg"
        style={{ color: '#1a1a1a' }}
      >
        <p>
          Now in the 21st century, DCC continues to evolve—offering accredited programs, fostering global competitiveness, and committing to excellence in instruction, research, infrastructure, and community engagement.
        </p>
        <p style={{ fontWeight: '700', color: '#064e03' }}>
          DCC is proud to shape morally upright, competent individuals ready to impact the world.
        </p>
      </div>
    </div>
  );
}
