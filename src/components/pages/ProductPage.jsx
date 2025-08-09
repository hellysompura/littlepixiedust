import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useLocation, useParams } from 'react-router-dom';

export default function ProductPage() {
  const { state } = useLocation();

  const product = state?.product;

  if (!product) {
    // Fallback: fetch from backend using productId
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Grid container spacing={2} paddingRight={2} paddingBottom={2} marginTop={"22vh"}>
          <Grid size={1}></Grid>
          <Grid size={6}>
            <div className="fluid">
              <div className="fluid__image-container">
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: product.title,
                    src: product.img,
                    width: 500,
                    height: 450
                  },
                  largeImage: {
                    src: product.img,
                    width: 2000,
                    height: 1800
                  },
                  isHintEnabled: false
                }} />
              </div>
            </div>
          </Grid>
          <Grid size={5}>
            <Typography ></Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
