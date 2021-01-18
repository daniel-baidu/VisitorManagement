import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { registerType } from "../../actions/adminActions";

//import Templates from "../Layout/EmployeSel";

class VisitorType extends Component {
  constructor() {
    super();

    this.state = {
      
      sex: "",
     
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
     
      sex,
     
    } = this.state;

    const typeDetails = {
     
      sex,
      
    };
    const { registerType, history } = this.props;
    registerType(typeDetails, history);
  };

  render() {
    const {
    
      sex,
      
      
      isLoading,
      
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
        <div className="row1">
          {/* <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
            <Sidebar />
          </div> */}
          <div className="col-md-8 mx-auto">
            <h1 className="header-h1 text-center my-4">How May I help You</h1>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-row">
          
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
                  <option value="/SignoutVisitor">Sign Out</option>
                  
                  
                </select>
              </div> 
              <div className="form-row">
             
        
              </div>

            

              <button type="submit" className="btn btn-primary d-block my-4">
                Select
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

VisitorType.propTypes = {
  registerVisitor: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { registerType })(VisitorType);
