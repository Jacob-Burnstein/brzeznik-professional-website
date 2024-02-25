import React from "react";
import ListCard from "./ListCard";

const List = () => {
  const namesAndDescriptions = [
    {
      name: "Physical Disabilites",
      description:
        "Utilizing music therapy techniques, individuals with physical disabilities can benefit from improved gross and fine motor skills, enhanced coordination, increased grip strength, and better ability to cross the midline. By incorporating instrument play and movement to music, sessions can facilitate gait training and elevate overall physical capabilities. Moreover, integrating physical tasks and exercises with music transforms routine activities into enjoyable experiences, fostering engagement and motivation.",
    },
    {
      name: "Intellectual/Developmental Disabilities",
      description:
        "Music therapy is a valuable tool for individuals with intellectual and developmental disabilities, offering opportunities for expressive language development, sustained attention, cognitive growth, and enhanced social engagement. The structured nature of musical activities aids in the memorization of task sequences, important rules, and acquisition of new skills. Within group settings, music provides a safe and structured platform for socialization, fostering meaningful connections and interactions among peers.",
    },
    {
      name: "Mental Health",
      description:
        "Music therapy is a versatile approach to promoting mental health and well-being across various care settings, including inpatient and outpatient environments. Music serves as a powerful medium for individuals to express their experiences, emotions, and thoughts, both verbally and non-verbally. It fosters healthy relationships, facilitates communication, and aids in reconnecting individuals with their bodies. Moreover, music therapy can play a vital role in gender-affirming care and mitigating feelings of isolation, anxiety, depression, and fear. Integrating music therapy with psychotherapeutic techniques enhances treatment outcomes; for instance, within dialectical behavior therapy (DBT), music interventions effectively support distress tolerance and emotional regulation skills development.",
    },
    {
      name: "Memory Care",
      description:
        "Music therapy is a valuable approach for individuals with dementia, Alzheimer's, and other neurodegenerative conditions, aimed at supporting memory care and overall wellbeing. Through music, individuals can retain expressive language abilities and experience sensory enrichment. Utilizing familiar songs aids in orientation to person, place, and time, while incorporating musical instruments encourages movement and facilitates neurorehabilitation. The structured nature of music provides a calming influence, effectively reducing stress, anxiety, depression, and agitation commonly associated with these conditions.",
    },
  ];

  return (
    <div className="listSection">
      <h2>How can music therapy help with different challenges?</h2>
      {namesAndDescriptions.map(({ name, description }, index) => (
        <ListCard key={index} name={name} description={description} />
      ))}
    </div>
  );
};

export default List;
