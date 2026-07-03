import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';

export type User = {
    id: number | undefined;
    name: string | undefined;
    age: number | undefined;
    bio?: string | undefined;
};

@Injectable()
export class UsersService {

    private users: User[] = [
        { id: 1, name: "Ivan", age: 25, bio: "I am a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I enjoy learning new technologies." },
        { id: 2, name: "John", age: 30, bio: "John is a marketing professional with experience in digital marketing and social media strategy." },
        { id: 3, name: "Jane", age: 28, bio: "Jane is a graphic designer with a strong portfolio in branding and visual communication." }
    ]

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: number): User | undefined {
        const user = this.users.find(user => user.id === id);

        if (!user) {
            throw new NotFoundException("User not found")
        }

        return user;
    }

    createUser(body: CreateUserDto): User {
        
        const newUser: User = {
            ...body,
            id: this.users.length + 1,
        }

        this.users.push(newUser);

        return newUser;
    }
}
