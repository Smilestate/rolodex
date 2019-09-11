import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list'
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

  render () {
    let { userlist, searchval } = this.state
    let filterval = userlist.filter(user => user.name.toLowerCase().includes(searchval.toLowerCase()))
    return (
      <div className="App">
        <input type='search' onChange={e => this.setState({searchval: e.target.value})}/>
        {console.log(filterval)
        }
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
