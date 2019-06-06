import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import loginImg from '../assets/login.png';
import signupImg from '../assets/signup.png';
import './LandingModal.css'

class LandingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.showLoginModal,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleClose = (event) => {
    this.props.toggleModal(event);
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ open: this.props.showModal });
    }
  }

  render() {
    const login = {
      labels: ["Email", "Password"],
      values: ["email", "password"],
      image: loginImg,
    }

    const signup = {
      labels: ["First name", "Last name", "Email", "Password"],
      values: ["firstName", "lastName", "email", "password"],
      image: signupImg,
    }

    const { image, labels, values } = this.props.id === "login" ? login : signup;
    const textField = [];

    labels.forEach((label, i) => {
      textField.push(
        <TextField
          label={label}
          className="input"
          id={values[i]}
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />
      )
    });

    return (
      <div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          className="modal-container"
        >
          <div className="modal">
            <img src={image} className="modal-heading" alt="modal-heading" />
            <form className="modal-form">
              {textField}
              <button className="button secondary-button" onClick={this.toggleLoginModal}>
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LandingModal;