require('./db/connection');

const yargs = require('yargs');
const {addMovie, updateMovies, listMovies, deleteMovies} = require('./movie/movieMethods');
const { beforeBulkCreate, beforeBulkDestroy } = require('./movie/movieModel');

const command = process.argv[2];

const app = (args) => {
    switch(command){
        case'add':
            addMovie({title: args.title, actor: args.actor});
            break;
        case 'update':
            updateMovies({title : args.title, newTitle : args.newTitle});
            break;
        case 'delete':
            deleteMovies({title : args.title});
            break;
        case 'list':
            listMovies();
            break;
        default:
            console.log('incorrect command');
    }
};

app(yargs.argv);