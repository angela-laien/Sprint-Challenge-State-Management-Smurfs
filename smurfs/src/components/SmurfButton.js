import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/smurfActions';

const SmurfButton = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return (
        <div>
            {props.isFetchingData ? (
                <div>Loading your smurf village...</div>
            ) : (
                <button onClick={handleGetData}>Visit Village</button>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps, {getData}
)(SmurfButton);