import React from "react";
import Header from "./components/header";
import Profile from "./components/profile";
import Educations from "./components/educations";
import Professions from "./components/professions";
import ContactInfo from "./components/contactinfo";
import "./App.css";
import Languages from "./components/languages";
import "./bootstrap.css";
import $ from "jquery";
import { Modal } from "react-bootstrap";

class App extends React.Component {
  state = {
    Modal: {
      show: false,
    },
    Profile: {
      fullName: "",
      description: "",
      gender: "",
    },
    Educations: [{ id: 0 }],
    Professions: [{ id: 0 }],
    Languages: [{ id: 0 }],
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="d-flex flex-column align-items-center">
          <Profile handleUpdate={this.handleUpdate} />
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

        <Modal show={this.state.Modal.show} onHide={() => this.hideModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Everything seems good!</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>Everything seems good!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.hideModal()}>
              Close
            </Button>
          </Modal.Footer> */}
        </Modal>
        <div className="d-flex flex-row-reverse container">
          <button
            className="btn btn-primary my-2"
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            onClick={() => this.validateSite()}>
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }

  showModal = () => {
    this.setState({
      Modal: {
        show: true,
      },
    });
  };

  hideModal = () => {
    this.setState({ Modal: { show: false } });
  };
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

  handleUpdate = (type, state) => {
    this.setState({ [type]: state });
  };

  validateSite = () => {
    let validated = true;
    let scrollElement = null;

    //Contact Info Validation

    if ($("#emailInput").val() === "") {
      $("#emailInput").addClass("is-invalid");
      $("#emailInputLabel").text("Please provide an email!");
      scrollElement = $("#emailInput")[0];
      validated = false;
    }

    if ($("#phoneInput").val() === "") {
      $("#phoneInput").addClass("is-invalid");
      $("#phoneInputLabel").text("Please provide a phone number!");
      scrollElement = $("#phoneInput")[0];
      validated = false;
    }

    if (!/^\d+$/.test($("#phoneInput").val())) {
      $("#phoneInput").addClass("is-invalid");
      $("#phoneInputLabel").text("Invalid phone number!");
      scrollElement = $("#phoneInput")[0];
      validated = false;
    }
    //Languages Validation

    this.state.Languages.slice()
      .reverse()
      .forEach((Language) => {
        let id = Language.id;

        if ($("#languageInput" + id).val() === "") {
          $("#languageInput" + id).addClass("is-invalid");
          scrollElement = $("#languageInput" + id)[0];
          validated = false;
        }

        if ($("#languageFileInput" + id).val() === "") {
          $("#languageFileInput" + id).addClass("is-invalid");
          $("#languageFileLabel" + id).addClass("border-danger");
          scrollElement = $("#languageFileInput" + id)[0];
          validated = false;
        }
      });

    //Education Validation

    this.state.Educations.slice()
      .reverse()
      .forEach((Education) => {
        let id = Education.id;

        if ($("#educationTypeSelect" + id).val() === null) {
          $("#educationTypeSelect" + id).addClass("is-invalid");
          scrollElement = $("#educationTypeSelect" + id)[0];
          validated = false;
        }

        if ($("#degreeInput" + id).val() === "") {
          $("#degreeInput" + id).addClass("is-invalid");
          scrollElement = $("#degreeInput" + id)[0];
          validated = false;
        }

        if ($("#universityInput" + id).val() === "") {
          $("#universityInput" + id).addClass("is-invalid");
          scrollElement = $("#universityInput" + id)[0];
          validated = false;
        }

        if ($("#educationFileInput" + id).val() === "") {
          $("#educationFileInput" + id).addClass("is-invalid");
          $("#educationFileLabel" + id).addClass("border-danger");
          scrollElement = $("#educationFileInput" + id)[0];
          validated = false;
        }
      });

    // Professions Validation

    this.state.Professions.slice()
      .reverse()
      .forEach((Profession) => {
        let id = Profession.id;

        if ($("#jobDescriptionInput" + id).val() === "") {
          $("#jobDescriptionInput" + id).addClass("is-invalid");
          scrollElement = $("#jobDescriptionInput" + id)[0];
          validated = false;
        }

        if ($("#startDateInput" + id).val() && $("#endDateInput" + id).val())
          if ($("#startDateInput" + id).val() > $("#endDateInput" + id).val()) {
            $("#startDateInput" + id).addClass("is-invalid");
            $("#endDateInput" + id).addClass("is-invalid");
            $("#endDateInputLabel" + id).text("");
            $("#startDateInputLabel" + id).text(
              "Start date should be before end date!"
            );
            scrollElement = $("#startDateInput" + id)[0];
            validated = false;
          }

        if ($("#endDateInput" + id).val() === "") {
          $("#endDateInput" + id).addClass("is-invalid");
          $("#endDateInputLabel" + id).text("Please enter an end date!");
          scrollElement = $("#endDateInput" + id)[0];
          validated = false;
        }

        if ($("#startDateInput" + id).val() === "") {
          $("#startDateInput" + id).addClass("is-invalid");
          $("#startDateInputLabel" + id).text("Please enter a start date!");
          scrollElement = $("#startDateInput" + id)[0];
          validated = false;
        }

        if ($("#companyInput" + id).val() === "") {
          $("#companyInput" + id).addClass("is-invalid");
          scrollElement = $("#companyInput" + id)[0];
          validated = false;
        }

        if ($("#jobInput" + id).val() === "") {
          $("#jobInput" + id).addClass("is-invalid");
          scrollElement = $("#jobInput" + id)[0];
          validated = false;
        }
      });

    // Profile Validation

    if (this.state.Profile.description === "") {
      $("#descriptionTextArea").addClass("is-invalid");
      scrollElement = $("#descriptionTextArea")[0];
      validated = false;
    }
    if (this.state.Profile.gender === "") {
      $("#genderSelect").addClass("is-invalid");
      scrollElement = $("#genderSelect")[0];
      validated = false;
    }
    if (this.state.Profile.fullName === "") {
      $("#fullNameInput").addClass("is-invalid");
      scrollElement = $("#fullNameInput")[0];
      validated = false;
    }

    if (scrollElement) {
      this.scrollToElementAdjusted(scrollElement);
    }

    if (validated) {
      this.showModal();
    }
  };

  scrollToElementAdjusted = (element) => {
    let headerOffset = 90;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // defaultComponent = (type, id) => {
  //   let component = {};
  //   if (type === "Profession") {
  //     component = {
  //       id: id,
  //       job: "",
  //       company: "",
  //       startDate: "",
  //       endDate: "",
  //       description: "",
  //     };
  //   }

  //   return component;
  // };
}

export default App;
