import React, { Component } from 'react'
import './App.css'
import vending_machine from './vending_machine.jpg'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            voucherSought: '',
            voucherValue: ''
        }
    }

    handleChange (event) {
        this.setState({voucherSought: event.target.value})
        this.setState({voucherValue: ''})
    }

    handleClick (event) {
        const uuidv1 = require('uuid/v1');
        this.setState({voucherValue: uuidv1()})
        console.log('Selection was ' + this.state.voucherSought)
        event.preventDefault()
        // axios.get('https://api.github.com/users/jsmithedin')
        //     .then(response => this.setState({username: response.data.name}))
    }

    render () {
        return (
            <div>
            <div className='image_container'>
                <img src={vending_machine} alt="Vending Machine"/>
            </div>
            <div className='button__container'>
                <form onSubmit={this.handleClick.bind(this)}>
                    <label>
                        Whatcha Want?!
                        <select value={this.state.voucherSought} onChange={this.handleChange.bind(this)}>
                            <option value="aws">AWS</option>
                            <option value="azure">AZURE</option>
                            <option value="gcp">GCP</option>
                        </select>
                    </label>
                    <input type="submit" value={"Submit"} />
                </form>
            </div>
                <div className='reply__container'>
                    <p>{this.state.voucherValue}</p>
                    <p></p>
                </div>
            </div>
        )
    }
}
export default App