import React, { useState, useEffect } from "react";
import axios from "axios";

const DataPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make a GET request to your server's API endpoint
        axios.get("/Atalhos")
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Data Page</h1>
            <ul>
                {data.map(item => (
                    <li key={item._id}>
                        {item.nomeApp}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataPage;
