import React from 'react';
import Paper from 'material-ui/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FlatButton from 'material-ui/FlatButton';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: props.currentTask.title ? props.currentTask.title : '',
      description: props.currentTask.description ? props.currentTask.description : '',
      days: props.currentTask.days ? props.currentTask.days : '',
      status: props.currentTask.status ? props.currentTask.status : '',
      id: props.currentTask.id,
      taskWeek: props.currentTask.taskWeek,
      taskDay: props.currentTask.taskDay,
      error: '',
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onCancel = (e) => {
    this.props.onCancel();
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.status) {
        this.setState(() => ({ error: 'Please provide title and status' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        days: this.state.days,
        status: this.state.status,
        taskWeek: this.state.taskWeek,
        taskDay: this.state.taskDay,
        id: this.state.id,
      })
      this.onCancel();
    }
  }

  render() {
    const {
      currentTask
    } = this.props;
    console.log(currentTask);
    return (
      <Paper className="modal-container">
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
        <FlatButton onClick={this.onSubmit} className="submit-task-btn">Submit</FlatButton>
        <FlatButton onClick={this.onCancel}>Cancel</FlatButton>
      </Paper>
    )
  }
}

export default TaskForm;