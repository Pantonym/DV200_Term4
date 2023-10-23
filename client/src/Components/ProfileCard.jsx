import React, { useState } from "react"
import "./ProfileCard.css"

//bootstrap
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ProfileCard = (props) => {

    const [updateProfile, setUpdateProfile] = useState();

    const update = (e) => {
        document.getElementById("default").style.display = 'none'
        document.getElementById("update-user-profile").style.display = 'block'
    }
    const serverURL = 'http://localhost:5002/images';
    const imageURL = `${serverURL}/${props.image}`;

    return (
        <>
            <div className="profilecard-container" style={{ display: 'block' }} id='default'>
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2}>
                    <img src={imageURL} className="question_img"></img>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className="profilecard-userInfo-con">
                            <div>
                                <h1 style={{ marginTop: 0 }} > {props.username} </h1>
                                <h3>ID Number: {props.id} </h3>
                                <p className="interests-text">Interests:</p>
                                <div className="userInfo-tags">
                                    <button>javascript</button>
                                    <button>CSS</button>
                                    <button>HTML</button>
                                    <button className="userInfo-tags-add">+</button>
                                </div>
                            </div>
                            <div className="profilecard-stats">
                                {/* asked */}
                                <div className="profilecard-stats-asked">
                                    <p>Questions Asked: </p>
                                    <p>00</p>
                                </div>
                                {/* answered  */}
                                <div className="profilecard-stats-answered">
                                    <p>Questions Answered: </p>
                                    <p>00</p>
                                </div>
                                {/* likes  */}
                                <div className="profilecard-stats-likes">
                                    <p>Likes: 00</p>
                                    {/* <p> 00</p> */}
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Button onClick={update} className="profilecard-Logout-btn" variant="outlined" sx={{ color: 'orange', border: "solid 1px orange" }}>Update</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default ProfileCard