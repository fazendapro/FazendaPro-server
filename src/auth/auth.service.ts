import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../controller/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    console.log('Tentando autenticar usuário:', username);
    const user = await this.usersService.findOne(username);
    console.log('Usuário encontrado:', user);

    if (!user) {
      console.log('Usuário não encontrado');
      throw new UnauthorizedException();
    }

    if (user.password !== pass) {
      console.log('Senha incorreta');
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
