import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import login from '../assets/login.png';
import signup from '../assets/signup.png';
import './LandingModal.css'

class LandingModal extends React.Component {
  state = {
    open: this.props.showLoginModal,
  };

  handleClose = () => {
    this.props.toggleModal();
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ open: this.props.showModal });
    }
  }

  render() {
    const image = this.props.type === "login" ? login : signup;
    const labels = this.props.type === "login" ? ["Email", "Password"] : ["First name", "Last name", "Email", "Password"];
    const values = this.props.type === "login" ? ["email", "password"] : ["firstName", "lastName", "email", "password"];
    const textField = [];
    
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const value = this.state[values[i]];
      textField.push(
        <TextField
          label={label}
          className="input"
          value={value}
          margin="normal"
          variant="outlined"
        />
      )
    }

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