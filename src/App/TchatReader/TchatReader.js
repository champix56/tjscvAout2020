import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatReader.module.scss';
import TchatMessage from '../TchatMessage/TchatMessage';

const TchatReader = (props) => {
  return (
  <div className={styles.TchatReader} data-testid="TchatReader">
    {props.messages.map(e=>{
      return <TchatMessage message={e} isMine={props.whoiamID===e.sender}/>
    })}
  </div>
);}

TchatReader.propTypes = {
  messages:PropTypes.array.isRequired, 
  whoiamID:PropTypes.number.isRequired
};

TchatReader.defaultProps = {};

export default TchatReader;
