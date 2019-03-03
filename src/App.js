import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Searchform from './components/SeachForm';
import UsersList from './components/User/UsersList';
import InitialTableNames from './components/InitialTableNames';
import Chart from './components/Chart/Chart';
import ModalForm from './components/Chart/Modal';


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
        "cell" : "0993399323423",
        "gender": "female"
      } 
    ],
    currentIndex: -1,
    selectedUuid: null,
    isOpenAll: [false],
    search: '',
    countMale: 0,
    countFemale: 0,
    show: false,
    plusButtonClicked: false
  }

  showModal = () => {
    this.countGender();
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  viewToggleHandler = (i) => {
    const nextIsOpenAll = this.state.isOpenAll.map((element, j) => {
      return j === i ? !element : false;
    });
    this.setState({
      currentIndex : i,
      isOpenAll: nextIsOpenAll,
      plusButtonClicked: !this.state.plusButtonClicked
    })
  };

        
  handleSubmit = event => {
    event.preventDefault();
    axios.get(`https://randomuser.me/api/?inc=picture,name,login,id,phone,location,gender,registered,email,cell,dob`)
    .then(resp => {
        const person = resp.data.results[0]; 
        this.setState((prevState, props) => ({
          users: prevState.users.concat(person),
          isOpenAll: prevState.isOpenAll.concat(false)
        }
        ));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  countGender = () => {
    let males = 0;
    let females = 0;
    this.state.users.forEach(index => {
      if(index.gender === "male"){
        males++;
      } else if (index.gender === "female"){
        females++;
      }
      
    });
    this.setState({countMale : males, countFemale: females}); 
  }


  render() {
  
  let filteredUsers = this.state.users.filter(
    (user) => {return user.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;}
  );
    
    return (
      <div className="App jumbotron container bg-secondary" >

          <Searchform onChange={(e) => this.updateSearch(e)} search={this.state.search} />
          <ModalForm show={this.state.show} handleClose={this.hideModal}>
            <Chart countGender={(e) => this.countGender(e)} males={this.state.countMale} females={this.state.countFemale}/>
          </ModalForm>
          <InitialTableNames />
          <UsersList 
              users={filteredUsers} 
              viewToggled={(e)=> this.viewToggleHandler(e)} 
              isOpenAll={this.state.isOpenAll}              
              currentIndex={this.state.currentIndex}
              plusButtonClicked={this.state.plusButtonClicked}
  />
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <button className="btn btn-primary btn-lg" type="submit">Add New User</button>
          </form>
          <br></br>
          <button className="btn btn-info" onClick={this.showModal}>Show Chart</button>
         
      </div>
    );
  }
}

export default App;