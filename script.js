function FindByAttributeValue(element_type)    {
  All = document.getElementsByTagName(element_type);
  changeEmojis();
  setInterval(function() {changeEmojis();}, 800);
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};

setTimeout(function(){FindByAttributeValue("img");}, 300);
function waitChangeEmojis() {setTimeout(function() {changeEmojis()}, 500)}
function changeEmojis() {
    for (var i = 0; i < All.length; i++) {
        emoji = All[i].getAttribute("src");
        if (emoji.charAt(emoji.length - 18) == "f" && All[i].getAttribute("width") != "50") {
            All[i].setAttribute("src", emoji.replaceAt(emoji.length - 18, "z"));
        } else {
            if (emoji.charAt(emoji.length - 17) == "f" && All[i].getAttribute("width") != "50") {
                All[i].setAttribute("src", emoji.replaceAt(emoji.length - 17, "z"));
            }
        }
    }
}
document.getElementsByTagName("html")[0].addEventListener("click", function() {waitChangeEmojis()});
document.getElementsByTagName("html")[0].setAttribute("onKeyPress", "changeEmojis()");