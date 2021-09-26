import React from "react";
import Header from "./components/header";
import Profile from "./components/profile";
import Educations from "./components/educations";
import Professions from "./components/professions";
import ContactInfo from "./components/contactinfo";
import "./App.css";
import Languages from "./components/languages";

class App extends React.Component {
  state = {
    Educations: [
      { id: 0 },
      // {id:1},
      // {id:2},
      // {id:3},
      // {id:4},
      // {id:5},
      // {id:6}
    ],
    Professions: [{ id: 0 }],
    Languages: [{ id: 0 }],
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="d-flex flex-column align-items-center">
          <Profile />
          <Professions
            Professions={this.state.Professions}
            addComponent={this.addComponent}
            deleteComponent={this.deleteComponent}
          />
          <Educations
            Educations={this.state.Educations}
            addComponent={this.addComponent}
            deleteComponent={this.deleteComponent}
          />
          <Languages
            Languages={this.state.Languages}
            addComponent={this.addComponent}
            deleteComponent={this.deleteComponent}
          />
          <ContactInfo />
        </div>
      </React.Fragment>
    );
  }

  findId = (type) => {
    const components = this.state[type];
    for (let i = 0; i < components.length + 1; i++) {
      if (!components.some((c) => c.id === i)) return i;
    }
  };

  addComponent = (type) => {
    const components = this.state[type];
    let id = this.findId(type);
    components.push({ id: id });
    this.setState({ [type]: components });
  };

  deleteComponent = (type, ID) => {
    const components = this.state[type].filter((c) => c.id !== ID);
    this.setState({ [type]: components });
  };
}

export default App;
