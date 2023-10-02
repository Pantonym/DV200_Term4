import React from "react";

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// css
import './HomePage.css'

// components
import HomeQuestionCard from "../Components/HomeQuestionCard";


function HomePage() {
    return (
        <>
            <div className="home-page-main-con">

                {/* Section 1 (Landing view) */}
                <Box sx={{ flexGrow: 1, width: '100%', height: '964px' }}>
                    <Grid container spacing={0}>
                        {/* text content */}
                        <Grid xs={6} sx={{ margin: 'auto',}}>
                            <h1>Welcome to Open Dev Q&A site.</h1>
                            <p>
                                Description:
                                Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </Grid>
                        {/* Image coloumn  */}
                        <Grid xs={6} sx={{ margin: 'auto',}}>
                            <div className="image-placeholder"></div>
                        </Grid>
                    </Grid>
                </Box>

                {/* Section 2  */}
                <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
                    {/* row 1 */}
                    <Grid container spacing={0}>
                        <Grid xs={12} sx={{ marginTop: '20px' }}>
                            <input type="text" placeholder="Ask a Question" className="home-ask-question-input"></input>
                        </Grid>
                        <Grid xs={12} sx={{ marginTop: '20px' }}>
                            <input type="text" placeholder="Search for a question" className="home-search-question-input"></input>
                        </Grid>
                        {/* question tile  */}
                        <Grid xs={12} sx={{ marginTop: '20px' }}>
                            <HomeQuestionCard />
                        </Grid>
                    </Grid>
                </Box>

            </div>
        </>
    )
}
export default HomePage;