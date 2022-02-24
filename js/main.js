const content = document.getElementById("my-content");
const generatorbtn = document.getElementById("generator-button");
generatorbtn.addEventListener("click", function(){

    for (let i = 1; i < 101; i++){
        if ((i % 3 == 0) && (i % 5 == 0)){
            console.log("FizzBuzz");
            let div = document.createElement("div");
            div.classList.add("fizzbuzz-box");
            div.innerHTML = "FizzBuzz";
            content.append(div);
        }
        else if (i % 5 == 0){
            console.log("Buzz");
            let div = document.createElement("div");
            div.classList.add("buzz-box");
            div.innerHTML = "Buzz";
            content.append(div);
        }
        else if (i % 3 == 0){
            console.log("Fizz");
            let div = document.createElement("div");
            div.classList.add("fizz-box");
            div.innerHTML = "Fizz";
            content.append(div);
        }
        else{
            console.log(i);
            let div = document.createElement("div");
            div.classList.add("number-box");
            div.innerHTML = i;
            content.append(div);

        }
    }
})
