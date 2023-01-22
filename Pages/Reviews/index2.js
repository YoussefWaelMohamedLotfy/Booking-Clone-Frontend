var counter=10000;


    var set_increaseing =setInterval(function (){ 
       
        counter=counter+1900;
        if(counter>250000){
            clearInterval(set_increaseing)


        }
        else{
            document.getElementById("increase_number").innerHTML=counter;
        }

       
    },10)




   