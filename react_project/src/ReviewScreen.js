import React, { useState, useEffect } from "react";
import "./App.css";

export function ReviewScreen() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "get",
            headers: myHeaders,
            redirect: "follow",

        };
        fetch("https://v1.nocodeapi.com/calebmcclure/google_sheets/sfwrdAWrqvFOoVFt?tabId=FormResponses&filterBy=Building&filterValue=SRC", requestOptions)
            .then(response => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData.data);
                console.log(data);
            }
            );
    };

useEffect(() => {
    fetchData();
}, []);

    return (
        <div className="ReviewScreen">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Bathroom</th>
                    <th>Floor</th>
                    <th>Accessible</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
                {data.map((review, index) => (
                    <tr key={index}>
                        <td>{review.Name}</td>
                        <td>{review.Building}</td>
                        <td>{review.Floor}</td>
                        <td>{review.Accessible}</td>
                        <td>{review.Rating}</td>
                        <td>{review.Review}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default ReviewScreen
