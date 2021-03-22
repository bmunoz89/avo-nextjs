import DB from '@database'
import { NextApiHandler } from 'next'

const allAvos: NextApiHandler = async (_request, response): Promise<void> => {
  const db = new DB()
  const allEntries = await db.getAll()

  response.status(200).json({
    length: allEntries.length,
    data: allEntries,
  })
}

export default allAvos
