const projectElements = [/*'projectOne'*/,'projectTwo',/*'projectThree'*/,'projectFour','projectFive','projectSix','projectSeven','projectEight', 'projectNine', 'projectTen','projectEleven','projectTwelve'];
const skillElements = ['skillCSS','skillHTML','skillJS'];
const contactElements = ['emailWidget','discordWidget','githubWidget'];
const navElements = ['aboutNAV','projectNAV','certsNAV','contactNAV','futureNAV'];

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

let projectFlash = () => {
    projectElements.forEach(project => boxFlash(project));
}

let aboutNav = document.getElementById('aboutNav');
let contactNav = document.getElementById('contactNav');
let projectNav = document.getElementById('projectNav');
let certsNav = document.getElementById('certsNav');
let futureNav = document.getElementById('futureNav');

certsNav.addEventListener("click", function(){boxFlash("certContainer")});
contactNav.addEventListener("click", function(){boxFlash("contact")});
projectNav.addEventListener("click", function(){projectFlash()});




