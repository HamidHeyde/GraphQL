import React, { useEffect } from "react"
import { Layout } from "../components"
import { useQuery, gql } from "@apollo/client"
import TrackCard from "../containers/track-card"

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql`
  # Query goes here
  query GetAllTracks {
    allTracks {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)
  
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return (
    <Layout grid>
      {data?.allTracks?.map((track, id) => (
        <TrackCard key={`track_${id}`} track={track} />
      ))}
    </Layout>
  )
}

export default Tracks
