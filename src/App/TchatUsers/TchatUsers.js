import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatUsers.module.scss';
import TchatUser from '../TchatUser/TchatUser';
const TchatUsers = (props) => (
  <div className={styles.TchatUsers} data-testid="TchatUsers">
    <ul>
      {props.users.map(e=><TchatUser user={e}/>)}
    </ul>
  </div>
);

TchatUsers.propTypes = {users:PropTypes.array.isRequired};

export default TchatUsers;
