import React from "react";

const Credentials = () => {
  const credentials = [
    {
      title:
        "UNIVERSITY OF MASSACHUSETTS: BS IN COMMUNICATION DISORDERS | BMus IN MUSIC",
      description:
        "Acquiring both a bachelor's degree in music and a bachelor's degree in communication disorders provides a unique blend of skills, including proficiency in music theory and proficiency on multiple instruments, alongside expertise in speech, language, and hearing disorders assessment and intervention.",
    },
    {
      title:
        "LESLEY UNIVERSITY: MA IN CLINICAL MENTAL HEALTH COUNSELING: MUSIC THERAPY",
      description:
        "Training in Lesley's graduate program prepares clinicians to address the emotional, cognitive, physical, and spiritual health of individuals using music as a lens for observation, research, and intervention.",
    },
    {
      title: "BOARD-CERTIFIED MUSIC THERAPIST (MT-BC)",
      description:
        "I am a board-certified music therapist. This certification is issued by the Certification Board for Music Therapists (CBMT), which grants this credential to individuals who meet the requirements developed for this profession. This certification is recognized both nationally and internationally, and allows me to administer music therapy treatment independently and ethically.",
    },
    {
      title: "PUBLICATION & MEDIA",
      publications: [
        {
          preText: "Rzeznik, Brianna, '",
          linkText:
            "The Use of Violin Family Instruments in Music Therapy with Individuals Experiencing Acute Psychiatric Presentations: A Literature Review' (2022)",
          postText: ". Expressive Therapies Capstone Theses. 556.",
          url: "https://digitalcommons.lesley.edu/expressive_theses/556/",
        },
        {
          preText: "Article: ",
          linkText:
            "Music and the Brain: Humans are Uniquely Attuned to the Healing Power of Song",
          postText: "",
          url: "https://stringsmagazine.com/music-and-the-brain-humans-are-uniquely-attuned-to-the-healing-power-of-song/",
        },
      ],
    },
    {
      title: "ADDITIONAL SPECIALTIES",
      specialties: [
        "Recovery from Substance Abuse Disorder",
        "Autism Spectrum Disorder (familiarity & experience treating children with a Pathological Demand Avoidant [PDA] profile)",
        "Dialectical Behavior Therapy (DBT) methods and interventions",
        "Bilateral Stimulation (Tapping)",
        "Adaptive violin and viola lessons",
      ],
    },
  ];

  return (
    <div className="credentialsContainer">
      {credentials.map((cred, index) => (
        <article key={index} className="credentialCard">
          <i
            className="fa-solid fa-graduation-cap fa-2x"
            aria-hidden="true"
          ></i>
          <h3>{cred.title}</h3>

          {cred.description && <p>{cred.description}</p>}

          {/* Embedded Publication Links in Paragraphs */}
          {cred.publications &&
            cred.publications.map((pub, pubIndex) => (
              <p key={pubIndex}>
                {pub.preText}
                <a
                  className="read-here"
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.linkText}
                </a>
                {pub.postText}
              </p>
            ))}

          {/* Bulleted list for specialties */}
          {cred.specialties && (
            <ul>
              {cred.specialties.map((item, itemIndex) => (
                <li className="specialtiesList" key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
};

export default Credentials;
