import React, { useState, useEffect } from "react";

// CSS 
import './HomeQuestionCard.css';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

// Axios import
import Axios from "axios";

const HomeQuestionCard = ({ user, title, date, text, id }) => {
    const [username, setUsername] = useState("");

    // Get specific user
    useEffect(() => {
        Axios.get('http://localhost:5000/api/getUser/' + user)
            .then((res) => {
                setUsername(res.data.username);
            })
            .catch((err) => {
                console.error(`Error fetching user data: ${err.message}`);
            });
    }, [user]); // Fetch data when props.user changes

    return (
        <div>
            <div className="homeQuestionCard-con">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid xs={12}>
                        <h2>{title}</h2>
                    </Grid>
                    <Grid xs={12}>
                        <p>{username}</p>
                    </Grid>
                    <Grid xs={12}>
                        <p>{date}</p>
                    </Grid>
                    <Grid xs={12} sx={{ width: '900px', margin: 'auto' }}>
                        <p>
                            {text}
                        </p>
                    </Grid>
                    {/* tags  */}
                    <Grid xs={12}>
                        <Chip label="Tags" variant="outlined" />
                    </Grid>
                    <Grid xs={12} sx={{ marginTop: '20px' }}>
                        <Button variant="contained" id={"btnReadMore_" + id} onClick={() => { sessionStorage.setItem("QuestionClick", id) }} href="/Question">Read More</Button>
                    </Grid>
                </Box>
            </div>
            <br></br>
        </div>
    )
}
export default HomeQuestionCard