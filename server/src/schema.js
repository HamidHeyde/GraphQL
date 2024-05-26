const gql = require("graphql-tag")

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    "The track's ID"
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  type Author {
    "Author's ID"
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`

module.exports = typeDefs
