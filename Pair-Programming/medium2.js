function compare(str, ana){
    var ana1 = str.replace(/[^\w]/g, ``).toLowerCase();
    var ana2 = ana.replace(/[^\w]/g, ``).toLowerCase();
    if(sortStrings(ana1) === sortStrings(ana2)){
            console.log("Is an anagram");
    }else{
            console.log("Is not an anagram");
    }
}
function sortStrings(str){
    console.log(str.split(``).sort().join());
}
compare("listen", "silent");
