import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Paper from 'material-ui/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FlatButton from 'material-ui/FlatButton';

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportWeek: 'this_week'
    }
  }
  // handle option change
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  // submit generate button
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.reportWeek) {
      alert('please choose report week')
    } else {
      this.props.onSubmit({
        reportWeek: this.state.reportWeek
      })
    }
  }
  // cancel modal
  onCancel = (e) => {
    this.props.onCancel();
  }

  render() {
    return (
      <Paper className="modal-container">
        <h2>Create Report</h2>
          <label>This Week</label>
          <div>
          <FormControlLabel control={
            <Radio value="this_week"
                  label="This Week"
                  checked={this.state.reportWeek === 'this_week'}
                  onChange={this.handleChange('reportWeek')} />} 
            label="This Week" 
          />
          <FormControlLabel control={
            <Radio value="next_week"
                  label="Next Week"
                  checked={this.state.reportWeek === 'next_week'}
                  onChange={this.handleChange('reportWeek')} />} 
            label="Next Week" 
          />
        </div>
        <FlatButton onClick={this.onSubmit}>Generate Report</FlatButton>
        <FlatButton onClick={this.onCancel}>Cancel</FlatButton>
      </Paper>
    )
  }
}

export default Report;