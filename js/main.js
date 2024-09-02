

document.querySelectorAll("button").forEach(function(item){
    item.onclick = function(){
        document.querySelector("#result").style.color = item.dataset.color ;
    }
});