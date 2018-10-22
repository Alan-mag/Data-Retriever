/* global gapi */

import React from 'react';
import $ from 'jquery'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Button from '@material-ui/core/Button';
import Agenda from 'material-ui/svg-icons/action/assignment';
import Chat from 'material-ui/svg-icons/communication/chat';
import NotePad from 'material-ui/svg-icons/notification/event-note';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from 'material-ui/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import InfoBox from '../../components/DashboardComponents/InfoBox';
import NewOrders from '../../components/DashboardComponents/NewOrders';
import MonthlyInteractions from '../../components/DashboardComponents/MonthlyInteractions';
import SearchBox from '../../components/SearchBox';

import CustomCard from '../../components/DashboardComponents/CustomCard';
import TaskForm from '../../components/DashboardComponents/TaskForm';
import {typography} from 'material-ui/styles';
import './styles.scss';

import App from '../App';

const styles  = {
  navigation: {
    fontSize: 15,
    fontWeight: typography.fontWeightLight,
    paddingBottom: 15,
    display: 'block'
  },
  header : {
    width: 150,
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.handleAllDownload = this.handleAllDownload.bind(this);
    this.state = {
      error: null,
      checkedA: true,
      checkedB: true,
      checkedC: true,
      checkedD: true,
      checkedE: true,
      checkedF: true,
      checkedG: true,
      checkedH: true,
      checkedI: true,
      checkedJ: true,
      checkedK: true,
      checkedL: true,
      checkedM: true,
      checkedN: true,
      checkedO: true,
      checkedP: true,
      checkedQ: true,
      checkedR: true,
    }
  }

  handleChange = name => event => {
    console.log(name)
    this.setState({ [name]: event.target.checked });
  };

  handleAllDownload = (e) => {
    e.preventDefault();
    console.log('down')
    // access db ref from blackbaud and get data
  } 


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    return {};
 }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <App>
        <h3 className="navigation" style={styles.navigation} >Application / Data Pull</h3>
        {/********* ROW *********/}
        <div className="row">
          <SearchBox></SearchBox>
          <FlatButton id="download-btn">Download Data</FlatButton>
          <FlatButton id="download-btn" onClick={this.handleAllDownload}>Download All Data</FlatButton>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox 
                        value="checkedA" 
                        checked={this.state.checkedA} 
                        color="primary" 
                        onChange={this.handleChange('checkedA')}
                        />}
              label="Basic Info"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup row>
            <FormControlLabel 
              control={<Checkbox value="checkedB" checked={this.state.checkedB} onChange={this.handleChange('checkedB')} />}
              label="Phone(s)"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedC" checked={this.state.checkedC} onChange={this.handleChange('checkedC')} />}
              label="Addresse(s)"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedD" checked={this.state.checkedD} onChange={this.handleChange('checkedD')} />}
              label="Addressee/Salutation"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup row>
            <FormControlLabel 
              control={<Checkbox value="checkedE" checked={this.state.checkedE} onChange={this.handleChange('checkedE')} />}
              label="Actions"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedF" checked={this.state.checkedF} onChange={this.handleChange('checkedF')} />}
              label="Education"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox 
                        value="checkedG" 
                        checked={this.state.checkedG} 
                        onChange={this.handleChange('checkedG')}
                        color="primary" 
                        />}
              label="Attributes"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup row>
            <FormControlLabel 
              control={<Checkbox value="checkedH" checked={this.state.checkedH} onChange={this.handleChange('checkedH')} />}
              label="Bank Info"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedI" checked={this.state.checkedI} onChange={this.handleChange('checkedI')} />}
              label="Appeals"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedJ" checked={this.state.checkedJ} onChange={this.handleChange('checkedJ')} />}
              label="Prospect"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup row>
            <FormControlLabel 
              control={<Checkbox value="checkedK" checked={this.state.checkedK} onChange={this.handleChange('checkedK')} />}
              label="Gifts"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedL" checked={this.state.checkedL} onChange={this.handleChange('checkedL')} />}
              label="Gifts Misc."
            />
            <FormControlLabel 
              control={<Checkbox value="checkedM" checked={this.state.checkedM} onChange={this.handleChange('checkedM')} />}
              label="Gift Details"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedN" checked={this.state.checkedN} onChange={this.handleChange('checkedN')} />}
              label="Gift Tribute"
            />
            <FormControlLabel 
              control={<Checkbox value="checkedO" checked={this.state.checkedO} onChange={this.handleChange('checkedO')} />}
              label="Soft Credit"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox 
                        value="checkedP" 
                        checked={this.state.checkedP} 
                        onChange={this.handleChange('checkedP')}
                        color="primary" 
                      />}
              label="Relationships"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox 
                        value="checkedQ" 
                        checked={this.state.checkedQ} 
                        onChange={this.handleChange('checkedQ')}
                        color="primary" 
                      />}
              label="Media"
            />
          </FormGroup>
        </div>

        {/********* ROW *********/}
        <div className="row">
          <FormGroup>
            <FormControlLabel 
              control={<Checkbox 
                        value="checkedR" 
                        checked={this.state.checkedR} 
                        onChange={this.handleChange('checkedR')}
                        color="primary" 
                      />}
              label="Notes"
            />
          </FormGroup>
        </div>

      </App>
    );
  }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

Dashboard.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);