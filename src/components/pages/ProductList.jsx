import { Grid, ImageList, ImageListItem, ImageListItemBar, Paper } from '@mui/material'
import React, { useState } from 'react'
import Data from '../Data';

export default function ProductList() {
    const [productList, setProductList] = useState(Data);

    return (
        <React.Fragment>
            <Grid container spacing={3} marginTop={'20vh'} paddingRight={3}>
                <Grid size={3}>
                    <Paper elevation={2}></Paper>
                </Grid>
                <Grid size={9}>
                    <ImageList cols={4} gap={24}>
                        {productList.map((products, i) => (
                            <ImageListItem key={products.img} sx={{ height: '300px !important', objectFit: 'contain', cursor: 'pointer' }}>
                                <img
                                    srcSet={`${products.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${products.img}?w=248&fit=crop&auto=format`}
                                    alt={products.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={products.title}
                                    subtitle={<span>by: {products.author}</span>}
                                    position="below"

                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
