(function(game){
  function playerController(){
    console.log("in player inventory directive");

  }

  game.directive("playerInventory", function(){

    return {
      templateUrl: "/partials/inventory.html",
      controller: playerController
    }
  })
})(game);
