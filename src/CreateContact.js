import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeData from 'form-serialize';

export default class CreateContact extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeData(e.target, {hash: true})
    
    if (this.props.onCreateContact) {
      this.props.onCreateContact(values);
    }
  }

  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/" />
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='name'/>
            <input type='text' name='handle' placeholder='handle'/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}
