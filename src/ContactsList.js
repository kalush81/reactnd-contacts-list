import React from "react";
import { Link } from 'react-router-dom';

export default class ContactsList extends React.Component {
  state = {
    query: ''
  }
  handleClick = (contact) => {
    this.props.onRemove(contact);
  };
  handleQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }
  componentDidUpdate() {
    console.log('did update state: ', this.state.query)
  }
  render() {
    const filtered = this.props.contacts.filter(contact => contact.name.trim().toLowerCase().includes(this.state.query)) 
   const mapContacts = () => {
     return filtered.length > 0 ? filtered : this.props.contacts
    }
    return (
      <div className='list-contacts'>
       <div className='list-contacts-top'>
        <input 
          className='search-contacts' 
          type='text' 
          value={this.state.query} 
          onChange={this.handleQuery} 
          placeholder='search contacts'
        />
        <Link  
        className='add-contact'
        to='/create'
        />
       </div>
        <ol className="contact-list">
          {mapContacts().map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`,
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => this.handleClick(contact)}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
