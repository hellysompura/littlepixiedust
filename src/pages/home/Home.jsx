import React from 'react'
import CarouselSection from './CarouselSection'
import { CAROUSEL_SLIDES } from '../../common/Data'

export default function Home() {
  return (
    <React.Fragment>
      <div>
        <CarouselSection slides={CAROUSEL_SLIDES} />
      </div>
    </React.Fragment>
  )
}
