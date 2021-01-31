import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      console.log(`Req.body equals`)
      console.log(req.body)
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      //No need to get the password here
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Token invalid, not authorized.')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized. No token found.')
  }
})
export { protect }
