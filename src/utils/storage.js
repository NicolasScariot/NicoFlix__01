import AsyncStorage from "@react-native-async-storage/async-storage";

// Busca de filmes
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

// Salvar filmes

export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key);

    // Caso tiver um filme ká salvo com esse id, irá ignorar
    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if(hasMovie){
        console.log("Filme já salvo anteriormente")
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("filme salvo");
}

// deletar filme da lista

export async function deleteMovie(id){
    let moviesStored = await getMoviesSave('@nico');

    let myMovies = moviesStored.filter( item => {
        return(item.id !== id);
    })

    await AsyncStorage.setItem('@nico', JSON.stringify(myMovies));
    console.log("filme deletado");
    return myMovies;
}


// filtro de filmes já salvos 

export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@nico');

    const hasMovie = moviesStored.find( item => item.id === movie.id);
    if(hasMovie){
        return true;
    }
    return false;
}

// 

// parei no minuto 56:40