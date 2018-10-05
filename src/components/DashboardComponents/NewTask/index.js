import React from 'react';
import './styles.scss';
import Paper from 'material-ui/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FlatButton from 'material-ui/FlatButton';


// new template for creating task card
class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      days: '',
      status: '',
    }
  }

  // updateField = (field, value) => {
  //   this.setState({[field]: value})
  // }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleAdd = () => {
    this.props.onAdd(this.state);
  }

  render() {
    const {onCancel} = this.props
    return (
      <div className="new-task-container">
        <Card>
          <Paper>
            <FormGroup className="new-task-form">
            <div className="text-fields">
            <TextField
              id="title"
              label="Title"
              value={this.state.title}
              onChange={this.handleChange('title')}
            />
            <TextField
              id="description"
              label="Description"
              value={this.state.description}
              onChange={this.handleChange('description')}
            />
            <TextField
              id="days-to-complete"
              label="Days To Complete"
              value={this.state.days}
              onChange={this.handleChange('days')}
            />
            </div>
            <label>Status</label>
            <FormControlLabel control={
              <Radio value="Not Started"
                     label="Not Started"
                     checked={this.state.status === 'Not Started'}
                     onChange={this.handleChange('status')} />} 
              label="Not Started" 
            />
            <FormControlLabel control={
              <Radio value="On Hold"
                     label="On Hold"
                     checked={this.state.status === 'On Hold'}
                     onChange={this.handleChange('status')} />} 
              label="On Hold" 
            />
            <FormControlLabel control={
              <Radio value="In Progress"
                     label="In Progress"
                     checked={this.state.status === 'In Progress'}
                     onChange={this.handleChange('status')} />} 
              label="In Progress" 
            />
            <FormControlLabel control={
              <Radio value="Complete"
                     label="Complete"
                     checked={this.state.status === 'Complete'}
                     onChange={this.handleChange('status')} />} 
              label="Complete" 
            />
            <FlatButton onClick={this.handleAdd}>Submit</FlatButton>
            <FlatButton onClick={onCancel}>Cancel</FlatButton>
            </FormGroup>
          </Paper>
        </Card>
      </div>
    )
  }
}

export default NewTask;
