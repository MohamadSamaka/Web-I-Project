
var runOnScroll =  function(evt) {
    // not the most exciting thing, but a thing nonetheless
    console.log(evt.target);
  };
window.addEventListener("scroll",(event => {
    // console.log(window.scrollY);
    if(window.scrollY > 60){
        // document.getElementsByClassName("navigation")[0].style.backgroundColor="white";
        document.getElementById("about").style.color = "black";
        document.getElementById("lang").style.color = "black";
        // if(!document.getElementsByClassName("navigation")[0].classList.contains("nav")
        document.getElementsByClassName("navigation")[0].classList.add("nav-activate");
        // document.getElementsByClassName("menu")[0].style.color="black";
        document.getElementsByClassName("menu")[0].classList.add("nav-up");
        document.getElementById("logo").classList.add("nav-up");
        if(document.getElementsByClassName("navigation")[0].classList.contains("nav-deactive"))
        document.getElementsByClassName("navigation")[0].classList.remove("nav-deactive");
        if(document.getElementsByClassName("menu")[0].classList.contains("nav-down") &&
        document.getElementsById("logo").contains("nav-down")){
            // document.getElement("logo").classList.remove("nav-down");
            document.getElementsByClassName("menu")[0].getElementsByTagName("a")[0].classList.remove("nav-down");
            document.getElementsByClassName("menu")[0].classList.remove("nav-down")};
    }
    else{
        document.getElementById("about").style.color = "white";
        document.getElementById("lang").style.color = "white";
        if(document.getElementById("logo").classList.contains("nav-up")){
        document.getElementsByClassName("menu")[0].classList.add("nav-down");
        document.getElementById("logo").classList.add("nav-down");
        }
        document.getElementById("logo").classList.remove("nav-up");
        // document.getElementsByClassName("menu")[0].classList.remove("nav-up");
        // document.getElementsByClassName("menu")[0].classList.add("nav-down");
        // document.getElementsById("menu")[0].classList.add("nav-down");
        document.getElementsByClassName("navigation")[0].classList.remove("nav-activate");
        document.getElementsByClassName("navigation")[0].classList.remove("nav-deactivate");
    }
}))

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
