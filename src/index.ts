import express from "express";
import indexRouter from "./routes/index";
import  handlebars from "express-handlebars";
import path from "path";
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')
}));
app.set('view engine', '.hbs');



app.use('/clients', indexRouter.router )


app.set('port', 3000);
app.listen(app.get('port'), () => {

    console.log(`servidor levantado en http://localhost:${app.get('port')}`);

});






