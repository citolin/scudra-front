import React from 'react';
import { TextInput, Modal, Loading } from './components'
import axios from 'axios'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleSubmit = event => {
        event.preventDefault()
        event.stopPropagation()

        let body = this.state
        this.setState({ loading: true })

        setTimeout(() => {
            axios.post(process.env.REACT_APP_BACKEND, body)
                .then(r => {
                    this.setState({ loading: false, credit: r.data.value })
                })
                .catch(e => {
                    console.log(e)
                    if (e && e.response)
                        this.setState({ open: true, error: e.response.data, loading: false })
                    else
                        this.setState({ open: true, error: 'Request timeout. Try again.', loading: false })
                })

        }, 1000)
    }

    handleChange = (value, key) => {
        this.setState({
            [key]: value
        })
    }

    handleSetOpen = open => {
        this.setState({ open: open, training: false })
    }

    reset = () => {
        this.setState({ open: false, error: null, loading: false, age: null, mm2: null, credit: null })
    }

    showTrainingSet = () => {
        this.setState({ open: true, training: true })
    }

    renderPage = () => {
        if (this.state.credit) {
            return (
                <div>
                    <p><strong>Age:</strong> {this.state.age} </p>
                    <p><strong>MM2:</strong> {this.state.mm2} </p>
                    <span className='credit'>Credit: {this.state.credit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </span>
                    <br />
                    <button className='submit-button' onClick={this.reset}> Do it again </button>

                </div>
            )
        }
        else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h1> Find out your credit. </h1>
                    <TextInput value={this.state.age} onChange={value => this.handleChange(value, 'age')} title='Age' placeholder='15 - 80' val='years' />
                    <TextInput value={this.state.mm2} onChange={value => this.handleChange(value, 'mm2')} title='Square meters price' placeholder='150 - 500' val='mm2' />
                    <div onClick={this.showTrainingSet}><span className='training'>Trainning set</span></div>
                    <button className='submit-button' type='submit'> Find out </button>
                </form>
            )
        }
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    {
                        this.state.loading ?
                            <Loading />
                            :
                            this.renderPage()
                    }
                </header>

                <Modal training={this.state.training} open={this.state.open} setOpen={this.handleSetOpen} error={this.state.error} />
            </div >
        )
    }

}

export default App;
