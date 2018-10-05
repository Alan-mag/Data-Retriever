import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import './style.scss';

const BrowserUsage = (props) => {

  return (
    <Paper className="paper">
      <span className="title">Browser Usage</span>

      <div className="clear" />

      <div className="row">

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <PieChart className="pie-chart">
                <Pie
                  innerRadius={80}
                  outerRadius={130}
                  data={props.data}
                  fill="#8884d8">
                  {
                    props.data.map((item) => <Cell key={item.name} fill={item.color}/>)
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="legend">
            <div className="legend">
              <List>
                {props.data.map((item) =>
                  <ListItem
                    key={item.name}
                    leftAvatar={
                      <Avatar icon={item.icon}
                              backgroundColor={item.color}/>
                    }>
                    {item.name}
                  </ListItem>
                )}
              </List>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

BrowserUsage.propTypes = {
  data: PropTypes.array
};

export default BrowserUsage;