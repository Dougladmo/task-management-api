import { Injectable } from '@nestjs/common';
import { UserDto } from './users.dto';
import { v7 as uuid } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    { id: '1', username: 'alice', password: '123456' },
  ];
  create(newUser: UserDto) {
    newUser.id = uuid();
    newUser.password = bcryptHashSync(newUser.password, 10);
    this.users.push(newUser);
  }

  findByUserName(username: string): UserDto | undefined {
    return this.users.find((user) => user.username == username);
  }
}
