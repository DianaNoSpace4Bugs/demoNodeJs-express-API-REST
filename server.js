const express = require('express')
const app = express()
const port = 3000

const booksRoutes = require("./routes/books.routes")
const productsRoutes = require("./routes/products.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Rutas
app.use('/books',booksRoutes);
app.use('/products',productsRoutes);

// Última ruta por defecto. En caso de no encotrarse ninguna anterior, devolvemos un 404
// Para rutas no existentes
app.get("*",(req,res)=>{
    res.status(404).send("Gatito triste - 404 not found");
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})