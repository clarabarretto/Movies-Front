myApp.service("RecoveryService", function($http) {
    this.recovery = (data) =>  $http.post(`${baseUrl}recovery_password/`, data);
    this.validateToken = (token) =>  $http.get(`${baseUrl}validate-token-password/${token}`);
    this.changePassword = (token, data) =>  $http.put(`${baseUrl}change-password/${token}`, data);
  })