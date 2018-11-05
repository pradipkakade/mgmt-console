import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import styles from './../styles/etlEditors.css';
import LayoutDefinitionView from './../components/LayoutDefinitionView';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

export default class LayoutDefinition extends Component {
           constructor(props) {
            super(props);
            
            this.sectionArray = [];
    
            this.getSectionsArray = this.getSectionsArray.bind(this);
            this.getSectionsText = this.getSectionsText.bind(this);
            this.onEncodingSelect = this.onEncodingSelect.bind(this);
            this.init = this.init.bind(this);
      
            this.updateSectionIdentification = this.updateSectionIdentification.bind(this);
            this.removeRow = this.removeRow.bind(this);
            this.callParent = this.callParent.bind(this);
            this.name='';
            this.filelayout2=[];
            this.state = {
                sectionIds: [],
                sectionString : "data(*)",
                encodingType : "",
                defaultFileLayout : "data(*)",
               
            };
    
            this.sectionArray.push(this.state.defaultFileLayout.fileLayout);
            this.getSectionsArray();
            this.state.name= this.props.name;
            this.etl = this.props.etl;
         
          console.log("ETL:::",this.etl);
    
            if(this.etl){
    
             console.log("ETLLL:::",this.etl.source.filelayout.layouts.split('\n'));
    
             this.state.defaultFileLayout=this.etl.source.filelayout.layouts;
    
             this.state.sectionString=this.etl.source.filelayout.layouts;
             
    
           //  this.props.onSetLayout( this.etl.source.filelayout1.layouts.split('\n'), this.state.sectionString,this.state.sectionIds);
             
                      {this.etl.source.filelayout.sectionDetails.map(obj => (
                          
                       //  console.log("LOG :: ",obj)
                         
                         this.init(obj)
                         
                     ))}
            }
             
        }
    
    
        init(data){
    
            var newArray = this.state.sectionIds.slice()  
    
            newArray.push({
                section: data.name,
                formula: data.formulae
            });   
    
            this.state.sectionIds = newArray;
    
        }
         
        updateSectionIdentification(section1){
    
            this.state.sectionIds.section = section1.sectionName;
            this.state.sectionIds.formula = section1.formula;
    
            var newArray = this.state.sectionIds.slice();    
            newArray.push({
                section: section1.sectionName,
                formula: section1.formula
            });   
            this.setState({sectionIds:newArray})
    
        }
    
      
        onEncodingSelect(event, value, index){
            this.setState({encodingType : value})
          }
    
        getSectionsArray() {
            this.sectionArray = this.state.sectionString.split('\n');
           
        }
    
        removeRow(rowData){
    
            console.log("rowdata ::: ",rowData);
            console.log("rowdata section ::: ",rowData.section);
    
            const arrayCopy = this.state.sectionIds.filter((row) => row.section !== rowData.section);
            
            console.log("arrayCopy ::: ",arrayCopy);
    
            this.setState({sectionIds: arrayCopy});
          };
    
        getSectionsText(event){
            this.setState({sectionString : event.target.value});
        }
    
        callParent(){
            this.props.onSetLayout( this.sectionArray, this.state.sectionString,this.state.sectionIds);
        }
    
        render() {
    
            return (
              <div> <LayoutDefinitionView/> </div>
            );
        }
    }
    