const {userData} = require('../data')

const getUserDataById = (req, res) => {
    const {params: {id}} = req //Traete el id del path
    const currentUser = userData.find(x=>x.id===id) //Encontrar id
    const {
        firstName,
        lastName,
        maidenName,
        email,
        age,
        address,
        company
    }=currentUser; //De currentuser traeme esto
    res.send({
        status:200,
        user: {
            fullName: `${firstName} ${lastName} ${maidenName}`,
            email,
            age,
            address,
            jobTitle: company.title
        }
    })

}
const updateUserAddressById = (req, res) => {
    const {params: {id}} = req //Traete el id del path
    const {body: newAddress} = req //Todo lo que traiga postman de body guarda en newAddress
    const currentUser = userData.find(x=>x.id===id) //Encontrar id
    const user = {...currentUser, address: newAddress} //Sobre address va a sobreescribir address
    res.send({
        status: 200,
        user
    })

}

//Crear usuario create-user, get body{traer objeto que es usuario nuevo, email="adfasdf"}, respuesta es lista con todos los usuarios [{id, email}
//Delete delete dekete-user/:id devolver misma lista sin el usuario que eliminamos

module.exports = {
    getUserDataById,
    updateUserAddressById
}