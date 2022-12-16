
var num = 0;
var galArray = new Array(3);


function back()
{
    if (num > 0)
    {
        num--;
        document.gallery.src= galArray [num].src;
        
    }
    return;
}

 function next()
 {
    if (num <  3)
    {
        num++;
        document.gallery.src= galArray[num].src;
        
    }
    return;
 }

 function arrays()
 {
    galArray[0]  = new Image;
    galArray[0].src = "Images/gym1.jpg";
    galArray[1]  = new Image;
    galArray[1].src = "Images/gym2.jpg";
    galArray[2]  = new Image;
    galArray[2].src = "Images/gym3.jpg";
    return;
 }

 
