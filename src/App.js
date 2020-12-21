
import './App.css';
import Profile from './Profile/Profile'

function App() {
  const handleName =(vare)=> {
    alert(vare)
  }
  return (
    <div className="App">
      <Profile fullName='Meriem Kacem' bio='believe on yourself' profession='Teacher' fct={handleName}  >
        im a motivational and supportive person  <br/>
        <img src='/steve.jpg'/>

        
         </Profile>
      

    </div>
  );
}

export default App;
