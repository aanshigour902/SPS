document.querySelector("button").addEventListener("click",play);

function play()
{
    // img1
    var random1=Math.floor(Math.random()*3)+1;
    document.querySelector(".img1").setAttribute("src","images/"+random1+".png");

    // img2
    var random2=Math.floor(Math.random()*3)+1;
    document.querySelector(".img2").setAttribute("src","images/"+random2+".png");

    if((random1===1 && random2===1) || (random1==2 && random2==2) || (random1==3 && random2==3))
    {
        document.querySelector("h1").innerHTML="It's a draw! <img src='images/Draw.png'>";
        document.querySelector("h1 img").classList.add("headingImg");
    }
    else if((random1===1 && random2===2) || (random1==2 && random2==3) || (random1==3 &&        random2==1))
    {
        document.querySelector("h1").innerHTML="You winn!! <img src='images/win.gif'>";
        document.querySelector("h1 img").classList.add("headingImg");
    }
    else if((random1===1 && random2===3) || (random1==2 && random2==1) || (random1==3 && random2==2))
    {
        document.querySelector("h1").innerHTML="Oops! You lost <img src='images/Lost.png'>";
        document.querySelector("h1 img").classList.add("headingImg");
    }
}