import { generateItems } from '~/utils/items'

export default defineEventHandler((event) => {
  const { search, page, 'per-page': perPage, sort } = getQuery(event)

  let data = generateItems()

  if (search) {
    data = data.filter(item => item.text.includes(search as string))
  }

  let sortField = (sort as string) || 'id'
  let sortOrder = 1

  if (sortField.startsWith('-')) {
    sortOrder = -1
    sortField = sortField.slice(1)
  }

  data.sort((a, b) => {
    const valA = a[sortField]
    const valB = b[sortField]

    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortOrder * valA.localeCompare(valB)
    }

    return sortOrder * (valA - valB)
  })

  const total = data.length
  const pageNumber = Number(page) || 1
  const perPageNumber = Number(perPage) || 20
  const start = (pageNumber - 1) * perPageNumber
  const end = start + perPageNumber
  const result = data.slice(start, end)

  return {
    items: result,
    total,
    page: pageNumber,
    perPage: perPageNumber,
    sort: sortField
  }
})