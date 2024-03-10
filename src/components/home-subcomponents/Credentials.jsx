import React from "react";

const Credentials = () => {
  const credentials = [
    {
      title: "University of Massachusetts Amherst",
      description: "BS in Communication Disorders",
      description2: "BMus In Music",
    },
    {
      title: "Lesley University",
      description: "MA in Clinical Mental Health Counseling: Music Therapy",
      description2:
        "Training in Lesley's graduate program prepares clinicians to address the emotional, cognitive, physical, and spiritual health of individuals using music as a lens for observation, research, and intervention.",
    },
    {
      title: "Board-Certified Music Therapist (MT-BC)",
      description:
        "I am a board-certified music therapist. This certification is issued by the Certification Board for Music Therapists (CBMT), which grants this credential to individuals who meet the requirements developed for this profession. This certification is recognized both nationally and internationally, and allows me to administer music therapy treatment independently and ethically.",
    },
    {
      title: "Publication and Additional Specialties",
      description:
        "Rzeznik, Brianna, 'The Use of Violin Family Instruments in Music Therapy with Individuals Experiencing Acute Psychiatric Presentations: A Literature Review' (2022). Expressive Therapies Capstone Theses. 556.",
      description2: "https://digitalcommons.lesley.edu/expressive_theses/556",
    },
  ];
  return (
    <div className="credentialsContainer">
      {credentials.map((cred, index) => (
        <article key={cred.index} className="credentialCard">
          <h3>{cred.title}</h3>
          <p>{cred.description}</p>
          {cred.description2 && <>{cred.description2}</>}
        </article>
      ))}
    </div>
  );
};

export default Credentials;
