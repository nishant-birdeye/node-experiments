import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

export function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        {props.user ? <React.Fragment>
          <span>{props.user.name}</span>
          <img alt="user" src={props.user.profileImage} />
        </React.Fragment>
          : <a href="/login">Login</a>
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Header;
