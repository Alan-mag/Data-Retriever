import React from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

const SearchBox = () => {

  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {
      color: white,
      // backgroundColor: blue500,
      borderRadius: 2,
      height: 35
    },
    inputStyle: {
      // color: white,
      // paddingLeft: 5,
      // backgroundColor: 'rgb(44, 1, 66)',


      padding: '0px 0px 0px 5px',
      position: 'relative',
      width: 300,
      border: 'none',
      outline: 'none',
      backgroundColor: white,
      color: 'rgb(105, 104, 104)',
      cursor: 'inherit',
      font: 'inherit',
      opacity: 1,
      '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
      height: '100',
      border: '1px solid #80808038',
      borderRadius: 2,
    },
    hintStyle: {
      height: 20,
      paddingLeft: 5,
      zIndex: 2,
      color: 'rgb(105, 104, 104)'
    }
  };

  return (
    <div>
      <TextField
        hintText="Search..."
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
      />
    </div>
  );
};

export default SearchBox;