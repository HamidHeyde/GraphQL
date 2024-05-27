import React, { useEffect } from "react"
import { Layout } from "../components"
import { useQuery, gql } from "@apollo/client"
import TrackCard from "../containers/track-card"
import {QueryResult} from "../components"

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
  
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.allTracks?.map((track, id) => (
          <TrackCard key={`track_${id}`} track={track} />
        ))}
      </QueryResult>
    </Layout>
  )
}

export default Tracks
