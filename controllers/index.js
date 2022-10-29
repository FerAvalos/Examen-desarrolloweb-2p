const {userData} = require('../data')

const getUserDataById = (req, res) => {
    const {params: {id}} = req //Traete el id del path
    const currentUser = userData.find(x=>x.id==id) //Encontrar id
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

const createUser = (req, res) => {
    const {body:{email}}=req
    const newUser = {
        id:userData.length+1,
        email
    }
    userData.push(newUser);
    res.send({
        status:200,
        users: userData.map(({id, email})=>({id, email}))
    })
}

const deleteUser = (req, res) => {
    const {params: {id}} = req //Traete el id del path
    const currentUser = userData.find((x)=>x.id==id)
    userData.splice(id-1, 1)
    res.send({
        status:200,
        users: userData.map(({id, email})=>({id, email}))
    })
}

//Crear usuario create-user, get body{traer objeto que es usuario nuevo, email="adfasdf"}, respuesta es lista con todos los usuarios [{id, email}
//Delete delete delete-user/:id devolver misma lista sin el usuario que eliminamos

module.exports = {
    getUserDataById,
    updateUserAddressById,
    createUser,
    deleteUser
}