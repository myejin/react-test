import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {  // Table과 Form은 App에 로드된다.
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index 
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})  // ?
  }

  render() {  // DOM 노드 렌더링하는데 사용되는 필수 메서드
    const { characters } = this.state

    return (
      <div className = 'container'>
        <Table characterData = { characters } removeCharacter = { this.removeCharacter } /><br/>
        <Form handleSubmit = { this.handleSubmit } />
      </div>
    )
  }
}

export default App 
