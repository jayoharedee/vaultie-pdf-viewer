const express = require('express')
const fileupload = require('express-fileupload')

const app = express()
const router = express.Router()

// middlewares
app.use(fileupload())
app.use('/api', router)
// upload endpoint
app.post('/upload', (req, res) => {
  // reject bad requests
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' })
  }

  const pdf = req.files.pdf

  console.log(pdf)

  pdf.mv(
    `${__dirname}/../client/uploads/${pdf.name}`,
    (err) => {
      // reject server errors
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }

      res.json({
        pdfName: pdf.name,
        pdfPath: `uploads/${pdf.name}`,
      })
    }
  )
})

// server
app.listen(6000, () => console.log('server started...'))
