import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ClassesAttend = (props) => {
    const [attend, setAttend] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`https://anywhere-fitness-bw.herokuapp.com/classes/${id}/attendees`)
        .then(response => {
            console.log("this is the response", response)
        })
        .catch(error => {
            console.error(error);
        });
    },[id]);
    return null;
}

export default ClassesAttend;