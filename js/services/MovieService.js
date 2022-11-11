myApp.service("MovieService", function($http) {
    this.showCover = (id) => {
        return $http.get(`${baseUrl}covers/show/${id}`) 
    }
    this.getCovers = filter => {
        if (filter){
            // console.log(filter,'oi');
            return $http.get(`${baseUrl}covers/all?name=${filter}`) 
        }
        return $http.get(`${baseUrl}covers/all`)
    }
});