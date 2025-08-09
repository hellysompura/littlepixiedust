import { Grid, ImageList, ImageListItem, ImageListItemBar, Paper } from '@mui/material'
import React, { useState } from 'react'
import Data from '../Data';

import { useNavigate } from 'react-router-dom';


export default function ProductList() {
    const navigate = useNavigate();
    const [productList, setProductList] = useState(Data);

    const handleProductPage = (e, product) => {
        // console.log(product)
        // window.open(`/product-page/${product.title}`, '_self')
        navigate(`/product-page/${product.title}`, { state: { product } });
    }

    return (
        <React.Fragment>
            <Grid container spacing={3} marginTop={'20vh'} paddingRight={3}>
                <Grid size={3}>
                    <Paper elevation={2}></Paper>
                </Grid>
                <Grid size={9}>
                    <ImageList cols={4} gap={24}>
                        {productList.map((products, i) => (
                            <ImageListItem key={products.img} sx={{ height: '300px !important', objectFit: 'contain', cursor: 'pointer' }} onClick={(e) => handleProductPage(e, products)}>
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
