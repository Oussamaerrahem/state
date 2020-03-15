import React  from 'react';

import image from './image2.png';
import profile from './Profile.jpg';
import image3 from './image3.png';
import image4 from './image4.jpg';
import './App.css';
class  App extends React.Component {    
  state= {
    name:'',
    image:image,
    description:'',
  }

  render(){ 
  return (
    <div className="App">
      <button onClick={()=>{this.setState({name:"mohamed",image:profile,description:'im aweb designer'})}}>mohamed</button>
      <button onClick={()=>{this.setState({name:"rami", image:image3,description:'im a backend developper'}) } } >rami</button>
      <button onClick={()=>{this.setState({name:"imed", image:image4,description:'im a frontend  developper'}) } } >imed</button>
     
   
    <p>{this.state.name}</p>
    <img className='image' src={this.state.image} />
    <p>{this.state.description}</p>
    </div>
  )
}}


export default App;
