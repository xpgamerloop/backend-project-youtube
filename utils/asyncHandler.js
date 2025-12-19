//utility function same as the below written cde but it is written in promises format

const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler};






// //same as promise but try-catch wala syntax
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code ||500).json({
//             success:false,
//             message:err.message
//         }) 
        
//     }
// }