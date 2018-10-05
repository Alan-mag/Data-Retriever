import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {white, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

import './style.scss';

class InfoBox extends React.Component {

  render() {
    const {Icon, color, title, value} = this.props;

    return (
      <Paper>
        <span className={`icon-span ${color}`}>
          <Icon className="icon" color={white} />
        </span>

        <div className="content">
          <span className="text">{title}</span>
          <span className="number">{value}</span>
        </div>
      </Paper>
      );
  }
}

InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
};

export default InfoBox;