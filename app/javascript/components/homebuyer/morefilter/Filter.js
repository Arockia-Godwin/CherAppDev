import React, { useState, useRef } from "react";
import { Overlay, Popover, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <Form>
      <div ref={ref}>
        <Button onClick={handleClick}>{props.name}</Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Body>
              <p style={{ fontWeight: "bold" }}>Open House Dtate</p>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
              <p style={{ fontWeight: "bold" }}>Start Time</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <Form.Select aria-label="Default select example">
                    <option>Hour</option>
                    <option value="1">12am</option>
                    <option value="2">1am</option>
                    <option value="3">2am</option>
                    <option value="3">4am</option>
                    <option value="3">5am</option>
                    <option value="3">6am</option>
                    <option value="3">7am</option>
                    <option value="3">8am</option>
                    <option value="3">9am</option>
                    <option value="3">10am</option>
                    <option value="3">11am</option>
                    <option value="3">12pm</option>
                    <option value="3">1pm</option>
                    <option value="3">2pm</option>
                    <option value="3">3pm</option>
                    <option value="3">4pm</option>
                    <option value="3">5pm</option>
                    <option value="3">6pm</option>
                    <option value="3">7pm</option>
                    <option value="3">8pm</option>
                    <option value="3">9pm</option>
                    <option value="3">10pm</option>
                    <option value="3">11pm</option>
                  </Form.Select>
                </div>
                <div className="col-md-6">
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">0</option>
                    <option value="2">10</option>
                    <option value="3">20</option>
                    <option value="3">30</option>
                    <option value="3">40</option>
                    <option value="3">50</option>
                  </Form.Select>
                </div>
              </div>
              <div>
                <p style={{ fontWeight: "bold" }}>Status</p>
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Flagged`}
                />
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`For Sale`}
                />
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Pending`}
                />
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Not Active`}
                />

                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Rental`}
                />
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Fractional Sale`}
                />
              </div>
              <p style={{ fontWeight: "bold" }}>Square Feet</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <input type="number" placeholder="min"></input>
                </div>
                <div className="col-md-6">
                  <input type="number" placeholder="min"></input>
                </div>
              </div>
              <p style={{ fontWeight: "bold" }}>Year Built</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <input type="number" placeholder="min"></input>
                </div>
                <div className="col-md-6">
                  <input type="number" placeholder="min"></input>
                </div>
              </div>
              <p style={{ fontWeight: "bold" }}>Lot Size</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <input type="number" placeholder="min"></input>
                </div>
                <div className="col-md-6">
                  <input type="number" placeholder="min"></input>
                </div>
              </div>
              <div>
                <p style={{ fontWeight: "bold" }}>Waterfront</p>
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Waterfront Property`}
                />
              </div>
              <div>
                <p style={{ fontWeight: "bold" }}>Days on Cher</p>
                <input type="text" placeholder="Any"></input>
              </div>
              <div>
                <p style={{ fontWeight: "bold" }}>Keywords</p>
                <input type="text" placeholder="Yard, fireplace, etc."></input>
              </div>
              <div className="d-flex">
                <div className="col-md-6">
                  <button className="btn btn-primary">Reset</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </Form>
  );
};

export default Filter;
