import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import login from '../assets/login.png';
import './Modal.css'

class BaseModal extends React.Component {
  state = {
    open: this.props.showLoginModal,
  };

  handleClose = () => {
    this.props.toggleLoginModal();
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ open: this.props.showLoginModal });
    }
  }

  render() {
    return (
      <div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          className="modal-container"
        >
          <div className="modal">
            <img src={login} className="login-logo" alt="login-logo" />
            <form className="login-form">
              <TextField
                label="Username"
                className='input'
                value={this.state.username}
                margin="normal"
                variant="outlined"
              />

              <TextField
                label="Password"
                className='input'
                value={this.state.password}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />

              <button className="primary-button" onClick={this.toggleLoginModal}>
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BaseModal;