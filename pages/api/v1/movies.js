
// import fs from 'fs'
// import path from 'path'
// import data from './data.json'
// const filePath = './data.json'

// export default (req, res) => {
//   const { method } = req

//    switch (method) {
//     case 'GET':
//       res.status(200).json(data)
//       break
//     case 'POST':
//       const movie = req.body
//       data.push(movie)

//       const stringifiedData = JSON.stringify(data, null, 2)

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
