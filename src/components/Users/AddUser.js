import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = (props) => {

    const[enteredUser, setEnteredUser] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    //function when submit button is pressed
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredAge, enteredUser)
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
                <label htmlFor="username" className={classes.label}>Username</label>
                <input id="username" type="text" className={classes.input} onChange={nameEditHandler}/>
                <label htmlFor="age" className={classes.label}>Age (Years)</label>
                <input id="age" type="number" className={classes.input} onChange={ageEditHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>

    );
};

export default AddUser;