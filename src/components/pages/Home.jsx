import React from 'react'
import Carousel from '../common/Carousel'

// images import
import img1 from "../../assets/images/carousel1.jpeg"
import img2 from "../../assets/images/carousel2.jpeg"
import img3 from "../../assets/images/carousel3.jpeg"
import img4 from "../../assets/images/carousel4.jpeg"
import img5 from "../../assets/images/carousel5.jpeg"
import Categories from './Categories'
import { Grid } from '@mui/material'

export default function Home() {
    return (
        <React.Fragment>
            <Grid container>
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
