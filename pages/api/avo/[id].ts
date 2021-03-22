import enablePublicAccess from '@cors'
import DB from '@database'
import { NextApiHandler } from 'next'

const getAvoById: NextApiHandler = async (request, response): Promise<void> => {
  try {
    await enablePublicAccess(request, response)

    const db = new DB()
    const id = request.query.id

    if (Array.isArray(id)) {
      response.status(400).end()
      return
    }

    const entry = await db.getById(id)

    if (entry === null) {
      response.status(404).end()
      return
    }

    response.status(200).json(entry)
  } catch (error) {
    response.status(500).end()
  }
}

export default getAvoById
