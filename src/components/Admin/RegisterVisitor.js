import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { registerVisitor } from "../../actions/adminActions";
import Sidebar from "../Layout/Sidebar";
//import Templates from "../Layout/EmployeSel";

class RegisterVisitor extends Component {
  constructor() {
    super();

    this.state = {
      fullname: "",
      phone: "",
      address: "",
      sex: "",
      whomToSee: "",
      purpose: "",
      assets: "",
      isLoading: false,
      errors: {},
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: false,
      });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const {
      fullname,
      phone,
      address,
      sex,
      whomToSee,
      purpose,
      assets,
    } = this.state;

    const visitorDetails = {
      fullname,
      phone,
      address,
      sex,
      whomToSee,
      purpose,
      assets,
    };
    const { registerVisitor, history } = this.props;
    registerVisitor(visitorDetails, history);
  };

  render() {
    const {
      fullname,
      phone,
      address,
      sex,
      whomToSee,
      purpose,
    
      isLoading,
      errors,
    } = this.state;

    if (isLoading) {
      return (
        <div className="forgot-password text-center mt-4 loading">
          <p className="spinner-border text-primary  my-3"></p>
          <p className="my-2">Processing...</p>
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div className="row">
          {/* <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
            <Sidebar />
          </div> */}
          <div className="col-md-8 mx-auto">
            <h1 className="header-h1 text-center my-4">Tell Us About Yourself</h1>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="fullname">Fullname</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.fullname,
                    })}
                    id="fullname"
                    placeholder="e.g Sharaf Deen"
                    value={fullname}
                    name="fullname"
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.fullname && (
                    <div className="invalid-feedback">{errors.fullname}</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.phone || errors.invalidPhone,
                    })}
                    id="phone"
                    placeholder="e.g +233509563888 or 0542198102"
                    value={phone}
                    name="phone"
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                  {errors.invalidPhone && (
                    <div className="invalid-feedback">
                      {errors.invalidPhone}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.address,
                  })}
                  id="inputAddress"
                  placeholder="Market Circle..."
                  value={address}
                  name="address"
                  onChange={this.handleOnChange}
                  required
                />
                {errors.address && (
                  <div className="invalid-feedback">{errors.address}</div>
                )}
              </div>
               <div className="form-group">
               <label htmlFor="in">You Are</label>
                <select
                  className="form-control form-control-lg"
                  name="sex"
                  value={sex}
                  onChange={this.handleOnChange}
                  required
                >
                  <option value="">I Am...</option>
                  <option value="Visitor">Visitor</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Delivery">Delivery</option>
                </select>
              </div> 
              <div className="form-row">
                <div className="form-group col-md-6">
                  
                  <label htmlFor="whomToSee">Whom To See</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.whomToSee,
                    })}
                    id="whomToSee"
                    name="whomToSee"
                    value={whomToSee}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.whomToSee && (
                    <div className="invalid-feedback">{errors.whomToSee}</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="purpose">Purpose of Visit</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.purpose,
                    })}
                    id="purpose"
                    name="purpose"
                    value={purpose}
                    onChange={this.handleOnChange}
                    required
                  />
                  {errors.purpose && (
                    <div className="invalid-feedback">{errors.purpose}</div>
                  )}
                </div>
              </div>

              {/* <div className="form-group">
                <label htmlFor="assets">Assets</label>
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Enter visitor's asset(s) e.g Laptop(Hp, ax23566bnsn), phone(infinix, bn3367gsje) etc."
                  id="assets"
                  name="assets"
                  value={assets}
                  onChange={this.handleOnChange}
                ></textarea>
              </div> */}

              <button type="submit" className="btn btn-primary d-block my-4">
                Enter Details
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

RegisterVisitor.propTypes = {
  registerVisitor: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { registerVisitor })(RegisterVisitor);
