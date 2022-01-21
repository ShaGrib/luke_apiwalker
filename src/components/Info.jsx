import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Info = () => {
    const { category, id } = useParams();

    let [info, setInfo] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`).then(response => {
            console.log(response);
            setInfo(response.data);
        }).catch(error => { console.log(error); });
    }, [category, id]);

    return (
        <div>
            {
                category === "people" ?
                    <>
                        <h1 className="mb-4">Name: {info.name}</h1>
                        <p>Birth Year: {info.birth_year}</p>
                        <p>Eye Color: {info.eye_color}</p>
                        <p>Gender: {info.gender}</p>
                        <p>Hair Color: {info.hair_color}</p>
                        <p>Height: {info.height}</p>
                        <p>Mass: {info.mass}</p>
                        <p>Skin Color: {info.skin_color}</p>
                    </>
                    : category === "planets" ?
                        <>
                            <h1 className="mb-4">Name: {info.name}</h1>
                            <p>Gravity: {info.gravity}</p>
                            <p>Climate: {info.climate}</p>
                            <p>Terrain: {info.terrain}</p>
                            <p>Population: {info.population}</p>
                            <p>Diameter: {info.diameter}</p>
                        </>
                        : category === "starships" ?
                            <>
                                <h1 className="mb-4">Name: {info.name}</h1>
                                <p>Model: {info.model}</p>
                                <p>Manufacturer: {info.manufacturer}</p>
                                <p>Cost in Credits: {info.cost_in_credits}</p>
                                <p>Max Atmospheric Speed: {info.max_atmosphering_speed}</p>
                                <p>Crew: {info.crew}</p>
                                <p>Passengers: {info.passengers}</p>
                                <p>Cargo Capacity: {info.cargo_capacity}</p>
                                <p>Hyperdrive Rating: {info.hyperdrive_rating}</p>
                            </>
                            : category === "films" ?
                                <>
                                    <h1 className="mb-4">Title: {info.title}</h1>
                                    <p>Episode #: {info.episode_id}</p>
                                    <p>Director: {info.director}</p>
                                    <p>Release Date: {info.release_date}</p>
                                    <p>Opening Crawl: {info.opening_crawl}</p>
                                </> : category === "vehicles" ?
                                    <>
                                        <h1 className="mb-4">Name: {info.name}</h1>
                                        <p>Crew: {info.crew}</p>
                                        <p>Length: {info.length}</p>
                                        <p>Cargo Capacity: {info.cargo_capacity}</p>
                                        <p>Model: {info.model}</p>
                                        <p>Manufacturer: {info.manufacturer}</p>
                                    </> : category === "species" ?
                                        <>
                                            <h1 className="mb-4">Name: {info.name}</h1>
                                            <p>Language: {info.language}</p>
                                            <p>Classification: {info.classification}</p>
                                            <p>Average Lifespan: {info.average_lifespan}</p>
                                            <p>Average Height: {info.average_height}</p>
                                        </> :
                                        <>
                                            <h1>These are not the droids you're looking for</h1>
                                            <img src="https://cdn.mos.cms.futurecdn.net/9R7qcYvf74sqdXzVGAUtCJ.jpg" alt="Obi What? Kenobi" />
                                        </>
            }
        </div >
    );
};

export default Info;