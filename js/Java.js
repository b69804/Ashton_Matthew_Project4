// Matthew Ashton
// VFW Project 2
// VFW 1306
// JavaScript 



window.addEventListener("DOMContentLoaded", function(){
    //I used easy because it helped me remember that this is the easy way to get things from the HTML page.
    function easy(n){
        var getSomething = document.getElementById(n);
        return getSomething;
    }
    // This is for the drop down menu function for which sport the game is for
    function sportOption() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = easy("select"),
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
    // This function is for getting the radio button value 
    function getFavTeam(){
        var radioButton = document.forms[0].Yes;
        for (var i=0; i<radioButton.length; i++) {
            if (radioButton[i].checked) {
                favValue = radioButton[i].value;
            }
        }
    }
    // This toggles the CSS to display certain things depending on what is clicked.
    function togglePage(n){
        switch (n){ 
            case "on":
                easy("gameForm").style.display = "none";
                easy("clearData").style.display = "inline";
                easy("displayData").style.display = "none";
                easy("addNewGame").style.display = "inline";
                break;
            case "off":
                easy("gameForm").style.display = "block";
                easy("clearData").style.display = "inline";
                easy("displayData").style.display = "inline";
                easy("addNewGame").style.display = "none";
                easy("items").style.display = "none";
                break;
            default:
                return false;
        }
    }
    // This is the function for adding stuff to local storage. 
    function addStuff() {
        var ID      = Math.floor(Math.random()*10000001);
        getFavTeam();
        var item    = {};
            item.gameName       =["Name of Game:", easy("gameName").value];
            item.homeTeam       =["Home Team:", easy("homeTeam").value];
            item.awayTeam       =["Away Team:", easy("awayTeam").value];
            item.group          =["Group:", easy("groups").value];
            item.other          =["Other:", easy("otherField").value];
            item.favTeam        =["Favorite Team:", favValue];
            item.priority       =["Game Priority:", easy("priority").value];
            item.dateOfGame     =["Date of Game:", easy("dateOfGame").value];
            item.winningTeam    =["Winning Team:", easy("winningTeam").value];
            
        localStorage.setItem(ID, JSON.stringify(item));
        alert("Game Saved!");
    }
    // This is the function for getting the stuff from local storage and displaying it as a list
    function getStuff(){
        togglePage("on");
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
    // This clears the local storage of stuff
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

    var displayData = easy("displayData");
    displayData.addEventListener("click", getStuff);
    var clearData = easy("clearData");
    clearData.addEventListener("click", clearStuff);
    var save = easy("button");
    save.addEventListener("click", addStuff);
    
});

// I purposefully used "stuff" in the function and variable names because it is an
// easy way for me to remember what is happening.  It makes the code seem more general
// which I feel will help me later on.  