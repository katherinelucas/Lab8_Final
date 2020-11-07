document.addEventListener("DOMContentLoaded",() => {
    let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");

    document.querySelector("#comp").addEventListener("click",(e) =>
    {
    console.log('click');
    console.log('input1',input1.value);
    console.log('input2',input2.value);
    if(input1.value==input2.value && input1.value.length>=8 && input2.value.length>=8)
    {
        document.querySelector("#result").innerText = "Same password and appropriate length";
    }
    else if(input1.value!=input2.value)
    {
        document.querySelector("#result").innerText = "Different password";
    }
    else
    {
        document.querySelector("#result").innerText = "Password too short, must be at least 8 characters long";
    }
    });
});