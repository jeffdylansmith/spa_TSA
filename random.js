var guide = document.getElementById("imgArea");
document.addEventListener("click", function(){
	var direction =  Math.floor(Math.random() * 2);
	whichWay(direction);
});
function whichWay(hey) {
	console.log(hey);
	//var guide = document.getElementById("imgArea");
    //var direction =  Math.floor(Math.random() * 2);
    if(hey == 0){
    	guide.innerHTML = `<img class="arrow" src=images/leftarrow.jpg>`
        } else if (hey == 1){
    	guide.innerHTML = `<img class="arrow" src=images/rightarrow.jpg>`
    	}
}
