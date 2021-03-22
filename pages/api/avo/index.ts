import enablePublicAccess from '@cors'
import DB from '@database'
import { NextApiHandler } from 'next'

const allAvos: NextApiHandler = async (request, response): Promise<void> => {
  try {
    await enablePublicAccess(request, response)

    const db = new DB()
    const allEntries = await db.getAll()

    response.status(200).json({
      length: allEntries.length,
      data: allEntries,
    })
  } catch (error) {
    response.status(500).end()
  }
}

export default allAvos
