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
    const textSource = this.props.type === "login" ? ["Email", "Password"] : ["First name", "Last name", "Email", "Password"];
    const valueSource = this.props.type === "login" ? ["email", "password"] : ["firstName", "lastName", "email", "password"];
    const textField = [];
    
    for (let i = 0; i < textSource.length; i++) {
      const label = textSource[i];
      const value = this.state[valueSource[i]];
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