import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = {
      favLinks : [
        {
          name: 'github',
          URL: 'git.io'
        },
        {
          name: 'react',
          URL: 'react.org'
        },
        {
          name: 'youtube',
          URL: 'youtube.com'
        },
      ]
    }
  }

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */

    console.log(favLink)
    console.log(this.state.favLinks)
  
    // this.setState({
    //   favLinks: this.state.favLinks.push({name: favLink.name, URL: favLink.URL})
    // })
    const linkSubmitted  = { name: favLink.name, URL: favLink.URL }
    this.setState({
      // favLinks: this.state.favLinks.push(linkSubmitted)
      favLinks: [...this.state.favLinks, linkSubmitted]
    })
  }

  removeLink = (index) => {
    // this.setState({
    //   favLinks : this.state.favLinks.filter(favLink => favLink != favLink[index])
    // })
    // this.setState({
    //   favLinks : this.state.favLinks.filter(favLink => favLink[index])
    // })
    this.setState({
      favLinks : this.state.favLinks.filter(favLink => favLink !== this.state.favLinks[index])
    })
    console.log(this.state.favLinks)
    console.log(this.state.favLinks.filter(favLink => favLink !== this.state.favLinks[index]))
    // console.log(index)
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table linkData={this.state.favLinks} removeLink={this.removeLink}/>

        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
