import { Body, Controller, Post, Param } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  updateUser(
    @Body('id') id: number,
    @Body('name') name: string,
    @Body('editor') editor: boolean,
  ) {
    console.log(id, name, editor);
    return this.usersService.createUser();
  }

  //   @Post()
  //   updateUser(@Body() updateUserDto: UpdateUserDto) {
  //     console.log(updateUserDto);
  //     return this.usersService.createUser();
  //   }
}
