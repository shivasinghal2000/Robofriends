import React from 'react'
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({robots: users}) });
    }

  onSearchChange = (event) => {
    // console.log(event.target.value)
      this.setState({ searchfield: event.target.value })
    // console.log(filteredRobots)
  }

  render () {
    const {robots,searchfield} = this.state
      const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })
      if (robots.length === 0) {
          return <h1>Loading</h1>
      }
      else 
    {return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    )}
  }
}

export default App
