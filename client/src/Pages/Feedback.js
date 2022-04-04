import React from "react";

function Feedback() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center px-0">
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "rgba(9,9,121)" }}
      >
        <div className="container my-5">
          <div className="display-5 px-2 text-center">Give your Feedback!</div>
          <div className="lead text-center">
            Help us improve our webapp by providing your valuable feedback. You
            feedback will be used to improve the UI/ UX of the webapp so that we
            can provide the best possible service to you!
          </div>
        </div>
      </div>

      <hr />

      <div className="container row d-flex justify-content-between">
        <div className="card card mb-3 col-md-5 p-0 border border-primary">
          <div className="card-header text-center bg-primary text-white">
            Sign Kit: Feedback Form 1
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">Feedback on Overall Website</h5>
              <p className="card-text">
                Tell us what you think about the overall webapp design. Rate our
                webpage on various metrics like satisfaction, appearance,
                usability etc.
              </p>
            </div>
            <div className='mt-3'>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1yDHIBGR2EusbGSuk-zBWBwoS5i-Gwm7Rvprw6IhBlWfJTQ/viewform?usp=sf_link"
                className="btn btn-info"
              >
                Open Feedback Form
              </a>
            </div>
          </div>
        </div>

        <div className="card card mb-3 col-md-5 p-0 border border-primary">
          <div className="card-header text-center bg-primary text-white">
            Sign Kit: Feedback Form 2
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">Feedback on Audio to Sign Module</h5>
              <p className="card-text">
                Help us to know how well our system is able to understand and
                convert different voices and accents to text so that the correct
                sign is displayed everytime.
              </p>
            </div>
            <div className='mt-3'>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSehlA48o3Y_k9ntfHRzY5II6iqhlpaP2iALN7h1sTjYn7Nr4w/viewform?usp=sf_link"
                className="btn btn-info"
              >
                Open Feedback Form
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container row d-flex justify-content-between">
        <div className="card card mb-3 col-md-5 p-0 border border-primary">
          <div className="card-header text-center bg-primary text-white">
            Sign Kit: Feedback Form 3
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">
                Feedback on Sign Correctness (For Expert users)
              </h5>
              <p className="card-text">
                Expert users who are well versed in Indian Sign Language can
                help us by telling if the animated signs displayed on theis
                webapp are correct or not.
              </p>
            </div>
            <div className='mt-3'>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLScDfQ-6EbKgG-nLdjTI7atlA65EnWoQb3mOo3Bl-JtpNhjJuA/viewform?usp=sf_link"
                className="btn btn-info"
              >
                Open Feedback Form
              </a>
            </div>
          </div>
        </div>

        <div className="card card mb-3 col-md-5 p-0 border border-primary">
          <div className="card-header text-center bg-primary text-white">
            Sign Kit: Feedback Form 4
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">
                Feedback on Sign Correctness (For Novice users)
              </h5>
              <p className="card-text">
                Novice users who may not know Indian Sign Language can help us
                by rating the similarity of our animated signs with real life
                recorded signs.
              </p>
            </div>
            <div className='mt-3'>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLScEHG6UoqUwhoqzE_KNrLXAMOkSb8xKfSJNRCn52gmF9ksRkw/viewform?usp=sf_link"
                className="btn btn-info"
              >
                Open Feedback Form
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container row d-flex justify-content-between">
        <div className="card card col-md-5 p-0 border border-primary">
          <div className="card-header text-center bg-primary text-white">
            Sign Kit: Feedback Form 5
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">
                Feedback on 'Create Video' module
              </h5>
              <p className="card-text">
                Help us know if our ISL Video creation module is simple and easy enough to use. Let us know if you want any more features to be added in this module.
              </p>
            </div>
            <div className='mt-3'>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLScScSh9Mli_1XKQLmNBrCGkWve7jbMqMwHhpiNS-qeNNXgKMA/viewform?usp=sf_link"
                className="btn btn-info"
              >
                Open Feedback Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
