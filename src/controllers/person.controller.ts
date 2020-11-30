import { Request, Response } from "express";

class Clients {
    id: number = 0;
    nombre: string = "";
    apellidos: string = "";
    dni: string = "";
    edad: string = "";

    constructor() { }
}








class Person {
    client: Clients = new Clients();
    clients: Clients[] = [];

    constructor() {
        this.load();
    }

    getPersons(req: Request, res: Response) {

        res.send(person.clients);

    }


    getShow(req: Request, res: Response) {

        res.render('layouts/show', {objeto: person.clients});

    }

    getPerson(req: Request, res: Response) {
        let id = req.params.id;

        if (Number(id) > -1 && Number(id) < 5) {
            res.send(person.clients[Number(id)]);


        } else {
            res.send('cliente inexistente');
        }


    }






    load() {

        this.client = new Clients();

        this.client.id = 0;
        this.client.nombre = "Antonio";
        this.client.apellidos = "Olvera";
        this.client.dni = "784544185T";
        this.client.edad = "25";
        this.clients.push(this.client);
        this.client = new Clients();

        this.client.id = 1;
        this.client.nombre = "Pepe";
        this.client.apellidos = "Ramirez";
        this.client.dni = "78458185L";
        this.client.edad = "23";
        this.clients.push(this.client);
        this.client = new Clients();

        this.client.id = 2;
        this.client.nombre = "Juan";
        this.client.apellidos = "Lupisca";
        this.client.dni = "78458841R";
        this.client.edad = "20";
        this.clients.push(this.client);
        this.client = new Clients();

        this.client.id = 3;
        this.client.nombre = "Antonio";
        this.client.apellidos = "Olvera";
        this.client.dni = "784544185T";
        this.client.edad = "25";
        this.clients.push(this.client);
        this.client = new Clients();

        this.client.id = 4;
        this.client.nombre = "Pepe";
        this.client.apellidos = "Ramirez";
        this.client.dni = "78458185L";
        this.client.edad = "23";
        this.clients.push(this.client);
        this.client = new Clients();
    }


}




export const person = new Person();