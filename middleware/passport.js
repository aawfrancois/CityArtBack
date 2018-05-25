import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JsonWebTokenStrategy, ExtractJwt } from 'passport-jwt'

import User from '../models/user'

import dotenv from 'dotenv'
dotenv.config()

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                let user = await User.findOne({ where: { email } })

                if (!user) {
                    return done(`Can't find user ${email}`)
                }

                if (!await user.checkPassword(password)) {
                    return done(`Please check your password`)
                }

                return done(false, user)
            } catch (err) {
                done('Something wrong happens')
            }
        }
    )
)

passport.use(
    new JsonWebTokenStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_ENCRYPTION
        },
        async (jwtPayload, done) => {
            let user = await User.findOne({ where: { id: jwtPayload.id } })
            if (!user) {
                return done(`User ${id} doesn't exist`)
            }

            done(false, user)
        }
    )
)