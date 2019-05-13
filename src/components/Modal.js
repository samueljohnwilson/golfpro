import React from 'react';
import Modal from '@material-ui/core/Modal';

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
          <div className='modal'>

          </div>
        </Modal>
      </div>
    );
  }
}

export default BaseModal;