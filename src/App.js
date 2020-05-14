import React, { Component } from "react";
import ContactsLists from "./ContactsList";
import * as contactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: [],
    screen: "list"
  };

  componentDidMount() {
    contactsAPI.getAll().then((contacts) => {
      this.setState({
        contacts,
      });
    });
  }

  handleRemove = (contact) => {
    console.log(contact);
    contactsAPI.remove(contact).then((data) => {
      const newContacts = this.state.contacts.filter((ct) => ct.id !== data.id);
      this.setState({
        contacts: newContacts,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.screen === "list" && (
          <ContactsLists
            contacts={this.state.contacts}
            onRemove={this.handleRemove}
          />
        )}
        {this.state.screen === "create" && <CreateContact />}
      </div>
    );
  }
}

export default App;
