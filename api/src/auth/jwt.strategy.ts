import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { JWT_CONSTANTS } from './auth.constants';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req: Request) => {
        return req.cookies.token || req.headers['authorization'];
      },
      ignoreExpiration: false,
      secretOrKey: JWT_CONSTANTS.secret,
    });
  }

  async validate(payload: { sub: string; username: string }) {
    return { userId: payload.sub, username: payload.username };
  }
}
