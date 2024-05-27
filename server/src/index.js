const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const typeDefs = require("./schema")

async function main() {
  const server = new ApolloServer({ typeDefs })
  const { url } = await startStandaloneServer(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  })

  console.log(`🚀 Server ready at: ${url}`)
}

main()
