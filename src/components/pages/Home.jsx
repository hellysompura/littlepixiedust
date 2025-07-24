import React, { useEffect, useRef } from 'react'
import Carousel from '../common/Carousel'

// images import
import img1 from "../../assets/images/carousel1.jpeg"
import img2 from "../../assets/images/carousel2.jpeg"
import img3 from "../../assets/images/carousel3.jpeg"
import img4 from "../../assets/images/carousel4.jpeg"
import img5 from "../../assets/images/carousel5.jpeg"
import Categories from './Categories'
import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <React.Fragment>
            <Grid container marginTop={"20vh"}>
                <Grid size={12}>
                    <Carousel images={[img1, img2, img3, img4, img5]} />
                </Grid>

                <Grid size={12} paddingTop={4}>
                    <Categories />
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
