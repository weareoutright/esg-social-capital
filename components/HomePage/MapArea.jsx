import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RED_LINE_END from "../../constants/red_line_end.svg"
import MAP_LARGE from "../../constants/map.svg"
import MAP_SMALL from "../../constants/map-small.svg"
import RED_ARROW from "../../constants/redArrow.svg"
import { MAP_LOCATIONS_1, MAP_LOCATIONS_2 } from '../../constants/jsonContent/mapLocations'

const MapArea = ({WPHomePageMap}) => {
  const mapLocations1 = WPHomePageMap.locations.slice(0, 5)
  const mapLocations2 = WPHomePageMap.locations.slice(5)

  console.log(mapLocations1, mapLocations2)

  return (
    <div className="MapArea container-custom">
        <div className="map">
            <Image className="map-large" src={MAP_LARGE} alt="Map of USA" priority={true}/>
            <Image className="map-small" src={MAP_SMALL} alt="Map of USA" priority={true}/>
        </div>
        <div className="map-small-locations">
          <ul>
            {mapLocations1.map((location) => {
              return <li key={`${location.location}-list-item`} className="small-location">{location.location}</li>
            })}
          </ul>
          <ul>
            {mapLocations2.map((location) => {
              return <li key={`${location.location}-list-item`} className="small-location">{location.location}</li>
            })}
          </ul>
        </div>
        <Image className="red-line-end" src={RED_LINE_END} alt="" />
        <p className="content-justify">
            {WPHomePageMap.content ? WPHomePageMap.content : <>Through two years of work with these ten different communities, Education Strategy Group has gained valuable insight into how educational and community leaders can take action to make social capital access, development, and activation more equitable for their students.</>}
        </p>
        <div className="learn-how">
            <small>Continue to Phase 1: Lay the Foundation</small>
            <Link className="pill" href="/laythefoundation" alt=""><span>Learn How</span> <Image src={RED_ARROW} alt="" /></Link>
        </div>
    </div>
  )
}

export default MapArea