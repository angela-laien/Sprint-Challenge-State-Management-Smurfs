import React from 'react';
import {connect} from 'react-redux';
import{getData} from '../actions/smurfActions';

const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                <div className='background' key={smurf.id}>
                    <h3 className='smurf'>{smurf.name}</h3>
                    <h5 className='smurf'>{smurf.age}</h5>
                    <h5 className='smurf'>{smurf.height}</h5>
                </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
    };
};

export default connect(
    mapStateToProps, {getData}
)(Smurfs);