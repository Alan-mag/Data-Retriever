import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {white, purple600, purple500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import {typography} from 'material-ui/styles';

import './style.scss';

const NewOrders = (props) => {

  return (
    <Paper id="paper-orders">
      <div className="orders-header">Weekly Interactions</div>
      <div className="orders-container">
        <ResponsiveContainer >
          <LineChart data={props.data}>
            <Tooltip labelFormatter={(index) => props.data[index].name} />
            <Line type="monotone" dataKey="interactions" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

NewOrders.propTypes = {
  data: PropTypes.array
};

export default NewOrders;

// <XAxis dataKey="name" stroke="#8884d8" />