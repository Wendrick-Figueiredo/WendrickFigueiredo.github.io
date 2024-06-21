// Alterações entre SubPages

var to = document.querySelector('.nav-link.total');
to.addEventListener("click", function(){

    var p2 = document.querySelector('.part2')

    if (p2.style.display  == "block") {
       p2.style.display = "none"     

    } else {
        p2.style.display = "block"     
    
    }


});