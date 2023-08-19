import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = (props) => {
    //function when submit button is pressed
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('submit button pressed here is the data: ', event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" className={classes.label}>Username</label>
                <input id="username" type="text" className={classes.input}/>
                <label htmlFor="age" className={classes.label}>Age (Years)</label>
                <input id="age" type="number" className={classes.input}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>

    );
};

export default AddUser;