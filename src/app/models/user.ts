export interface User {
    name: string; // required with minimum 5 chracters
    surname: string; // required
    dni: string; //DNI regex validation
    email: string; //email validation
    address?: {
        street?: string; // required
        postcode?: string;
    }
}