var date = new Date();

if(date.getDate() == 27 && date.getMonth() + 1 == 5 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam1');
  exam.classList.add("show");

  if(date.getHours() == 16 && date.getMinutes() <= 30){
    var css = document.getElementById("now1");
    css.style.display = "inline-block";
  } 

} 
else if(date.getDate() == 28 && date.getMonth() + 1 == 5 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam2');
  exam.classList.add("show");
  if(date.getHours() == 16 && date.getMinutes() <= 40){
    var css = document.getElementById("now2");
    css.style.display = "inline-block";
  }
}
else if(date.getDate() == 29 && date.getMonth() + 1 == 5 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam3');
  exam.classList.add("show");
  if(date.getHours() == 16 && date.getMinutes() <= 30){
    var css = document.getElementById("now3");
    css.style.display = "inline-block";
  }
} 
else if(date.getDate() == 31 && date.getMonth() + 1 == 5 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam4');
  exam.classList.add("show");
  if(date.getHours() == 16 && date.getMinutes() <= 40){
    var css = document.getElementById("now4");
    css.style.display = "inline-block";
  }
} 
else if(date.getDate() == 1 && date.getMonth() + 1 == 6 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam5');
  exam.classList.add("show");
  if(date.getHours() == 16 && date.getMinutes() <= 30){
    var css = document.getElementById("now5");
    css.style.display = "inline-block";
  }
} 
else if(date.getDate() == 2 && date.getMonth() + 1 == 6 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam6');
  exam.classList.add("show");
  if(date.getHours() == 16 && date.getMinutes() <= 30){
    var css = document.getElementById("now6");
    css.style.display = "inline-block";
  }
} 
else if(date.getDate() == 3 && date.getMonth() + 1 == 6 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam7');
  exam.classList.add("show");
  if(date.getHours() == 16 && date.getMinutes() <= 40){
    var css = document.getElementById("now7");
    css.style.display = "inline-block";
  }
} 
else if(date.getDate() == 4 && date.getMonth() + 1 == 6 && date.getFullYear() == 2021){
  var exam = document.getElementById('exam8');
  exam.classList.add("show");
  if(date.getHours() == 16 && date.getMinutes() <= 40){
    var css = document.getElementById("now8");
    css.style.display = "inline-block";
  }
}