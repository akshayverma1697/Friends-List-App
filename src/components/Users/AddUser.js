import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = (props) => {

    const [enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    //function when submit button is pressed
    const addUserHandler = (event) => {
        event.preventDefault();
        if ((enteredUser.trim().length === 0) || (enteredAge.trim().length === 0)) {
            return;
        }
        else if (enteredAge < 1) {
            return;
        }
        else {
            props.onAddUser(enteredUser, enteredAge)
            setEnteredUser('');
            setEnteredAge('');
        };

    };

    const nameEditHandler = (event) => {
        console.log('things are being changed: ', event.target.value);
        setEnteredUser(event.target.value);
    };

    const ageEditHandler = (event) => {
        console.log('things are being changed: ', event.target.value);
        setEnteredAge(event.target.value)
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUser}
                    onChange={nameEditHandler}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={ageEditHandler}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>

    );
};

export default AddUser;