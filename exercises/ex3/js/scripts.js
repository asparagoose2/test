// var colors = ["#012531", "#0C5B70", "#1598C0" , "#41A2CF", "#90D2E8"];
// var colors = ["2,63,165","125,135,185","190,193,212","214,188,192","187,119,132","142,6,59","74,111,227","133,149,225","181,187,227","230,175,185","224,123,145","211,63,106","17,198,56","141,213,147","198,222,199","234,211,198","240,185,141","239,151,8","15,207,192","156,222,214","213,234,231","243,225,235","246,196,225","247,156,212"];
var colors = ["#E63946", "#E96A70", "#EC9A9A", "#EFCAC4", "#92c084", "#A8DADC", "#77ABBD", "#457B9D", "#31587A", "#1D3557"];
var rectangles = [];
var lastName = "duchovne";
var counter = 0;
var elem;

makeRectangle = function() {  
    rectangles[rectangles.length] = {
        "id": "rec" + counter++,
        "color": colors[Math.floor(Math.random() * colors.length)],
        "isToggled" : false
    };
}
makeRectangles = function() {
    for(i in lastName)
    {
        makeRectangle();
        makeRectangle();
    }
}

toggleColor = function () {
    var index = (this.id.toString()).substring(3);

    if(rectangles[index]["isToggled"])
    {
        this.style.background = rectangles[index]["color"];
        this.style.backgroundImage = "none";
    } else {
        this.style.background = "white";
        this.style.backgroundImage = 'url("images/success-kid.jpg")';
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
    }
    rectangles[index]["isToggled"] = !rectangles[index]["isToggled"];
}

makeRecElement = function(rec) {
    var x = document.createElement("div");
    x.id = rectangles[rec]["id"];
    x.className = "layout3rec";
    x.style.background = rectangles[rec]["color"];
    x.onclick = toggleColor;
    if(!((rec+1)%3))
    {
        var star = document.createElement("div");
        star.className = "star";
        x.appendChild(star);
    }
    return x;
}


addRectangle = function() {
    makeRectangle();
    document.getElementById("main3").appendChild(makeRecElement(rectangles.length-1));
}

renderRectangle = function() {
    makeRectangles();
    for(rec in rectangles)
    {
        if(rec == 0) {
            console.log("here");
            elem = document.createElement("div");
            elem.id = "recPlus";
            elem.className = "layout3rec";
            elem.style.background = rectangles[rec]["color"];
            document.getElementById("main3").appendChild(elem);
            elem = document.createElement("a");
            elem.id = "plusBtm";
            elem.innerHTML = '+';
            elem.onclick = addRectangle;
            document.getElementById("recPlus").appendChild((elem))
        } else {
            document.getElementById("main3").appendChild(makeRecElement(rec));
        }
    }
}

render = function() {
    // document.getElementById("recPlus").onclick = addRectangle;
    renderRectangle();
    
}