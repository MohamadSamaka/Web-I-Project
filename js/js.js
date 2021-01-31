var flipper = false;
window.addEventListener("scroll",(event => {
    if(window.scrollY > 60){
        document.getElementById("site-header-bg").classList.add("MenuScrollingDown-bg");
        document.getElementById("site-header").classList.add("MenuScrollingDown-menu");
        document.getElementById("site-header").classList.remove("MenuScrollingUp-menu");
        document.getElementById("site-header").getElementsByTagName("li")[0].getElementsByTagName("a")[0].style.color = "black";
        document.getElementById("site-header").getElementsByTagName("li")[1].getElementsByTagName("a")[0].style.color = "black";      
        if(document.getElementById("site-header").classList.contains("MenuScrollingDown-menu")){
            flipper = true;
        } 
    }
    else{
        document.getElementById("site-header-bg").classList.remove("MenuScrollingDown-bg");
        document.getElementById("site-header").classList.remove("MenuScrollingDown-menu");
        if(flipper == true){
            document.getElementById("site-header").classList.add("MenuScrollingUp-menu");
        }
        flipper = false;
        document.getElementById("site-header").getElementsByTagName("li")[0].getElementsByTagName("a")[0].style.color = "white";
        document.getElementById("site-header").getElementsByTagName("li")[1].getElementsByTagName("a")[0].style.color = "white";
    }
}))


function AA(ele){
    var a = ele;
}

document.getElementById("default").addEventListener("click", Activate);
var LI = document.getElementsByClassName("DropDownMenu")[0].children;
for(var i = 0; i < LI.length; i++)
    LI[i].addEventListener("click", function(e){
        GetText(e)
    });
    
function Activate(){
    var element = document.getElementsByClassName("DropDownMenu")[0];
    if(element.classList.contains("active"))
        element.classList.remove("active");
    else
        element.classList.add("active");
}

function GetText(elem){
    SetText(elem.target.innerText);
    document.getElementsByClassName("DropDownMenu")[0].classList.remove("active");
}

function SetText(str){
    document.getElementById("default").innerHTML = str;
}


function mouseOverInfo(event) {
    var element = document.getElementsByClassName(event.target.classList[1])[1];
    console.log(event.pageY - 940 + "px")
    // element.style.display = "block";
    // element.style.top = event.pageY + "px";
    element.style.top = event.pageY - 1500 + "px";
    element.style.left = event.pageX + "px";
  }
  
  function mouseOut(event) {
    var element = document.getElementsByClassName(event.target.classList[1])[1];
    // element.style.display = "none"; 
  }