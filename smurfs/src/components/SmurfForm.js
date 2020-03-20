import React, {useState} from 'react';
import {connect} from 'react-redux';
import {makeSmurf} from '../actions/smurfActions';

const SmurfForm = props => {

    const [babySmurf, setBabySmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {

        setBabySmurf({
            ...babySmurf,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.makeSmurf(babySmurf);
        setBabySmurf({
            name: '',
            age: '',
            height: ''
        });
    };

    return (
        <div>
            <input
                type = 'text'
                name = 'name'
                value = {babySmurf.name}
                onChange = {handleChanges}
                placeholder = 'Smurf name'
            />
            <input
                type = 'text'
                name = 'age'
                value = {babySmurf.age}
                onChange = {handleChanges}
                placeholder = 'Smurf age'
            />
            <input
                type = 'text'
                name = 'height'
                value = {babySmurf.height}
                onChange = {handleChanges}
                placeholder = 'Smurf height'
            />
            <button className='button' onClick={handleSubmit}>
                Add Smurf
            </button>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        name: state.name,
        age: state.age,
        height: state.height
    }
};

export default connect (
    mapStateToProps, {makeSmurf}
)(SmurfForm);