import React, {Component} from 'react';
import './Input.css'

class Input extends Component {

    render(){
        return (
            <form>
                <input className='search' type='text' placeholder={this.props.placeholder} value={this.props.inputVal} onChange={this.props.handleChange}/>
            </form>
        )
    }
}

export default Input;