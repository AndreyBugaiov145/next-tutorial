export default function getById(req,res) {
    res.statusCode = 200
    // res.json({
    //     "massage":'my massage',
    //     "param" : req.query.id
    // })
    res.end(JSON.stringify({
        "massage":'my massage',
        "param" : req.query.id
    }))
}