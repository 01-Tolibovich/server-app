import { IsString, MinLength, IsNumber} from "class-validator"

export class CreateUserDto {
    @IsString({message: "Name must be a string"})
    @MinLength(3, {message: "Name must be at least 3 characters long"})
    name: string | undefined;

    @IsNumber({}, {message: "Age must be a number"})
    age: number | undefined;

    @IsString({message: "Bio must be a string"})
    @MinLength(10, {message: "Bio must be at least 10 characters long"})
    bio: string | undefined;
}