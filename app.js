var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

//Sets views
app.use(express.static(path.resolve('./public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


//Controllers
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var dataController = require('./controllers/data-controller.js');



//Configs
var config = require('./configs/config.js');
config.setConfig();
mongoose.connect(process.env.MONGOOSE_CONNECT);





//Sets port for app
app.set('port', (process.env.PORT || 9000));
app.listen(app.get('port'), function(){
	console.log("Server started on port " + app.get('port'));
})


//Routes
//api routes
app.get('/', dataController.getIndex);

app.get('/new', dataController.getEdit);
app.post('/new', urlencodedParser ,dataController.postData);