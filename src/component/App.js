import React, {useCallback} from 'react';
import {Provider, connect} from 'react-redux';
// import {useMappedState} from 'redux-react-hook';
import {useMappedState} from 'redux-react-hook';

import TopBanner from './TopBanner'
import BirthDate from './BirthDate'
import './App.scss'


function App() {
  // const mapState = useCallback(state => state.birthdate);
  // const birthD = useMappedState(mapState);

  // const birthD = useMappedState(state=> state.birthdate);

  const birthGlobal = useMappedState(state=> state.updateBirth);

  return (
      <div className="makeup">
        <TopBanner />
        <div className="container">
          <BirthDate />
        </div>

        {<div>outer: {JSON.stringify(birthGlobal.list)}</div>}
      </div>
  );
}

export default App;