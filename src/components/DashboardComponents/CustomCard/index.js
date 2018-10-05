import React from 'react';
import './styles.scss';
import { darkWhite, purple500 } from '../../../../node_modules/material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Card from '@material-ui/core/Card';

const CustomCard = props => {
  return (
    <Card style={{borderRadius: 0}}>
      <Paper
        className="header-container"
        style={{
          borderBottom: '1px solid #eee',
          borderRadius: 0,
          padding: 6,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: darkWhite,
          backgroundColor: '#009688'
        }}>
        <div style={{fontSize: 14, fontWeight: 'bold'}}>{props.title}</div>
        <div style={{fontSize: 11}}>{props.label}</div>
      </Paper>
      <div style={{fontSize: 12, color: '#BD3B36'}}>
        <div style={{padding: 5, color: '#4C4C4C', fontWeight: 'light'}}>Description: <br />{props.description}</div>
        <div style={{padding: 5, color: '#4C4C4C', fontWeight: 'light'}}>Days to Complete: {props.days}</div>
        <div style={{padding: 5, color: '#4C4C4C', fontWeight: 'light'}}>Status: {props.status}</div>
        {/*<div style={{padding: '5px 0px'}}>
          <i>{props.description}</i>
        </div>
        <div style={{marginTop: 10, textAlign: 'center', color: props.cardColor, fontSize: 15, fontWeight: 'bold'}}>
          {props.id}
        </div>
      */}
      </div>
    </Card>
  )
}

export default CustomCard;