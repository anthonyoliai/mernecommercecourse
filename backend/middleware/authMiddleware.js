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
      console.log('The request object equals')
      console.log(req)
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

const admin = (req, res, next) => {
  console.log(`req.user equals ${req.user}`)
  if (req.user && req.user.isAdmin) {
    console.log(`The user equals ${req.user}`)
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}
export { protect, admin }
