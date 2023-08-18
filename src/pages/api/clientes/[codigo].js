export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome:`Manuel ${codigo}`,
        email: `mariamaria@algumacoisamail ${codigo}`
    })
}