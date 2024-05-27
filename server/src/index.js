const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const { addMocksToSchema } = require("@graphql-tools/mock")
const { makeExecutableSchema } = require("@graphql-tools/schema")
const typeDefs = require("./schema")
const mockForSchema = require("../mockForSchema")

async function main() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mockForSchema,
    }),
  })
  const { url } = await startStandaloneServer(server, {
    cors: {
      origin: "*",
      credentials: true,
    },
  })

  console.log(`🚀 Server ready at: ${url}`)
}

main()
