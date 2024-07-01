import postgres from "postgres"

const defaultPort = 5432

const sql = postgres({
  host: process.env.POSTGRES_HOST,
  port: Number.parseInt(process.env.POSTGRES_PORT || defaultPort.toString()),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
})

export default sql
