import React from "react";
import main from "../../images/main-portrait.jpeg";
const Bio = () => {
  return (
    <section className="bio">
      <img src={main} />
      <p className="intro">
        Brianna Rzeznik is a Masters-level music therapist, currently practicing
        in Austin, Texas.
      </p>
      <p>
        With extensive experience spanning hospitals, schools, and homes,
        Brianna has worked with a diverse clientele, including adults and
        children with Autism and other developmental disabilities, older adults
        with Alzheimer's and Dementia, individuals facing acute psychiatric
        symptoms, and those navigating medical diagnoses or procedures. She also
        runs music therapy groups to support children dealing with challenges
        such as homelessness, parental incarceration, grief and bereavement, and
        parental deportation in schools in and around Austin.
      </p>
      <p>
        Brianna's core belief is that mental and emotional well-being are
        fundamental for every individual, regardless of their circumstances. Her
        approach to therapy is characterized by warmth, acceptance, and
        authenticity, creating a nurturing environment for creativity and skill
        development.
      </p>
      <p>
        In addition to her work as a music therapist, Brianna is also a
        practicing psychotherapist at the Center for Therapy and Healing, a
        telehealth practice based in Boston, Massachusetts. There, she provides
        compassionate guidance to adolescents and adults, empowering them on
        their journey toward enhanced well-being and personal growth.
      </p>
    </section>
  );
};

export default Bio;
