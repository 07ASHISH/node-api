const user = require('./../Models/user');

module.exports = {
    // index: (req,res,next)=> {
    //     user.find({}, (err,users) =>{
    //         if(err)
    //         {
    //             next(err);
    //         }
    //         res.status(200).json({users});
    //         console.log("err"+ err);
    //         console.log(users);
    //     })

        // res.status(200).json({
        //     message: 'You requested index page'
        // })
    // },
    // ind: (req,res,next) => {
    //     user.find({})
    //     .then(users => {
    //         res.status(200).json(users)
    //     })
    //     .catch(err => {
    //         next(err);
    //     })
    // },
    index: async (req,res,next) => {
        // try{
            
        console.log('fucntion started');
       const users =  await user.find({});
       throw new Error('Dummy erro')
       res.json(users)
        console.log('function finished');
        // }
        // catch (err) {
        //     next(err);
        // }
    },  
    // newUser: (req,res,next)=> {
    // console.log('req.body controls', req.body);
    // const newUser = new user(req.body);
    // console.log("newuser"+newUser);
    // newUser.save((err,user)=>{
    //     if(err)
    //     console.log("error : "+err)
    //     else
    //     console.log('save'+ user);
    //     res.json(user);
    // })

    // },
//     newUserr: (req,res,next)=> {
//         const newUser = new user(req.body);
//         newUser.save()
//         .then(user => {
//             res.status(200).json(user)
//         })
//         .catch(err => {
//             next(err);
//         })
// }

newuser : async (req, res, next) => {
   
    try{
        const newUser = new user(req.body);
    const users = await newUser.save();
    res.status(200).json(users);
}catch(err) {
    next(err);
}
}

}



/*
 we can interact with mongod using three ways

 1 => callback function
 2 => promises
 3= > asysn/await (promises) // best way
*/