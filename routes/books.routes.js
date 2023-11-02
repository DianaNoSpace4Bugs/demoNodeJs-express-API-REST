const router = require('express').Router()


// Query params:
// http://localhost:3000/books/quijote
// http://localhost:3000/books/
// http://localhost:3000/books/celestina
/* router.get("/books/:title?", (req, res) => {
    if(req.params.title){
        console.log(req.params.title);
        res.status(200).send("Has pedido: "+req.params.title);
    }
    else{
        res.status(200).send("Has pedido todos los libros");
    }

}); */

// Query params:
// http://localhost:3000/books/quijote
// http://localhost:3000/books/
// http://localhost:3000/books/celestina
router.get("/:title?", (req, res) => {

    console.log(req.params.title);

    if(req.params.title){
        res.status(200).json({
            message:"Has solicitado:"+req.params.title,
            title:req.params.title,
            success:true,
            data:{
                "title": "Hamlet",
                "author":"Shakespeare",
                "pages": 2000,
                "year":1550,
                "description": "en un lugar de la mancha..."
              }
        });
    }else{
        res.status(200).json({
            message:"Aquí van tus libros!",
            success:true,
            data:[{
                "title": "Don Quijote de la Mancha",
                "author":"Miguel de Cervantes",
                "pages": 2000,
                "year":1550,
                "description": "en un lugar de la mancha..."
              },
              {
                "title": "Hamlet",
                "author":"Miguel de Cervantes",
                "pages": 2000,
                "year":1550,
                "description": "en un lugar de la mancha..."
              },
              {
                "title": "Lazarillo de Tormes",
                "author":"Miguel de Cervantes",
                "pages": 2000,
                "year":1550,
                "description": "en un lugar de la mancha..."
              }]
        }
            );
    }
});

/*
{
  "title": "Don Quijote de la Mancha",
  "author":"Miguel de Cervantes",
  "pages": 2000,
  "year":1550,
  "description": "en un lugar de la mancha..."
}
*/
router.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        success:true,
        title:req.body.title,
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        data:req.body
    });
});

router.put("/", (req, res) => {
    res.status(200).send("Libro editado!");
});
router.delete("/:title?", (req, res) => {
    res.status(200).send("Libro borrado!. Has borrado:"+req.params.title);
});

module.exports = router;