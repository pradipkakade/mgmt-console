import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
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
    this.state = {
        sectionIds: [],
        sectionString : "data(*)",
        encodingType : "",
        defaultFileLayout : "data(*)",
       
    };
    }
    render() {

        return (
            <div>
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
                            <IconButton onClick={this.callParent} iconClassName="fa fa-floppy-o"/>
                        </CardHeader>
                    </Card>
                
            </div>
        );
    }
}
