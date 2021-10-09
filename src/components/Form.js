import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = {
           name : '',
           URL : ''
       }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
         // save the target object for future reference
            const target = event.target;

            // Check if the target is the checkbox or text input to save the value
            const value = target.name === 'nameInput' ? this.setState({ name: target.value }) : target.name === 'urlInput' ? this.setState({ URL: target.value }) : this.setState({ name: '', URL: '' });
            event.preventDefault();
            // console.log(target.value)
            
            // console.log(this.state.name)
            // console.log(this.state.URL)
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       console.log(this.state)
       console.log(this.state)
       this.props.handleSubmit(this.state);
    //    this.setState({
    //         name : '',
    //         URL : ''
    //     })

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name</label>
                <input name="nameInput"type="text" value={this.state.name} onChange={this.handleChange}></input>
                <label>Url</label>
                <input name="urlInput" type="text" value={this.state.URL} onChange={this.handleChange}></input>
                <button onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;
