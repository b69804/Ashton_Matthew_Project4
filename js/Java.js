// Matthew Ashton
// VFW Project 2
// VFW 1306
// JavaScript 



window.addEventListener("DOMContentLoaded", function(){
    
    function $(x){
        var getSomething = document.getElementById(x);
        return getSomething;
    }
    
    function sportOption() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = $("select"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "groups");
        for (var i=0, j=sportTypes.length; i<j; i++) {
            var makeOption = document.createElement("option");
            var sportText = sportTypes[i];
            makeOption.setAttribute("value", sportText);
            makeOption.innerHTML = sportText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    function getFavTeam(){
        var radioButton = document.forms[0].Yes;
        for (var i=0; i<radioButton.length; i++) {
            if (radioButton[i].checked) {
                favValue = radioButton[i].value;
            }
        }
    }
    
    function toggleControls(n){
        switch (n){ 
            case "on":
                $("gameForm").style.display = "none";
                $("clearData").style.display = "inline";
                $("displayData").style.display = "none";
                $("addNewGame").style.display = "inline";
                break;
            case "off":
                $("gameForm").style.display = "block";
                $("clearData").style.display = "inline";
                $("displayData").style.display = "inline";
                $("addNewGame").style.display = "none";
                $("items").style.display = "none";
                break;
            default:
                return false;
        }
    }
    
    function addStuff() {
        var ID      = Math.floor(Math.random()*10000001);
        getFavTeam();
        var item    = {};
            item.gameName       =["Name of Game:", $("gameName").value];
            item.homeTeam       =["Home Team:", $("homeTeam").value];
            item.awayTeam       =["Away Team:", $("awayTeam").value];
            item.group          =["Group:", $("groups").value];
            item.other          =["Other:", $("otherField").value];
            item.favTeam        =["Favorite Team:", favValue];
            item.priority       =["Game Priority:", $("priority").value];
            item.dateOfGame     =["Date of Game:", $("dateOfGame").value];
            item.winningTeam    =["Winning Team:", $("winningTeam").value];
            
        localStorage.setItem(ID, JSON.stringify(item));
        alert("Game Saved!");
    }
    
    function getStuff(){
        toggleControls("on");
        if (localStorage.length === 0) {
            alert("There is no data available.")
        }
        var makeStuff = document.createElement("div");
        makeStuff.setAttribute("id", "items");
        var makeListOfStuff = document.createElement("ul");
        makeStuff.appendChild(makeListOfStuff);
        document.body.appendChild(makeListOfStuff);
        for (var i=0, j=localStorage.length; i<j; i++) {
            var createList = document.createElement("li");
            makeListOfStuff.appendChild(createList);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var listObject = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            createList.appendChild(makeSubList);
            for (var n in listObject){ 
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
                var subText = listObject[n][0]+" "+listObject[n][1];
                makeSubli.innerHTML = subText;
            }
        }
    }
    
    function clearStuff(){
        if (localStorage.length === 0) {
            alert("No data to clear!");
        }else{
            localStorage.clear();
            alert("All games deleted!");
            window.location.reload();
            return false;
        }
    }
    
    var sportTypes = ["--Sport Types--", "Football", "Basketball", "Soccer", "Baseball", "Hockey", "Other"],
        favValue;
    sportOption();

    var displayData = $("displayData");
    displayData.addEventListener("click", getStuff);
    var clearData = $("clearData");
    clearData.addEventListener("click", clearStuff);
    var save = $("button");
    save.addEventListener("click", addStuff);
    
});