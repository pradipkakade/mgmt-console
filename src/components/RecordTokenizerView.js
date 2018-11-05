import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { FormsyText, FormsySelect } from 'formsy-material-ui/lib';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import attachValidationToFormsy from 'formsy-react-validations'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const RecordTokenizerView=() =>(<div>
<Formsy.Form
    ref="form">
    <Card initiallyExpanded={true}>
        <CardHeader
            title="Extractor Details"
            titleStyle={{ fontWeight: 'bold', fontSize: '16' }}
        >
            <div >
                <FormsySelect
                    name="extType"
                    required
                    floatingLabelText="Record Extractor types"
                    fullWidth
                    style={{ verticalAlign: 'bottom' }}
                >
                    <MenuItem value="delimited" primaryText="Delimited record tokenizer" />
                    <MenuItem value="fixed" primaryText="Fixed length record tokenizer" />
                </FormsySelect>
                <div>
                    <RadioButtonGroup name="createConfigurationType" defaultSelected={this.state.delimitedTokenValue} onChange={this.handleChange} style={{ display: 'flex', width: '12%' }}>
                        <RadioButton
                            value="  line"
                            label="  Line"
                        />
                        <RadioButton
                            value="  comma"
                            label="  Comma"
                        />
                        <RadioButton
                            value="  colon"
                            label="  Colon"
                        />
                    </RadioButtonGroup>
                </div >
            </div>
        </CardHeader>
    </Card>
    <br />
    <Card initiallyExpanded={true}>
        <CardHeader
            title="Field Tokenization"
            titleStyle={{ fontWeight: 'bold', fontSize: '16' }}
        ><br/>
            <FormsySelect
                name="secType"
                required
                onChange={this.onSectionDataTypeSelect}
                floatingLabelText="Section Detail types"
                style={{ verticalAlign: 'bottom' }}
            >
            {/*this.state.LayoutDetails.map(obj => (<MenuItem value={obj} primaryText={obj} />))*/}
            </FormsySelect>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormsySelect
                name="fieldTokenType"
                required
                floatingLabelText="Record Tokenizer types"
                style={{ verticalAlign: 'bottom' }}
            >
                <MenuItem value="delimited" primaryText="Delimited record tokenizer" onClick={this.onMenuChange}/>
                <MenuItem value="fixed" primaryText="Fixed length record tokenizer" onClick={this.onFixed} />
            </FormsySelect>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           {this.state.viewTextbox ? <FormsyText name="size" required floatingLabelText="Enter Delimiter Character" style={{width: "30%"}}/> : ''}
        
            <Table fixedHeader={true}
                fixedFooter={true}
                displaySelectAll={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn > field name </TableHeaderColumn>
                        <TableHeaderColumn > Data type </TableHeaderColumn>
                        <TableHeaderColumn > Type </TableHeaderColumn>
                        <TableHeaderColumn > Field Size </TableHeaderColumn>
                        <TableHeaderColumn > Encoding type </TableHeaderColumn>
                        <TableHeaderColumn > Section Data type </TableHeaderColumn>
                        <TableHeaderColumn> <FloatingActionButton iconClassName="fa fa-plus" onClick={this.createConfiguration} mini={true} /> </TableHeaderColumn>
                        </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                {/*this.state.tableData.map(fields => (
                   
                        <TableRow id={fields.fieldName}>
                            <TableRowColumn>{fields.fieldName}</TableRowColumn>
                            <TableRowColumn>{fields.dataType}</TableRowColumn>
                            <TableRowColumn>{fields.type}</TableRowColumn>
                            <TableRowColumn>{fields.size}</TableRowColumn>
                            <TableRowColumn>{fields.encodingType}</TableRowColumn>
                            <TableRowColumn>{fields.sectionDataType}</TableRowColumn>
                            <TableRowColumn><IconButton  iconClassName="fa fa-trash-o" onClick={() => this.handleDelete(fields)} /></TableRowColumn>
                        </TableRow>
                     ))*/}
                </TableBody>
            </Table>
            <IconButton onClick={this.callParent} iconClassName="fa fa-floppy-o"/>
        </CardHeader>
    </Card>
</Formsy.Form>
</div>);

export default RecordTokenizerView;
