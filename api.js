fetch('data.json').then(
    res=>
    res.json().then(
        data=>{
              console.log(data);
              if(data.length >0){
                  var temp="";
                   //Loop
                   data.forEach((u)=>{
                       temp+="<tr>";
                    //    temp+="<td>" + u.userId+"</td>";
                       temp+="<td>" + u.id+"</td>";
                       temp+="<td>" + u.title+"</td>";
                       temp+="<td>" + u.completed+"</td>";
                   })
                   //Loop ends
                   document.getElementById("data").innerHTML=temp;
              }
        }
    )
)



















