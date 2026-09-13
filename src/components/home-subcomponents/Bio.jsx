import React from "react";
import main from "../../images/main-portrait.jpeg";

const Bio = () => {
  return (
    <section className="bio">
      <img src={main} alt="Brianna Rzeznik portrait" />
      <p className="intro">
        Brianna Rzeznik is a Masters-level music therapist, currently practicing
        in Austin, Texas.
      </p>
      <p>
        With extensive experience spanning hospitals, schools, and homes, and
        outpatient settings, Brianna has worked with a diverse clientele. This
        includes adults and children with Autism and other developmental
        disabilities, including those who present with a Pathological Demand
        Avoidant (PDA) profile of Autism. She also has experience treating
        adults with Alzheimer's and Dementia, individuals facing acute
        psychiatric symptoms, those navigating medical diagnoses or procedures,
        and individuals living with trauma, PTSD, and substance use disorders.
        She runs music therapy groups in elementary schools in Austin for
        children coping with challenges such as homelessness, parental
        incarceration, grief and bereavement, and parental deportation.
      </p>
      <p>
        Brianna's core belief is that mental and emotional well-being are
        fundamental for every individual, regardless of their circumstances. Her
        approach to therapy is characterized by warmth, acceptance, and
        authenticity, creating a nurturing environment for creativity and skill
        development. In addition to her work as a music therapist, Brianna is
        also a practicing psychotherapist at the Center for Therapy and Healing,
        a telehealth practice based in Boston, Massachusetts. There, she
        provides compassionate guidance to adolescents and adults, empowering
        them on their journey toward enhanced well-being and personal growth.
      </p>
    </section>
  );
};

export default Bio;
