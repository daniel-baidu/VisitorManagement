import { render } from "react-dom";
import "./templates.css";
import * as React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { SampleBase } from "./sample-base";
import * as data from "./dataSource.json";

import "./material2.css"; 
import "./material1.css"; 
import "./material3.css"; 


 export default class Templates extends SampleBase {
    constructor() {
        super(...arguments);
        this.temp = 'empList';
        // define the JSON of data
        this.employeesData = data[this.temp];
        // maps the appropriate column to fields property
        this.fields = { text: 'Name', value: 'Eimg' };
    }
//set the value to header template
headerTemplate(data) {
  return (<div className="header"> <span>Photo</span> <span className="columnHeader">Employee Info</span></div>);
}
//set the value to item template
itemTemplate(data) {
  return (<div><img className="empImage" src={"src/combo-box/Employees/" + data.Eimg + ".png"} alt="employee"/>
  <div className="ename"> {data.Name} </div><div className="job"> {data.Designation} </div></div>);
}
    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <div id='template'>
            <DropDownListComponent id="employees" dataSource={this.employeesData} fields={this.fields} placeholder="Select an employee" itemTemplate={this.itemTemplate} valueTemplate={this.valueTemplate} headerTemplate={this.headerTemplate} popupHeight="270px"/>
          </div>
        </div>
        
      </div>);
    }
}


