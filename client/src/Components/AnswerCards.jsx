import React, { useState } from "react"

// CSS 
import './AnswerCard.css'

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { BiXCircle } from 'react-icons/bi';

// Axios import
import Axios from "axios";

const AnswerCards = (props) => {

    const [username, setUsername] = useState();

    // Get specific user
    Axios.get('http://localhost:5000/api/getUser/' + props.user)
        .then(res => { setUsername(res.data.username) })
        .catch(err => console.log(err))

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    {/* Column 1 the user avatar */}
                    <Grid xs={2}>
                        <Grid xs={12}>
                            <Avatar sx={{ width: '110px', height: '110px', margin: 'auto' }}>H</Avatar>
                        </Grid>
                        <Grid xs={12}>
                            <p>{username}</p>
                        </Grid>
                    </Grid>
                    {/* Column 2  */}

                    <Grid xs={8}>
                        <Grid>
                            <Grid>
                                <h1>{props.title}</h1>
                            </Grid>
                            <Grid>
                                <p>
                                    {props.text}
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* colomn 3  */}
                    <Grid xs={2}>
                        {/* answer Delete Button  */}
                        <Button variant="contained" sx={{ margin: "auto" }}><BiXCircle />Delete</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default AnswerCards