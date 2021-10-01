import React,{Component} from 'react';
import Cardlist from './components/Cardlist';
import Searchbox from './components/Searchbox';
import './App.css';


class App extends Component{
  constructor(){
    super()

    this.state ={
      monsters:[],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({
      monsters : users
    }))
  }



  render(){

    const {monsters,searchfield} = this.state

    const filteredmonsters = 
      monsters.filter((monster)=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    



    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
        placeholder="Search Monsters"
        handlechange={(e)=>this.setState({searchfield:e.target.value})}/>
        <Cardlist monsters={filteredmonsters}>
        </Cardlist> 
      </div>
    )
  }
}

export default App;
