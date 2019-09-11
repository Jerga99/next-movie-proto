import data from '../../../../server/data.json'

export default (req, res) => {
  const id = req.query.id
  const movie = data.find(m => m.id === id)

  return res.json(movie)
}
