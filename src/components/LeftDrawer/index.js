import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import People from 'material-ui/svg-icons/social/people';
import Interaction from 'material-ui/svg-icons/communication/contacts';

// import { changeFormType } from '../../state/selections/actions';
let styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 22,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: '#E91E63',
    paddingLeft: 40,
    height: 56,
  },
  menuItem: {
    color: white,
    fontSize: 14
  },
  avatar: {
    div: {
      padding: '15px 0 20px 15px',
      // backgroundImage:  'url(' + require('../../images/bg-triangle-sm.svg') + ')',
      backgroundColor: '#af0a4b',
      height: 45,
    },
    icon: {
      float: 'left',
      display: 'block',
      marginRight: 15,
      boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
    },
    span: {
      paddingTop: 12,
      display: 'block',
      color: 'white',
      fontWeight: 300,
      textShadow: '1px 1px #444',
    }
  }
}

class LeftDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ formType: nextProps.formType })
  }

  formSelect = (value) => {
    console.log(value);
    this.props.changeFormType(value);
  };

  render() {
    const {
      navDrawerOpen,
      menus,
      username
    } = this.props;
    return (
      <Drawer
        docked={true}
        open={navDrawerOpen}>
          <div style={styles.logo}>
            Data Retriever
          </div>
          <div style={styles.avatar.div}>
            <Avatar src=""
                    size={50}
                    style={styles.avatar.icon}/>
            <span style={styles.avatar.span}>{username}</span>
          </div>
          <div>
            {menus.map((menu, index) =>
              menu.text === 'Tracker' ? (
                <MenuItem
                  primaryText={menu.text}
                  checked={true}
                  style={styles.menuItem}
                  leftIcon={menu.icon}
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <MenuItem primaryText="Interactions" value={'interaction'} onClick={() =>{ this.formSelect('interactions') }} leftIcon={<Interaction />} insetChildren={true} containerElement={<Link to='/form'/>}/>,
                    <MenuItem
                      primaryText="Events"
                      leftIcon={<People />}
                      rightIcon={<ArrowDropRight />}
                      menuItems={[
                        <MenuItem primaryText="General" value={'general-events'} onClick={() =>{ this.formSelect('general-events') }} insetChildren={false} containerElement={<Link to='/form'/>} />,
                        <MenuItem primaryText="Gala" value={'gala'} onClick={() =>{ this.formSelect('gala')}} insetChildren={false} containerElement={<Link to='/form'/>} />,
                      ]}
                    />,
                  ]}
                />
              ) : (
                <MenuItem
                  key={index}
                  style={styles.menuItem}
                  primaryText={menu.text}
                  leftIcon={menu.icon}
                  containerElement={<Link to={menu.link} />}
              />
              )
            )}
          </div>
      </Drawer>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeFormType: (type) => dispatch(changeFormType(type)),
});

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(LeftDrawer);
