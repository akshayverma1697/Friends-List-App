import React from "react";
import Card from "../UI/Card";
//import classes from './AddUser.module.css'

const AddUser = (props) => {
    //function when submit button is pressed
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('submit button pressed here is the data: ', event.target.value);
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <button type="submit">Submit</button>
            </form>
        </Card>

    );
};

export default AddUser;