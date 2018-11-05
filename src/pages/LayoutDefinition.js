import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import styles from './etlEditors.css';

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
                <div>
                    <Formsy.Form
                        ref="form">
                        <div>
                            <FormsySelect
                                name="CharacterEncoding"
                                required
                                floatingLabelText="Character Encoding*"
                                fullWidth
                                onChange={this.onEncodingSelect}
                                style={{ verticalAlign: 'bottom' }}
                            >
                                <MenuItem value="utf8" primaryText="UTF-8" />
                                <MenuItem value="utf8" primaryText="UTF-16" />
                            </FormsySelect>
                        </div>
                        <Card initiallyExpanded={true}>
                            <CardHeader
                                title="File layout"
                                titleStyle={{ fontWeight: 'bold', fontSize: '16' }}
                            >
                                <div >
                                    <FormsyText
                                        name="fileLayout"
                                        onChange={this.getSectionsText}                            
                                        required
                                        fullWidth
                                        rows={1}
                                        multiLine={true}
                                        defaultValue={this.state.defaultFileLayout}
                                        style = {{fontSize: "13" , marginTop: "1px"}}
                                    />
                                    <div className={styles.rightAlign} >
                                        <RaisedButton label="Apply" onClick={this.getSectionsArray} type="submit" primary={true} />
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                        <br />
                        <Card initiallyExpanded={true}>
                            <CardHeader
                                title="Section identification"
                                titleStyle={{ fontWeight: 'bold', fontSize: '16' }}
                            >
                                <Table fixedHeader={true}
                                    fixedFooter={true}
                                    displaySelectAll={false}>
                                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                        <TableRow>
                                            <TableHeaderColumn style={{ width: '20%' }}> Section </TableHeaderColumn>
                                            <TableHeaderColumn style={{ width: '70%' }}> Formula </TableHeaderColumn>
                                            <TableHeaderColumn> <FloatingActionButton onClick={this.createConfiguration} iconClassName="fa fa-plus" mini={true}/> </TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        {this.state.sectionIds.map(sectionId => (
                                            <TableRow id={sectionId.section}>
                                                <TableRowColumn style={{ width: '20%' }}>{sectionId.section}</TableRowColumn>
                                                <TableRowColumn style={{ width: '70%' }}>{sectionId.formula}</TableRowColumn>
                                                <TableRowColumn><IconButton iconClassName="fa fa-trash-o" onClick={() => this.removeRow(sectionId)} /></TableRowColumn>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
    
                            </CardHeader>
                        </Card>
                   <br/>
                    </Formsy.Form>
                    <Link to="/RecordTokenizer">
                    <RaisedButton label="Next" primary={true} />
                    </Link>
                </div>
            );
        }
    }
    