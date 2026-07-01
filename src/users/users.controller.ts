import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getAllUsers(): string {
        return "All users"
    }

    @Get("about")
    getAllUsersAbout(): string {
        return "All users about"
    }

    @Get("search")
    getUserSearch(@Query("name") name: string, @Query("age") age: string): string {
        return `User name: ${name} and age: ${age}`
    }

    @Get(":id")
    getUserById(@Param("id") id: string): string {

        if (id === "0") {
            throw new NotFoundException("ID не может быть 0")
        }
        return `User ID: ${id}`
    }

    @Post()
    create(@Body() body: any) {

        if (!body.name) {
            throw new NotFoundException("Name is required")
        }
        return {message: "User created", data: body}
    }

    @Put(":id")
    update(@Param("id") id: string) {
        return {message: `User with ID ${id} updated`}
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return {message: `User with ID ${id} deleted`}
    }
}
