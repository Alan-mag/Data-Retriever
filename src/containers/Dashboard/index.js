/* global gapi */

import React from 'react';
import $ from 'jquery'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
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
import Report from '../../components/Report';
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
    this.state = {
      error: null,
    }
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

        <div className="row">
          <SearchBox></SearchBox>
          <FlatButton id="download-btn">Download Data</FlatButton>
        {/*
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <a target="_blank" style={{ textDecoration: 'none' }} href="https://wvcfoundation.slack.com/messages">
              <InfoBox Icon={Chat}
                      color="pink600"
                      title="Team Chat"
                      value="Slack"
              />
            </a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <a target="_blank" style={{ textDecoration: 'none' }} href="https://docs.google.com/document/d/1zONDdEPMi_4S19MRJvIZj6p5TpCIs97UqOI_CFKS004/edit">
              <InfoBox Icon={Agenda}
                      color="cyan600"
                      title="Weekly Agenda"
                      value="Docs"
              />
            </a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <a target="_blank" style={{ textDecoration: 'none' }} href="https://docs.google.com/spreadsheets/d/13xM7oEnd_4kOJQh_GKaYIksSk9u0YF7eRUpDYjJag9A/edit?usp=sharing_eip&ts=5b3bf989">
              <InfoBox Icon={NotePad}
                      color="orange600"
                      title="Calendar"
                      value="Upcoming"
              />
            </a>
          </div>
          */}
        </div>
        <div className="row">
          
        </div>

        <div className="row">

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