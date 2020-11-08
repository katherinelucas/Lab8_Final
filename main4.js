document.addEventListener("DOMContentLoaded",() => {
    let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");
    let input3 = document.querySelector("#input3");
    let input4 = document.querySelector("#input4");
    var tag = document.getElementById("pastel");
    var wbord = document.getElementById("myDiv");
    document.getElementById("myDiv").style.border = "thick solid lavender";
    // document.getElementById("myDIV").style.width = "100";


    document.querySelector("#colorborder").addEventListener("click",(e) =>
    {
        console.log('input3', input3.value);
        wbord.style.borderColor = input3.value;
    });

    document.querySelector("#colorbg").addEventListener("click",(e) =>
    {
        console.log('input4', input4.value);
        tag.style.backgroundColor = input4.value;
    });

    document.querySelector("#wborder").addEventListener("click",(e) =>
    {
        console.log('input1', input1.value);
        wbord.style.border = input1.value;
    });

    document.querySelector("#wbg").addEventListener("click",(e) =>
    {
        console.log('input2', input2.value);
        wbord.style.width = input2.value;
    });
});