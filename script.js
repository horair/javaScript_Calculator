function onclickHandler(a)
{
    var output = document.getElementById("result").value;
    document.getElementById("result").value = output + a;
}
function equal() {
    var a =  document.getElementById("result").value;
    if (a) {
        document.getElementById("result").value = eval(a);
    }
}
function cl() {
    document.getElementById("result").value = ""
}