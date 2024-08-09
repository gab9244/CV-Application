import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Curriculon = () => {
  const { inputValues } = useContext(UserContext);
  const { savedValues } = useContext(UserContext);
  return (
    <>
      <div id="curriculo">
        <section id="leftPart">
          <div id="personInfo" className="info">
            <h1 id="userName">{inputValues?.name}</h1>
            <ul>
              <li id="aboutBox">{inputValues?.about}</li>
            </ul>
          </div>
          <div id="experience" className="info">
            <h3>Experience</h3>
            <ul>
              <li>
                <h2>{inputValues?.possition}</h2>
                <b>{inputValues?.companyName}</b>
              </li>
              <li>{inputValues?.responsabilities}</li>
              <li>{inputValues?.started}</li>
              <li>{inputValues?.ending}</li>
            </ul>

            {savedValues.work.map((info, index) => (
              <ul key={index} className="workInfoSection">
                <li>
                  <h2>{info?.possition}</h2>
                  <b>{info?.companyName}</b>
                </li>
                <li>{info?.responsabilities}</li>
                <li>{info?.started}</li>
                <li>{info?.ending}</li>
              </ul>
            ))}
          </div>
        </section>

        <section id="rightPart">
          <div className="info" id="links">
            <h3>Links</h3>
            <ul>
              <li>{inputValues?.phone}</li>
              <li>{inputValues?.address}</li>
              <li>{inputValues?.email}</li>
            </ul>
          </div>
          <div className="info" id="education">
            <h3>Education</h3>
            <ul>
              <li>{inputValues?.schoolName}</li>
              <li>{inputValues?.studied}</li>
              <li>{inputValues?.dateStudy}</li>
            </ul>
            {savedValues.education.map((info, index) => (
              <ul key={index} className="workInfoSection">
                <li>{info?.schoolName}</li>
                <li>{info?.studied}</li>
                <li>{info?.dateStudy}</li>
              </ul>
            ))}
          </div>
          <div className="info" id="languages">
            <h3>Languages</h3>
            <ul>
              <li>{inputValues?.language}</li>
              <li>{inputValues?.Lselector}</li>
            </ul>
            {savedValues.language.map((info, index) => (
              <ul key={index} className="workInfoSection">
                <li>{info?.language}</li>
                <li>{info?.Lselector}</li>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
