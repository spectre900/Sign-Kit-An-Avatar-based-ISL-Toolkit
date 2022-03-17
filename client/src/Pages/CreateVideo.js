import React, { useState } from 'react'
import { Row, Form, Col, InputGroup, Button} from 'react-bootstrap'

function CreateVideo() {
    const [video, setVideo] = useState({
        title: '',
        desc: '',
        createdBy: '',
        content: ''
    })
    const [validated, setValidated] = useState(false);

    const handleInputChanges = (event) => {
        setVideo(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }

    const validateVideo = () => {
        if(!video.title)
            return false
        return true
    }

    const handleSubmission = (event) => {
        event.preventDefault()

        if(!validateVideo) {
            event.stopPropagation()
            return false
        }
    }

    // return (
    //     <div className='container d-flex flex-column align-items-center'>
    //         <div className='display-5 mt-5'>
    //             Create a New Video!
    //         </div>
    //         <div className='lead mb-5'>
    //             Fill this form and provide your content to create a video using ISL in a few clicks!
    //         </div>

    //         <form className='needs-validation' noValidate onSubmit={handleSubmission}>
    //             <div>
    //                 <label htmlFor="title" className="form-label">First name</label>
    //                 <input type="text" className="form-control" id="title" value={video.title} onChange={handleInputChanges} required />
    //                 <div className="valid-feedback">
    //                     Looks good!
    //                 </div>
    //                 <div className="invalid-feedback">
    //                     Please choose a title.
    //                 </div>
    //             </div>

    //             <div>
    //                 <button className="btn btn-primary" type="submit">Submit form</button>
    //             </div>
    //         </form>
    //     </div>
    // )



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    
      return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={video.title}
                id='title'
                onChange={handleInputChanges}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      );
}

export default CreateVideo
