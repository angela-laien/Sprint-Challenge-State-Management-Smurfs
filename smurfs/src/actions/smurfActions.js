import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const SET_ERROR = 'SET_ERROR';
export const MAKE_SMURF = 'MAKE_SMURF';

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({type: UPDATE_SMURFS, payload: res.data});
        })
        .catch(err => {
            console.error('error fetching data from api, err: ', err);
            dispatch({type: SET_ERROR, payload: 'Error fetching data from api'});
        });
};

export const makeSmurf = smurf => dispatch => {
    dispatch({type:MAKE_SMURF});
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
};