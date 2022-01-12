import React from 'react';

import './App.css'
// import Greets from './Components/Greets';
// import Person from './Components/Person';
// import PersonList from './Components/PersonList';
// import Status from './Components/Status';
// import Heading from './Components/Heading';
// import { Oscar } from './Components/Oscar';
// import GreetOptionalProps from './Components/GreetOptionalProps';
// import Button from './Components/Button';
// import ButtonWithPara from './Components/ButtonWithPara'
// import InputBox from './Components/InputBox';
// import Container from './Components/Container';
// import DestructureProps from './Components/DestructureProps';
// import PersonComponent from './Components/PersonComponent';
// import LoggedIn from './Components/Hooks/LoggedIn';
// import User from './Components/Hooks/User';

import Application from './Application';
import Ecommerce from './Ecommerce';

function App() {
  // const personName = {
  //   first_name: "Bruce",
  //   last_name: "Wayne"
  // }
  // const personList = [
  //   { id: 1, first_name: "Barry", last_name: "Allen" },
  //   { id: 2, first_name: "Bruce", last_name: "Wayne" },
  //   { id: 3, first_name: "Arthor", last_name: "Curry" },
  //   { id: 2, first_name: "Diana", last_name: "Princes" },
  // ]

  return (
    <div className="App">
      {/* All Basics */}
      {/* <Greets name="prafull" messageCount={10} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList personList={personList} /> */}
      {/* <Status status='fail' /> */}
      {/* <Heading>Place holder Text</Heading> */}
      {/* <Oscar> */}
      {/* <Heading>Oscar goes to Mee....</Heading> */}
      {/* </Oscar> */}
      {/* <GreetOptionalProps name="prafull" isLoggedIn={true} /> all props */}
      {/* <Button handleClick={() => console.log("welcome:Button Clicked")} isEvent={false} /> simple button click */}
      {/* <Button handleEventClick={(e) => console.log("welcome:button Clicked :Event", e)} isEvent={true} /> */}
      {/* <ButtonWithPara handleClick={(e, id) => console.log("welcome:Button Click", e, id)} /> */}
      {/* <InputBox value='' handleChange={e => console.log(e.target.value)} /> */}
      {/* <Container style={{border:'1ps solid black',padding:'2rem'}}/> */}
      {/* Pro -tips one*/}
      {/* <DestructureProps name="prafull" handleClick={()=>console.log("I am Click")} /> */}
      {/* Pro -tips Two we can set the types out of the file too*/}
      {/* <PersonComponent first="prafull" last="Bhendwade"/> */}
      {/* we can reuse type for code complexicity */}
      {/*Basic Ends Here */}
      {/*Started with Hooks */}

      {/* <LoggedIn/> */}
      {/* <User/> */}
      {/* <Application /> */}

      <Ecommerce />
    </div>
  );
}

export default App;
