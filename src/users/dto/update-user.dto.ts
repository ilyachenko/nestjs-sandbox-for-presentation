import {
  IsNotEmpty,
  IsString,
  IsBooleanString,
  IsNumberString,
} from 'class-validator';

export class UpdateUserDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsString()
  name: string;

  @IsBooleanString()
  editor: boolean;
}
