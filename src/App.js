import logo from './logo.svg';
import './App.css';
import Name from './Profile/ProfileComponent/FullName';
import Bio from './Profile/ProfileComponent/Bio';
import Prof from './Profile/ProfileComponent/Profession';

function App() {
  
  return (
    <div className="App">
      
      <Name name="Yassine Mezghani">
         
      </Name>
    <hr/>
      <Bio name="dev web">
       <div>
         <img src="./avatar.png"/>
       </div>
      </Bio>
      <hr/>
      <Prof name="ingenieur informatique"></Prof>
      
     
      
    </div>
  );
}

export default App;
