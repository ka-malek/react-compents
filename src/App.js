import FullName from "./Component/proflie/FullName";
import Address from "./Component/proflie/Address";
import ProfilePhoto from "./Component/proflie/ProfilePhoto";
import React from "react";
import './App.css'


const App = () =>(
  <div className="container">
  <>
  <h1 className="title red">Welcome To My Profile</h1>
 <br/>
 <h2>My Fullname:</h2>
 <br/>
 <FullName/>
 <br/>
 <h2>ProfilePhoto</h2>
 <br/>
 <ProfilePhoto/>
 <br/>
<h2>My Address Line:</h2>
<br/>
<Address/>
  </>
  </div>
);

export default App;