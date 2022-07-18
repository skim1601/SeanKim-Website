import "./Education.css";
import { UofT } from "../../../assets";

const Title = () => {
  return(
    <title>
      &#x1F393;&nbsp;&nbsp;EDUCATION
    </title>
  )
}

const Description = () => {
  return(
    <>
      <img src={UofT} alt='main'/><br/>
      <p className = 'description-text'>
        University of Toronto - St. George<br/>
        Bachelor of Applied Science in Computer Engineering
      </p>
      <h2 className = 'year-text'>
        2021 - 2026 (PEY CO-OP)
      </h2>
    </>
  )
}

const Education = () => {
  return (
    <div className = 'school-information'>
      <Title/>
      <Description/>
    </div>
  );
}

export default Education;