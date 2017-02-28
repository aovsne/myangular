var myApp = angular.module('myApp', ["ngRoute"])

myApp.config(function($routeProvider){
	$routeProvider
	.when('/books', {
		templateUrl: "bookshop/book.html",
		controller: "bookListCtrl"
	})
	.when("/cart", {
		templateUrl: "bookshop/cart.html"

	})
	.otherwise({
		redirectTo: "/books"
	})
})

myApp.controller('headCtrl', function($scope){
	$scope.head = {
		logo : 'Bookart',
		tagline : 'We have one million books.'
	}
} )


myApp.controller('bookListCtrl', function($scope){
	$scope.books = [
		{
			ImgUrl: "",
			Name: "Delhi",
			Price: 200,
			Rating: 4,
			Binding: "paperback",
			Publilsher: "random",
			Released: "12/12/12",
			Details: "all her joy wrpaped up inside she can way to reveal and tell you how she feels."
		},
		{
			ImgUrl: "",
			Name: "Mumbai",
			Price: 200,
			Rating: 4,
			Binding: "paperback",
			Publilsher: "random",
			Released: "12/12/12",
			Details: "all her joy wrpaped up inside she can way to reveal and tell you how she feels."
		},
		{
			ImgUrl: "",
			Name: "Calcutta",
			Price: 200,
			Rating: 4,
			Binding: "paperback",
			Publilsher: "random",
			Released: "12/12/12",
			Details: "all her joy wrpaped up inside she can way to reveal and tell you how she feels."
		},
		{
			ImgUrl: "",
			Name: "Lhasa",
			Price: 200,
			Rating: 4,
			Binding: "paperback",
			Publilsher: "random",
			Released: "12/12/12",
			Details: "all her joy wrpaped up inside she can way to reveal and tell you how she feels."
		},
		{
			ImgUrl: "",
			Name: "Khanagawa",
			Price: 200,
			Rating: 4,
			Binding: "paperback",
			Publilsher: "random",
			Released: "12/12/12",
			Details: "all her joy wrpaped up inside she can way to reveal and tell you how she feels."
		}
	]
	$scope.addToCart = function(book){
		console.log("add to cart: ", book)
	}
} )
