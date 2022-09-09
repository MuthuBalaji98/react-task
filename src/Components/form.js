import React, { useState } from "react";
import './form.css';
import { useNavigate } from "react-router-dom";

function Form(props) {

    let navigate=useNavigate();

    const [form, setForm] = useState({
        name: '',
        item: '',
        offer: '',
        price: ''
    });

    const resHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, name: event.target.value }
        });
    }
    const varHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, item: event.target.value }
        });
    }
    const offHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, offer: event.target.value }
        });
    }
    const priHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, price: event.target.value }
        });
    }
    const subjectHandler = (a) => {
        a.preventDefault();
        const addedform = { ...form, id: Math.random().toString() }
        props.onFormAdded(addedform);
        setForm({
            id:'',
            name: '',
            item: '',
            offer: '',
            price: ''
        })
        navigate("../success",{replace: true});
    }

    return (
        <div className="form">
            <h3>Add New Food</h3>
            <form onSubmit={subjectHandler}>
                <input type="text" placeholder="Name"  onChange={resHandler}></input>
                <input type="text" placeholder="Item"  onChange={varHandler}></input>
                <input type="number" placeholder="Offers"  onChange={offHandler}></input>
                <input type="number" placeholder="Price"  onChange={priHandler}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form;