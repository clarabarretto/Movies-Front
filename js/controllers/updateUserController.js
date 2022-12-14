myApp.controller("updateUserController", ['$scope', "UserService", "$state", function ($scope, UserService, $state) {

    $scope.email = localStorage.getItem('email')
    $scope.updateUserInfo = {}

    const updateUser = (data) => {
        return UserService.updateUser(data)
            .then(() => {
                $state.go('profile')
            })
            .catch((e) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'an error ocurred',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
    }
    const showUser = () => {
        return UserService.profile()
            .then(resp => {
                $scope.updateUserInfo = resp.data
                $scope.updateUserInfo.email = $scope.email
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
    $scope.updateUser = updateUser
    showUser()
}]);