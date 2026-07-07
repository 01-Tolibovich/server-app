import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto} from "./create-users.dto"

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }

    // @Get("about")
    // getAllUsersAbout(): string {
    //     return "All users about"
    // }

    // @Get("search")
    // getUserSearch(@Query("name") name: string, @Query("age") age: string): string {
    //     return `User name: ${name} and age: ${age}`
    // }

    @Get(":id")
    getUserById(@Param("id") id: string) {

        return this.usersService.getUserById(+id)
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.usersService.createUser(body)
    }

    // @Put(":id")
    // update(@Param("id") id: string) {
    //     return {message: `User with ID ${id} updated`}
    // }

    // @Delete(":id")
    // delete(@Param("id") id: string) {
    //     return {message: `User with ID ${id} deleted`}
    // }
}
