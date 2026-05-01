import cors from 'cors'
export const configureCors =()=>{
    return cors({
        origin:(origin,callback)=>{
            const allowedOrigins =['http://localhost:3000'],
            if(!origin || allowedOrigins.indexOf(origin)!=-1){
                callback(null,true)
            }else{
                callback(new Error('origin not allowed'))
            }
        },
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type','Authorization','Accept-Version'],
        exposedHeaders:['X-Total-Count','Content-Range'],
        credentials:true, //enable support for cookies
        preflightContinue:false, //cors will handle it
        maxAge:600, //in seconds  cache the preflight response avoid sending options request multiple times
        optionsSuccessStatus:204 // successful option content
    })
}