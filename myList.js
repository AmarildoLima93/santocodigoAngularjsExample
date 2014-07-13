angular.module('myList', []).
	controller('listController',
	function ($scope) {
		$scope.itens = [
			{product: 'Leite', qtdade: 2, unitPrice: 1.29},
			{product: 'Cerveja', qtdade: 12, unitPrice: 1.40}
		];
		
		$scope.addProduct = function(){
			$scope.itens.push({
				product: $scope.item.product,
				unitPrice: $scope.item.unitPrice,
				qtdade: $scope.item.qtdade
			});
			$scope.item.product = $scope.item.qtdade = $scope.item.bought = '';
		};
		$scope.delProduct = function($index){
			$scope.itens.splice($index,1)
		};
	});