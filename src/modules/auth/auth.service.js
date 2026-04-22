import { ApiError } from '../../common/utils/api-error.js';
import { generateToken } from '../../common/utils/jwt.utils.js';
import User from './auth.model.js'
export const register = async({name,email,password,role})=>{
    const existing = await User.findOne({email})
    if (existing)throw ApiError.conflict("Email already exists")
   const{rawToken,hashedToken}=generateToken();
    const userObj = await User.create({
        name,
        email,
        password,
        role,
        verificationToken: hashedToken
    })
    return userObj;
}