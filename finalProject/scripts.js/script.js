
function myFunction() {
  confirm("შენი ესეი მიღებულია. დაელოდე ჩვენს პასუხს ელ.ფოსტის საშუალებით. წარმატებებს გისურვებ!");
}


function myFunction1() {
  let text = "ყურადღებით გადახედე პასუხებს?\n";
  if (confirm(text) == true) {
    text = "არ აქვს მნიშვნელობა სწორია თუ არა, მაინც ყოჩაღ!";
  } else {
    text = "მართალია, გადახედვა არასოდესაა ზედმეტი";
  }
  document.getElementById("demo").innerHTML = text;
}



