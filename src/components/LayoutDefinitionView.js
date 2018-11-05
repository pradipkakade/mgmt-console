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
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
const LayoutDefinitionView = () => ( <div><Formsy.Form
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
                    <div><Link to="/RecordTokenizer">
                    <RaisedButton label="Next" primary={true} />
                    </Link></div></div> );

export default LayoutDefinitionView;