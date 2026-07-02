import { Injectable, NotFoundException } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    age: number;
};

@Injectable()
export class UsersService {

    private users: User[] = [
        { id: 1, name: "Ivan", age: 25 },
        { id: 2, name: "John", age: 30 },
        { id: 3, name: "Jane", age: 28 }
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

    createUser(name: string, age: number): User {
        
        const newUser: User = {
            id: this.users.length + 1,
            name,
            age
        }

        this.users.push(newUser);

        return newUser;
    }
}
