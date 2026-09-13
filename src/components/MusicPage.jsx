import React from "react";
import { useNavigate } from "react-router-dom";
import viola from "../images/viola.jpg";

const MusicPage = () => {
  const navigate = useNavigate();

  // Array of YouTube video IDs from your links
  const videoIds = ["v7bjJNAYqXA", "bCJh3C1X4kQ", "9V8UONpxIFk", "nsn3IEWNPu0"];

  return (
    <div className="musicContent">
      <h1>Music Performances</h1>
      <div className="img-text">
        <img src={viola} alt="Brianna playing viola" />
        <p>
          When she isn't providing therapy, Brianna regularly plays music to
          audiences in and around Austin. A classically trained violist with a
          passion for funky fiddling, she seamlessly blends tradition with
          versatility when she plays. With a rich repertoire spanning Bluegrass,
          Folk, Blues, Classical, and Pop, Brianna transcends boundaries with
          her viola, infusing classical finesse with alternative styles.
        </p>
        <br />
        <p>
          Brianna is currently involved in the following musical
          groups/projects:
        </p>
        <ul>
          <li>
            <p>
              Fiddle player for the Austin-based Celtic rock band,{" "}
              <a href="https://example.com">The Yokes</a>
            </p>
          </li>
          <li>
            <p>
              Fiddle player for the Austin-based wedding band{" "}
              <a href="https://example.com">The Pictures</a>
            </p>
          </li>
          <li>
            <p>
              Principle Violist for{" "}
              <a href="https://example.com">
                Millennial Choirs and Orchestras'
              </a>{" "}
              Austin locale
            </p>
          </li>
          <li>
            <p>
              Recommended wedding musician by ATX Elopements{" "}
              <a href="https://example.com">ATX Elopements</a>
            </p>
          </li>
          <li>
            <p>
              Violist for <a href="https://example.com">Siren Strings</a>
            </p>
          </li>
        </ul>
      </div>
      <button onClick={() => navigate("/contact")}> Inquire Here</button>

      {/* Centered, Vertically Stacked Videos */}
      <div className="videoSection">
        <h2>Videos</h2>
        <div className="videoStack">
          {videoIds.map((id, index) => (
            <div className="videoContainer" key={index}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Performance Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
