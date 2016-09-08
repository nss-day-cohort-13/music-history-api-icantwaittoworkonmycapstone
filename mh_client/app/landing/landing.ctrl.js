'use strict'

angular.module("mh")
	.controller("LandingCtrl", [
		"$scope",
		"$http",
		"RootFactory",
		"$timeout",
		function($scope, $http, RootFactory, $timeout) {
			$scope.title = "Look at all these traxxxx!!!!!";
			$scope.apiRoot = null;
			$scope.heading2 = "All Tracks";
			$scope.artists_heading = "Artists";

			// $scope.stuff = root;

			RootFactory.getApiRoot()
				.then(
					root => {
						// console.log("root", root);
						$http.get(`${root.tracks}`)
							.then(
								res => {
									$scope.tracks = res.data
							});

						$timeout();
					},
					err => console.log("error", err)
				)
				.then(
					root => {
						console.log("root", root);
						$http.get(`${root.artists}`)
							.then(
								res =>{
									$scope.artists = res.data
							});
						$timeout();
					},
					err => console.log("error", err)
				);
		}
	]);

	// RootFactory.getApiRoot()
 //            .then(
 //                root => $http.get(root.animals + $routeParams.animalId),
 //                logError
 //            )
 //            .then(
 //                animalRes => {
 //                    $scope.animal = animalRes.data;
 //                    return $http.get($scope.animal.habitat);
 //                },
 //                logError
 //            )
 //            .then(
 //                habitatRes => {
 //                    $scope.habitat = habitatRes.data;
 //                    $timeout();
 //                },
 //                logError
 //            )

