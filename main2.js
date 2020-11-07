document.addEventListener("DOMContentLoaded",() => {
    var curr = 1;
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("4").style.visibility = "hidden";
    document.getElementById("5").style.visibility = "hidden";

    document.querySelector("#prev").addEventListener("click",(e) =>
    {
        console.log('prev');
        if(curr==1)
        {
            document.getElementById("1").style.visibility = "hidden";
            document.getElementById("5").style.visibility = "visible";
            curr=5;
        }
        else
        {
            if(curr==2)
            {
                document.getElementById("2").style.visibility = "hidden";
                document.getElementById("1").style.visibility = "visible";
                curr=1;
            }
            else if(curr==3)
            {
                document.getElementById("3").style.visibility = "hidden";
                document.getElementById("2").style.visibility = "visible";
                curr=2;
            }
            else if(curr==4)
            {
                document.getElementById("4").style.visibility = "hidden";
                document.getElementById("3").style.visibility = "visible";
                curr=3;
            }
            else
            {
                document.getElementById("5").style.visibility = "hidden";
                document.getElementById("4").style.visibility = "visible";
                curr=4;
            }
        }
    });

    document.querySelector("#next").addEventListener("click",(e) =>
    {
        console.log('next');
        if(curr==5)
        {
            document.getElementById("5").style.visibility = "hidden";
            document.getElementById("1").style.visibility = "visible";
            curr=1;
        }
        else
        {
            if(curr==1)
            {
                document.getElementById("1").style.visibility = "hidden";
                document.getElementById("2").style.visibility = "visible";
                curr=2;
            }
            else if(curr==2)
            {
                document.getElementById("2").style.visibility = "hidden";
                document.getElementById("3").style.visibility = "visible";
                curr=3;
            }
            else if(curr==3)
            {
                document.getElementById("3").style.visibility = "hidden";
                document.getElementById("4").style.visibility = "visible";
                curr=4;
            }
            else
            {
                document.getElementById("4").style.visibility = "hidden";
                document.getElementById("5").style.visibility = "visible";
                curr=5;
            }
        }
    });
});