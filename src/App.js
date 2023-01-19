import React,{useState,useEffect} from 'react';
import ContactCard from './components/ContactCard';

function App() {
  const [contact,setContact] = useState([])

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
     console.log(data.results)
     setContact(data.results)
    });
  },[])

 
  return (
    <div className="App">
    {contact.map((result,index)=> {
      return(
        <ContactCard
          key = {index}
          avtarUrl = {result.picture.large}
          name = {result.name.first}
          email = {result.email}
          age = {result.dob.age}
     /> 
      )
    })}
     
    </div>
  );
}

export default App;
