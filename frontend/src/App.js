import React from "react";
import SearchSpeaker from "./SearchSpeaker";
import { BasicHook } from "./Hooks";

//child component
function SpeakerProfile(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>Position: {props.jobTitle}</p>
      <p>Company: {props.company}</p>
    </>
  );
}

//Parent component
function App() {
  return (
    <>
      <h1>Speaker Profile</h1>
      //Child component with attributes name, jobTitle and company inside parent
      component
      <SpeakerProfile
        name="Juliet Runolf"
        jobTitle="Director, Marketing"
        company="Abernathy Group"
      />
      <div style={{ backgroundColor: "white", margin: 20, color: "blue" }}>
        <h1>...</h1>
        ... . .
        <SearchSpeaker />
      </div>
      <div style={{ color: "green" }}>
        <BasicHook />
      </div>
    </>
  );
}

export default App;
