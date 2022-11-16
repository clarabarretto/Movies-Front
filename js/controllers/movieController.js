myApp.controller('movieController', ['$scope', 'MovieService', '$state', function ($scope, MovieService, $state) {

  const index = () => {
    MovieService.getCovers($scope.buscarFilmes)
      .then(resp => {
        $scope.covers = resp.data
      })
      .catch((e) => {
        console.log(e);
      })

  }

  const logOut = () => {
    Swal.fire({
      title: 'log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes'
    }).then((result) => {
      if (result.isConfirmed) {
        $state.go('login')
        localStorage.clear()
      }
    })
  }


  $scope.logOut = logOut
  $scope.busca = index
  index()
}])