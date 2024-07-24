const {request, json} = require('express')

/*
 ____________________________________________
|
|     Location
|______________________________________________
*/

const location = async(req, res) => {
    //Recibir en json las coordenadas
    const ubi = req.body.coords;
    console.log(ubi)
    return res.status(200).json({
        coordenadas: ubi
    })
}


module.exports = {
    location
}