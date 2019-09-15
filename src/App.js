import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list'
import { Search } from './components/search/search'
import './App.css';

class App extends Component {
  state = {
    userlist: [],
    searchval: ''
  }

  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => {
        this.setState({userlist: user})
      })
  }

  handleChange = val => {
    this.setState({searchval: val.target.value})
  }

  render () {
    let { userlist, searchval } = this.state
    let filterval = userlist.filter(user => user.name.toLowerCase().includes(searchval.toLowerCase()))
    return (
      <div className="App">
        <h1>hello react</h1>
        <Search handleChange={this.handleChange} placeholder={'you are choose'} />
        <header> 
          <CardList userlist={filterval}/>
        </header> 
      </div>
    )
  }

  // render () {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <Card userlist={this.state.userlist} />
  //         {/* <CardList userlist={this.state.userlist}/> */}
  //       </header> 
  //     </div>
  //   )
  // }
}

export default App;
