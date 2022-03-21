import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

function ConfirmModal({ show, onHide, videoId }) {
    const handleClick = (videoId) => {
        navigator.clipboard.writeText(videoId)
        document.getElementById('copy-msg').style.visibility='visible'
        setTimeout(() => {
            document.getElementById('copy-msg').style.visibility='hidden'
        }, 2000)
    }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Congrats!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You have created a new video now! You can access or share your video
          by using this Video ID. Make sure to save the Video ID for further
          reference.
        </p>

        <Form.Group controlId="title" className="my-3">
          <Form.Label>Video ID</Form.Label>
          <div className="d-flex my-0 py-0">
            <Form.Control readOnly type="text" value={videoId} />
            <Button
              className="ms-3"
              onClick={() => handleClick(videoId)}
            >
              Copy
            </Button>
          </div>
          <div id='copy-msg' style={{color:'#198754', fontSize:'0.9rem', visibility:'hidden'}} className='my-0'>Video ID copied!</div>
        </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
