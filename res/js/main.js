// const projects = [  'projectOne','projectTwo','projectThree','projectFour','projectFive','projectSix',
//                     'skillCSS','skillHTML','skillJS', 'emailWidget','discordWidget','githubWidget',
//                     'aboutNAV','projectNAV','certsNAV','contactNAV','futureNAV'];
// const boxes = [];

// projects.forEach(function(box){boxes.push(document.getElementById(box))});

let boxFlash = elementID => {
    let flashID = document.getElementById(elementID);
    flashID.style.animation = "glow 0.2s 6 alternate";
    rebootNode(flashID,elementID);
}

let rebootNode = (nodeID, elementID) => {
    let oldNode = nodeID;
    console.log("node acquired");
    let reboot = oldNode.cloneNode(true);
    reboot.id = elementID;
    oldNode.parentNode.replaceChild(reboot, oldNode);
}

let aboutNav = document.getElementById('aboutNav');
let contactNav = document.getElementById('contactNav');
let projectNav = document.getElementById('projectNav');
let certsNav = document.getElementById('certsNav');
let futureNav = document.getElementById('futureNav');

certsNav.addEventListener("click", function(){boxFlash("certContainer")});
contactNav.addEventListener("click", function(){boxFlash("contact")});
projectNav.addEventListener("click", function(){boxFlash("projects")});




