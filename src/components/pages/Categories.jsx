import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import itemData from '../../utils/itemData'

export default function Categories() {

    const handleCategoryValue = (e, item) => {
        // console.log(e, item)

        window.open(`/product/${item.value}`, '_self')
    }

    return (
        <React.Fragment>
            <Container maxWidth="md" >
                <Grid container spacing={3} marginY={2} id="categories-section">
                    <Grid size={12} display={"flex"} justifyContent={"center"}>
                        <Typography variant='h4'>Categories</Typography>
                    </Grid>
                    {itemData?.map((item, i) => (
                        <Grid key={i} size={{ xs: 6, md: 4, lg: 4 }}>

                            <div className='category-container' onClick={(e) => handleCategoryValue(e, item)}>
                                <img src={item.img} alt={item.title} />
                                <span className='category-title'>{item.title}</span>
                            </div>
                        </Grid>

                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}
