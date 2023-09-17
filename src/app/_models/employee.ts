export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export class Employee implements IEmployee {

    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
}