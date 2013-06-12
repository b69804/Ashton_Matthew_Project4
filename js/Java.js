



window.addEventListener("DOMContentLoaded", function(){
    
    function $(x){
        var getSomething = document.getElementById(x);
        return getSomething;
    }
    
    function sportOption() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = getID("select"),
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
    
    function addStuff() {
        
    }
    
    
    var sportTypes = ["--Sport Types--", "Football", "Basketball", "Soccer", "Baseball", "Hockey", "Other"];
    sportOption();

    var displayData = $("displayData");
    displayData.addEventListener("click", getStuff);
    var clearData = $("clearData");
    clearData.addEventListener("click", clearStuff);
    var save = $("addData");
    save.addEventListener("click", addStuff);
    
});