var flipper = false;
var FilteredOrNot = [0,0,0,0]
var InfoTextClasses =  document.getElementsByClassName("info-text");
document.getElementsByClassName("fas")[0].addEventListener("click",SearchForElement);
// var text = InfoTextClasses[0].innerText;
var Groups = [document.getElementsByName("faculty"),document.getElementsByName("parking")
                , document.getElementsByName("gate"), document.getElementsByName("others")];
window.addEventListener("scroll",(event => {
    if(window.scrollY > 60){
        if(document.getElementById("site-header").classList.contains("MenuScrollingDown-menu")){
            flipper = true;
        }
        document.getElementById("site-header-bg").classList.add("MenuScrollingDown-bg");
        document.getElementById("site-header").classList.add("MenuScrollingDown-menu");
        document.getElementById("site-header").classList.remove("MenuScrollingUp-menu");
        document.getElementById("about").style.color = "black";
    }
    else{
        document.getElementById("site-header-bg").classList.remove("MenuScrollingDown-bg");
        document.getElementById("site-header").classList.remove("MenuScrollingDown-menu");
        if(flipper == true){
            document.getElementById("site-header").classList.add("MenuScrollingUp-menu");
        }
        flipper = false;
        document.getElementById("about").style.color = "white";

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
    var str = elem.target.innerText;
    SetText(str);
    Filter(str);
    document.getElementsByClassName("DropDownMenu")[0].classList.remove("active");
}

function SetText(str){
    document.getElementById("default").innerHTML = str;
}


function mouseOverInfo(event) {
    var element1 = document.getElementsByClassName(event.target.classList[1])
    element1[0].classList.add("hover-active");
    var element2 = document.getElementsByClassName(event.target.classList[1])[1];
    element2.style.display = "block";
    element2.style.top = event.pageY + 50 + "px";
    element2.style.left = event.clientX + "px";
  }
  
  function mouseOut(event) {
    var element = document.getElementsByClassName(event.target.classList[1])[1];
    document.getElementsByClassName(event.target.classList[1])[0].classList.remove("hover-active");
    element.style.display = "none"; 
  }


  function Filter(FilterName){
      switch(FilterName){
        case "None":
            HoverRemover(1);
            for(var j = 0; j < 4; j++)
                FilteredOrNot[i] = 0;
            break;
        case "Colleges":
            HoverAdder(Groups[0]);
            FilteredOrNot[0] = 1;
            break;
        case "Parkings":
            HoverAdder(Groups[1]);
            FilteredOrNot[1] = 1;
            break;
        case "Gates":
            HoverAdder(Groups[2]);
            FilteredOrNot[2] = 1;
            break;
        case "Others":
            HoverAdder(Groups[3]);
            FilteredOrNot[3] = 1;
            break;
      }
  }

  function HoverAdder(element){
    if(FilteredOrNot.includes(1))
        HoverRemover(0);
    for(var i = 0; i < element.length; i++)
        element[i].classList.add("hover-active");
  }

  function HoverRemover(flip){
    if(flip == 1){
        for(var i = 0; i < Groups.length; i++)
        for(var j = 0; j < Groups[i].length; j++)
            if(Groups[i][j].classList.contains("hover-active"))
                Groups[i][j].classList.remove("hover-active");
    }
    else{
        var index = FilteredOrNot.indexOf(1);
            for(var j = 0; j < Groups[index].length; j++)
                Groups[index][j].classList.remove("hover-active");
        FilteredOrNot[index] = 0;
    }
  }


function SearchForElement(){
    var value = document.getElementsByClassName("search")[0].value.toLowerCase();
    console.log(value);
    if(value != ""){
        for(var i = 0; i < InfoTextClasses.length; i++){
            var str = InfoTextClasses[i].innerText.toLowerCase();
                if(str == value){
                    document.getElementsByClassName(InfoTextClasses[i].classList[1])[0].classList.add("hover-active");
                }
        }
    }
    else
    HoverRemover(1);
}

function ClearInputFeild(element){
    if(element.value == ""){
        HoverRemover(1);
    }
}