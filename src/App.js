import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component{    
    state = {
        characters: [],
    }
    /*
    Podemos declarar métodos especiais no componente de classe para executar algum código quando um componente é montado e desmontado
    Estes métodos são chamados de “métodos de ciclo de vida”.
    O método é executado depois que a saída do componente é renderizada no DOM
        componentDidMount()
        componentWillUnMount()
        
    componentDidMount(){
        console.log('bla');
    }

    Ao renderizar App, teremos 'bla' no console automaticamente.
    */    
    
    
    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters : characters.filter((character, i) => {
                return i !== index;
            })
        })
    }



    handleSubmit = character => {
        if(character.name){
            this.setState({ characters: [...this.state.characters, character] })
        } else {
            return null;
        }
    }

    render(){
        const { characters } = this.state;
        return(
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Adicione um personagem e um trabalho.</p>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <h1>Adicionar novo</h1>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App