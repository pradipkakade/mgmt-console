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


export default class TokenizerDetails extends Component {
    constructor(props) 
      {
        super(props);
        this.updateSectionIdentification = this.updateSectionIdentification.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.onMenuChange=this.onMenuChange.bind(this);
        this.onFixed=this.onFixed.bind(this);
        this.callParent = this.callParent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSectionDataTypeSelect = this.onSectionDataTypeSelect.bind(this);
        this.name='';
        this.state = {
            delimitedTokenValue : 'line',
            selectedSectionItem : '',
            viewTextbox: false,
            sectionDataType: '',
            LayoutDetails:[],
            tableData:[],
            fields: [{
                    fieldName: 'Field',
                    dataType:'Integer',
                    type:'Fixed',
                    size:'30',
                    encodingType:'ASCII',
                    sectionDataType : 'Data(*)',
            }],
        };
        
        this.state.name= this.props.name;
        this.state.LayoutDetails = this.props.layoutDetails;
        this.etl = this.props.etl;

        console.log('Token Data: ',this.etl);

       /* if(this.etl){
            {this.etl.source.filelayout.sectionDetails.map(obj => (
                
                this.getFields(obj) 
                
            ))}
        }*/

    }

    getFields(data){

        console.log("DATA :: ",data.fieldDetails)

/*        {data.fieldDetails.map(obj => (
           // console.log("OBJ ::: ",obj)
           this.init(obj) 
            
        ))}
*/
    }

    init(data){
        
        console.log("INIT DATA ::: ",data);

        var newArray = this.state.fields.slice(); 
        
        newArray.push({
            fieldName: data.name,
            dataType:data.dataType,
            type:data.type,
            size:data.size,
            encodingType:data.encodingType,
            sectionDataType: data.sectionDataType
        }); 
  
        this.state.fields = newArray; 
        this.state.tableData = newArray;

      //  this.setState({fields:newArray}) 
      //  this.setState({tableData:newArray}) 
    }
    
    

    handleDelete(rowData)
    {
        console.log("Row data: ",rowData)
    const arrayCopy = this.state.fields.filter((row) => row.fieldName!== rowData.fieldName);
     this.setState({fields: arrayCopy});
     this.setState({tableData: arrayCopy});

    }

    updateSectionIdentification (tokenizationDetails){
    
        var newArray = this.state.fields.slice(); 
        newArray.push({
            fieldName: tokenizationDetails.tokenizationDetails.fieldName,
            dataType: tokenizationDetails.tokenizationDetails.dataType,
            type:tokenizationDetails.tokenizationDetails.type,
            size:tokenizationDetails.tokenizationDetails.size,
            encodingType:tokenizationDetails.tokenizationDetails.encodingType,
            sectionDataType: tokenizationDetails.tokenizationDetails.sectionDataType
        }); 

        this.setState({fields:newArray}) 
        this.setState({tableData:newArray}) 

        const arrayCopy = this.state.fields.filter((row) => row.sectionDataType===tokenizationDetails.tokenizationDetails.sectionDataType);
        this.setState({tableData:arrayCopy});
    }

    onSectionDataTypeSelect(event,value,index){

        const arrayCopy = this.state.fields.filter((row) => row.sectionDataType===value);
        this.setState({tableData:arrayCopy});

        this.setState({selectedSectionItem:value});
    }

    handleChange(event, value){
        this.setState({ delimitedTokenValue : value});
    }
 
    onMenuChange()
    {
       this.setState({viewTextbox:true});
    }
    
    onFixed()
    {
        this.setState({viewTextbox:false});
    }

    callParent(){
        this.props.onSetToken(this.refs.form.getModel().extType,this.state.delimitedTokenValue,this.state.fields)
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}
