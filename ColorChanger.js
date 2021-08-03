var arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var colourCode='#';
function changeColour()
{
    for(var i=0;i<6;i++) 
    {
        var j=Math.floor(Math.random()*16);
        colourCode+=arr[j];
    }
    console.log(colourCode);
    var middle=document.querySelector(".middle");
    middle.style.backgroundColor=colourCode;
    var colourName=document.querySelector(".colourName");
    colourName.textContent=colourCode;
    colourCode='#';
}