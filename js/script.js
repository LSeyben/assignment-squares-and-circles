// shift+alt+f = auto align, cntrl / voor comment
// Arrays zoals aangeleverd
let Array10 = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
let Array6 = [100, 200, 300, 400, 500, 600];

// SVG aanmaken en koppeling naar body
let svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg")
svg1.setAttribute("Class", "svg");
svg1.setAttribute("viewBox", "0 0 1000 1000");
svg1.setAttribute("width", "1000");
svg1.setAttribute("height", "1000");
let body = document.querySelector("body");
body.appendChild(svg1);


// functies voor locatie per rechthoek/cirkel
function functieRecht(x, y, r, vormen) {
    let vierkant = document.createElementNS("http://www.w3.org/2000/svg", vormen);                   // vierkanten beetje getweaked met -10/+10 totdat deze rond dezelfde grootte en ligging van de cirkels waren
        vierkant.setAttribute("x", x - 10);
        vierkant.setAttribute("y", y - 10);
        vierkant.setAttribute("width", r + 10);
        vierkant.setAttribute("height", r + 10);
        vierkant.setAttribute("fill", "none");
        vierkant.setAttribute("stroke", "black");
    return vierkant
}

function functieRond(x, y, r, vormen) {
    let rond = document.createElementNS("http://www.w3.org/2000/svg", vormen);
        rond.setAttribute("cx", x);
        rond.setAttribute("cy", y);
        rond.setAttribute("r", r);
        rond.setAttribute("fill", "none");
        rond.setAttribute("stroke", "black");
    return rond
}



// Dubbele loop om door beide arrays te gaan en input te genereren voor functie
for (let i = 0; i < Array10.length; i++) {
    for (let j = 0; j < Array6.length; j++) {
        if (i != 0) {
            svg1.appendChild(functieRond(Array10[i], Array6[j], 10, "circle"))
        }
        else {
            svg1.appendChild(functieRecht(Array10[i], Array6[j], 10, "rect"))
        }
    }
}