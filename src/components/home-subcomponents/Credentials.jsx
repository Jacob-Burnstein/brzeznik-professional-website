import React from "react";

const Credentials = () => {
  const credentials = [
    {
      title:
        "UNIVERSITY OF MASSACHUSETTS: BS IN COMMUNICATION DISORDERS | BMus IN MUSIC",
    },
    {
      title:
        "LESLEY UNIVERSITY: MA IN CLINICAL MENTAL HEALTH COUNSELING: MUSIC THERAPY",
      description2:
        "Training in Lesley's graduate program prepares clinicians to address the emotional, cognitive, physical, and spiritual health of individuals using music as a lens for observation, research, and intervention.",
    },
    {
      title: "BOARD-CERTIFIED MUSIC THERAPIST (MT-BC)",
      description:
        "I am a board-certified music therapist. This certification is issued by the Certification Board for Music Therapists (CBMT), which grants this credential to individuals who meet the requirements developed for this profession. This certification is recognized both nationally and internationally, and allows me to administer music therapy treatment independently and ethically.",
      description2: "",
    },
    {
      title: "PUBLICATION AND ADDITIONAL SPECIALITES",
      description:
        "Rzeznik, Brianna, 'The Use of Violin Family Instruments in Music Therapy with Individuals Experiencing Acute Psychiatric Presentations: A Literature Review' (2022). Expressive Therapies Capstone Theses. 556.",
      description2: "Read Here",
    },
  ];
  return (
    <div className="credentialsContainer">
      {credentials.map((cred, index) => (
        <article key={cred.index} className="credentialCard">
          <i class="fa-solid fa-graduation-cap fa-2x"></i>
          <h3>{cred.title}</h3>
          <p>{cred.description}</p>
          {cred.description2 === "Read Here" ? (
            <a
              className="read-here"
              href="https://digitalcommons.lesley.edu/expressive_theses/556/"
            >
              <p>{cred.description2}</p>
            </a>
          ) : (
            <p> {cred.description2}</p>
          )}
        </article>
      ))}
    </div>
  );
};

export default Credentials;
