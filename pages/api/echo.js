export default function echo(req,res) {
    res.statusCode = 404
    res.end(JSON.stringify({
        "massage":'my massage'
    }))
}