import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
    let [categories, setCategories] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('people');
    let [id, setId] = useState(null);

    const history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then((response) => {
                console.log(response);
                console.log(Object.keys(response.data));
                setCategories(Object.keys(response.data));
            }).catch(err => { console.log(err); });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${selectedCategory}/${id}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex justify-content-between" action="">
                <div className="form-group d-flex">
                    <label className="text-nowrap" htmlFor="">Search For: </label>
                    <select onChange={(e) => { setSelectedCategory(e.target.value) }} className="form-select" name="" id="">
                        {
                            categories.map((cat, i) => {
                                return (
                                    <option key={i} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group d-flex">
                    <span>ID: </span>
                    <input onChange={(e) => { setId(e.target.value) }} className="form-control" type="number" name="" id="" />
                </div>
                <input className="btn btn-primary" type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Form;