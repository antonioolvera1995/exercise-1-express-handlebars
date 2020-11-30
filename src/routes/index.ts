import { Router } from "express";
import { person } from "./../controllers/person.controller";




class RouterClients {

    router: Router = Router();

    constructor() {
        this.router.get('/', person.getPersons);
        this.router.get('/client/:id', person.getPerson);
        this.router.get('/show', person.getShow);
    }

}







const routerClients = new RouterClients();
export default routerClients;