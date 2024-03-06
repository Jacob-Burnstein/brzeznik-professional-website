import React from "react";
import { useNavigate } from "react-router-dom";
import viola from "../images/viola.jpg";

const MusicPage = () => {
  const navigate = useNavigate();
  return (
    <div className="musicContent">
      <h1>Lessons & Performances</h1>
      <div className="img-text">
        <img src={viola} />
        <p>
          A classically trained violist with a passion for funky fiddling,
          Brianna seamlessly blends tradition with versatility when she plays.
          From symphony orchestras and intimate chamber groups to electrifying
          band tours and soulful solo recitals, she exudes confidence and
          artistry across diverse settings. With a rich repertoire spanning
          Bluegrass, Funk, Blues, Country, and Pop, Brianna transcends
          boundaries with her viola, infusing classical finesse with the raw
          energy of improvisation and alternative styles.
        </p>
        <p>
          Brianna also brings her expertise to the realm of teaching, offering
          tailored lessons on violin, viola, guitar, piano, and voice for
          students of all ages and abilities. With a compassionate approach, she
          specializes in adaptive instruction, catering to the unique needs of
          neurodivergent individuals and those with physical disabilities,
          fostering an inclusive and supportive learning environment.
        </p>
        <p>
          Brianna is available for hire for concerts, weddings, private events,
          session work, and music lessons.
        </p>
      </div>
      <button onClick={() => navigate("/contact")}> Inquire Here</button>
    </div>
  );
};

export default MusicPage;
