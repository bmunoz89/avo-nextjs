import DB from '@database'
import { IncomingMessage, ServerResponse } from 'node:http'

const allAvos = async (
  _request: IncomingMessage,
  response: ServerResponse
): Promise<void> => {
  const db = new DB()
  const allEntries = await db.getAll()

  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(
    JSON.stringify({
      length: allEntries.length,
      data: allEntries,
    })
  )
}

export default allAvos
