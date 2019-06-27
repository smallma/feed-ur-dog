import React, { useState, useContext, useReducer, useCallback } from 'react';
import DatePicker from 'react-date-picker';
// import {connect} from 'react-redux';
import reducer from '../reducers'
import {useMappedState, useDispatch} from 'redux-react-hook';


import './BirthDate.scss'


function BirthDate() {
  const dispatch = useDispatch();
  const birthGlobal = useMappedState(state=> state.updateBirth);
  // console.log('birthD: ', birthD);
  //
  const initState = {
    birth: new Date().getTime()
  }

  const [birthD, setBirthD] = useState(initState)

  // const [state, dispatch] = useReducer(reducer, initState)


  // const [birth, setBirth] = useState({
    // innerDate: birthD.birth
  // });

  // const _updateRedux = useCallback(() => dispatch({ type: 'UPDATE_BIRTH', 'birth': '123' }),[dispatch]);

  const _updateRedux = useCallback((a) => dispatch({ type: 'UPDATE_BIRTH', payload: { birth: JSON.stringify(a)}}),[dispatch]);


  return (


    <div className="birth_date">
      <DatePicker
        onChange={(birthDate) => {
          if (birthDate && typeof birthDate.getTime === 'function') {

            console.log('birthDate: ', JSON.stringify(birthDate));

            // dispatch({ type: 'UPDATE_BIRTH', payload: { birth: JSON.stringify(birthDate) } })
            _updateRedux(birthDate.getTime());
            setBirthD({ birth: birthDate.getTime()})
            console.log('birthGlobal: ', birthGlobal);
          }
        }}
        value= {new Date(birthD.birth)}
      />

      <span>{JSON.stringify(birthD)}</span>
    </div>
  );
}

export default BirthDate;