const Movie = require('./movieModel');

exports.addMovie = async (movieObj) => {
    try{
        //checks if table exists and if not it creates it
        await Movie.sync();
        await Movie.create({title: movieObj.title, actor: movieObj.actor});
        return `u created ${movieObj.title}`;
    }catch(err){
        console.log(err);
    }
}

exports.listMovies = async () => {
    try{
        console.log(await Movie.findAll({}));
    }catch(err){
        console.log(err);
    }
}

exports.updateMovies = async (movieObj) => {
    try{
        await Movie.update({title: movieObj.newTitle},{where: {title: movieObj.title}})
        console.log('I don\'t know how but it seems to work')
    }catch(err){
        console.log(err);
    }
}

exports.deleteMovies = async (movieObj) => {
    try{
        await Movie.destroy({where: {title: movieObj.title}})
        console.log('I don\'t know how but it seems to work')
    }catch(err){
        console.log(err);
    }
}

