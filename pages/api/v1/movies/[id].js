
// import fs from 'fs'
// import path from 'path'
// import data from '../data.json'
// const filePath = '../data.json'

// export default (req, res) => {
//   const { method } = req
//   const id = req.query.id

//   switch (method) {
//     case 'GET':
//       const movie = data.find(m => m.id === id)
//       res.status(200).json(movie)
//       break
//     case 'DELETE':
//       const index = data.findIndex(m => m.id === id)
//       data.splice(index, 1)

//       const stringifiedData = JSON.stringify(data, null, 2)

//       console.log(stringifiedData)

//       fs.writeFile(filePath, stringifiedData, function(err) {
//         if (err) {
//           return res.status(422).send(err)
//         }

//         return res.json('File Sucesfully updated')
//       })
//       break
//     default:
//       res.setHeader('Allow', ['GET', 'PUT'])
//       res.status(405).end(`Method ${method} Not Allowed`)
//   }
// }
