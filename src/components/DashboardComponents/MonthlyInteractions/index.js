import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {white, pink500} from 'material-ui/styles/colors';
// import getMonthlyInteractions from '../../../logics/interactionData';

import './style.scss';

const MonthlyInteractions = (props) => {
  return (
    <Paper id="paper-monthly">
      <div className="title">Monthly Interactions</div>
      <div className="response-container">
        <ResponsiveContainer>
          <BarChart data={props.data} >
            <Tooltip />
            <Bar dataKey="interactions" fill={pink500}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: white}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

MonthlyInteractions.propTypes = {
  data: PropTypes.array
};

export default MonthlyInteractions;