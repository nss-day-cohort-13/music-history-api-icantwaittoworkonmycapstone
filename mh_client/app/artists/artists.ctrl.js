angular.module("mh")
	.controller("ArtistsCtrl", [
		"$http",
		"$routeParams",
		"$timeout",
		"$scope",
		"RootFactory",
	function ($http, $routeParams, $timeout, $scope, RootFactory) {
		$scope.headline = "Artists"
		$scope.artists = null

		RootFactory.getApiRoot()
			.then(
				root => {
					$http.get(`${root.artists}`)
						.then(res => $scope.artists = res.data)
					$timeout()
				},
				err => console.log("error: ", err)
			)


	}])
