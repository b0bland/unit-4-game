$(document).ready(function() {

    //Initial numbers are generated, and points start at zero//
    
    var targetpt = Math.floor(Math.random() * 50);
    var randval1 = Math.floor(Math.random() * 5);
    var randval2 = Math.floor(Math.random() * 10);
    var randval3 = Math.floor(Math.random() * 20);
    var randval4 = Math.floor(Math.random() * (-5));

    var playerptcount = 0;

    console.log(targetpt, randval1, randval4)
    
    
    //On click, the functions should grab the current point count, and then add it to the randomly generated value. and then push that value back to the current point count//

    $("#char1").on("click", function() {
        var current = playerptcount;
        playerptcount = current + randval1;
    })

    $("#char2").on("click", function() {
        var current = playerptcount;
        playerptcount = current + randval2;
    })

    $("#char3").on("click", function() {
        var current = playerptcount;
        playerptcount = current + randval3;
    })

    $("#char4").on("click", function() {
        var current = playerptcount;
        playerptcount = current + randval4;
    })

    console.log(playerptcount)

    //Once current point count is equal to the target point count, a win is added, points are reset, and numbers are generated again//
    //If current point count exceeds target point count, a loss is added, points are reset, and numbers are generated again//
})