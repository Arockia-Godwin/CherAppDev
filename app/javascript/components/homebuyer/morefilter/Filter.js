import React, { useState, useRef } from "react";
import { Overlay, Popover, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";

const Filter = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const [hour, setHour] = useState(null);
  console.log(props.apiControl.isFractional);

  const handleHour = (e) => {
    const updatedHour = { start_hour: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedHour }));
  };

  const handleMinute = (e) => {
    const updatedMinute = { start_minute: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedMinute }));
  };

  const handleMinSqft = (e) => {
    const updatedMinSqft = { minarea: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedMinSqft }));
  };

  const handleMaxSqft = (e) => {
    const updatedMaxSqft = { maxarea: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedMaxSqft }));
  };

  const handleMinYear = (e) => {
    const updatedMinYear = { minyear: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedMinYear }));
  };

  const handleMaxYear = (e) => {
    const updatedMaxYear = { maxyear: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedMaxYear }));
  };

  const handleMinAcre = (e) => {
    const updatedMinAcre = { minacre: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedMinAcre }));
  };

  const handleMaxAcre = (e) => {
    const updatedMaxAcre = { maxacre: e.target.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedMaxAcre }));
  };

  // const handleDate = (date) => {
  //   const updatedDate = { date: date };
  //   props.setApiControl((apiControl) => ({ ...apiControl, ...updatedDate }));
  // };

  const handleDate = (e) => {
    let selectDate = moment(e.target.value).format("DD/MM/yyyy");
    const updatedDate = { startdate: selectDate };

    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedDate }));
  };

  const handleFractional = (e) => {
    setIsChecked(!isChecked);

    if (isChecked == false) {
      const updatedFractional = { isFractional: e.target.value };
      props.setApiControl((apiControl) => ({
        ...apiControl,
        ...updatedFractional,
      }));
    } else {
      const newItems = { ...props.apiControl };
      delete newItems.isFractional;
      props.setApiControl(newItems);
    }
  };
  console.log(selectedDate);
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
              <p style={{ fontWeight: "bold" }}>Open House Date</p>
              {/* <DatePicker
                selected={selectedDate}
                dateFormat="dd/MM/yyyy"
                isClearable
                onChange={(date) => {
                  setSelectedDate(date);
                  handleDate(date);
                }}
              /> */}
              <div>
                <input
                  onChange={handleDate}
                  type="date"
                  pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
                />
              </div>
              <p style={{ fontWeight: "bold" }}>Start Time</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <Form.Select
                    onChange={handleHour}
                    aria-label="Default select example"
                  >
                    <option>Hour</option>
                    <option value="00">12am</option>
                    <option value="01">1am</option>
                    <option value="02">2am</option>
                    <option value="03">3am</option>
                    <option value="04">4am</option>
                    <option value="05">5am</option>
                    <option value="06">6am</option>
                    <option value="07">7am</option>
                    <option value="08">8am</option>
                    <option value="09">9am</option>
                    <option value="10">10am</option>
                    <option value="11">11am</option>
                    <option value="12">12pm</option>
                    <option value="13">1pm</option>
                    <option value="14">2pm</option>
                    <option value="15">3pm</option>
                    <option value="16">4pm</option>
                    <option value="17">5pm</option>
                    <option value="18">6pm</option>
                    <option value="19">7pm</option>
                    <option value="20">8pm</option>
                    <option value="21">9pm</option>
                    <option value="22">10pm</option>
                    <option value="23">11pm</option>
                  </Form.Select>
                </div>
                <div className="col-md-6">
                  <Form.Select
                    onChange={handleMinute}
                    aria-label="Default select example"
                  >
                    <option>Minute</option>
                    <option value="0">0</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
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
                  value="Fractional Sale"
                  checked={isChecked}
                  onChange={handleFractional}
                />
              </div>
              <p style={{ fontWeight: "bold" }}>Square Feet</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <input
                    onChange={handleMinSqft}
                    type="number"
                    placeholder="min"
                    min={10}
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    onChange={handleMaxSqft}
                    type="number"
                    placeholder="max"
                  ></input>
                </div>
              </div>
              <p style={{ fontWeight: "bold" }}>Year Built</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <input
                    type="number"
                    placeholder="min"
                    min={1900}
                    onChange={handleMinYear}
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    placeholder="min"
                    max={2020}
                    onChange={handleMaxYear}
                  ></input>
                </div>
              </div>
              <p style={{ fontWeight: "bold" }}>Lot Size</p>
              <div className="d-flex">
                <div className="col-md-6">
                  <input
                    onChange={handleMinAcre}
                    type="number"
                    placeholder="min"
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    onChange={handleMaxAcre}
                    type="number"
                    placeholder="min"
                  ></input>
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
