import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import UsersList from './components/UsersList';
import InitialTableNames from './components/InitialTableNames';

class App extends Component {
  state = {
    users:  [
      {
        "name":{"title":"miss","first":"leah","last":"evans"},
        "location":{"street":"3490 white oak dr","city":"geraldton","state":"western australia","postcode":4973},
        "login":{"username":"whitedog585", "uuid": "642d2081-e748-40f1-92d6-firstValue"},
        "phone":"04-8136-4841",
        "id":{"name":"TFN","value":"460173802"},
        "picture":{"large":"https://randomuser.me/api/portraits/women/40.jpg","medium":"https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail":"https://randomuser.me/api/portraits/thumb/women/40.jpg"},
        "key": "initisaluser11231",
        "registered": {"date" : "04.08.2012"},
        "email": "Ttest@test.com",
        "dob" : {"date" : "1978-03-27T10:13:43Z"},
        "cell" : "0993399323423"  
      } 
    ],
    isOpen: false,
    currentIndex: -1,
    selectedUuid: null
  }

  viewToggleHandler = (i, id) => {
    const currentState = this.state.isOpen;
    this.setState({
      currentIndex : i,
      isOpen : !currentState,
      
    })
    console.log(this.state.currentIndex);
    console.log(this.state.isOpen);
  };

  /* viewToggleHandler = (id) => {
    const currentState = this.state.isOpen;
    
    this.state.users.map((item, j) => {
        if(item.login.uuid === id){
          this.setState({isOpen : !currentState, selectedUuid: id});
          console.log(this.state.isOpen);
          console.log(this.state.selectedUuid);
          
        }
        return id;
      })
    } */
        
  handleSubmit = event => {
    event.preventDefault();
    axios.get(`https://randomuser.me/api/?inc=picture,name,login,id,phone,location,gender,registered,email,cell,dob`)
    .then(resp => {
        const person = resp.data.results[0]; 
        this.setState((prevState, props) => ({
          users: prevState.users.concat(person)}
        ));
        
        console.log(this.state.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    

    return (
      <div className="App jumbotron" >
          <InitialTableNames />
          <UsersList 
              users={this.state.users} 
              viewToggled={(e)=> this.viewToggleHandler(e)} 
              isOpen={this.state.isOpen}              
              currentIndex={this.state.currentIndex}
  />
          
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Add</button>
          </form>
         
      </div>
    );
  }
}

export default App;


/*
<UsersList users={this.state.users} viewToggled={(e)=> this.viewToggleHandler(e)} 
selectedUuid={this.state.selectedUuid} isOpen={this.state.isOpen}

*/ 