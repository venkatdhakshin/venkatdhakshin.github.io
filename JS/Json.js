var domElements=function(){
    
document.querySelector("title").id="title";
    
var dlTag=document.createElement('dl');
var dtTag1=document.createElement('dt');
var boldTag1=document.createElement('b');
var boldTag2=document.createElement('b');
var boldTag3=document.createElement('b');
var boldTag4=document.createElement('b');
var boldTag5=document.createElement('b');    
var ddTag1=document.createElement('dd');
ddTag1.id="m_name";
var dtTag2=document.createElement('dt');
var ddTag2=document.createElement('dd');
ddTag2.id="mdir";
var dtTag3=document.createElement('dt');
var ddTag3=document.createElement('dd');
ddTag3.id="direc";
var dtTag4=document.createElement('dt');
var ddTag4=document.createElement('dd');
ddTag4.id="star";
var dtTag5=document.createElement('dt');
var ddTag5=document.createElement('dd');
ddTag5.id="year";
    
dtTag1.appendChild(boldTag1).textContent='Movie:';
dtTag2.appendChild(boldTag2).textContent='Music:';
dtTag3.appendChild(boldTag3).textContent='Director:';
dtTag4.appendChild(boldTag4).textContent='Starring:';
dtTag5.appendChild(boldTag5).textContent='Year:';

  
    
dlTag.appendChild(dtTag1);
dlTag.appendChild(ddTag1);
dlTag.appendChild(dtTag2);
dlTag.appendChild(ddTag2);
dlTag.appendChild(dtTag3);
dlTag.appendChild(ddTag3);
dlTag.appendChild(dtTag4);
dlTag.appendChild(ddTag4);
dlTag.appendChild(dtTag5);
dlTag.appendChild(ddTag5);
var songsDetails=document.querySelector(".songs_d");
songsDetails.appendChild(dlTag);

}


var requestURL ='https://venkatdhakshin.github.io/JS/movie_details.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        domElements();
        var movie_name;
        movie_name=document.getElementById("title").innerHTML.trim();
        
        var movie_details = request.response;   
     for (var movieName in movie_details) {
                        if(movieName===movie_name){
                           var name=movie_details[movieName][0].name;
                           var music=movie_details[movieName][0].music;
                           var director=movie_details[movieName][0].director;
                           var starring=movie_details[movieName][0].starring;
                           var year=movie_details[movieName][0].year;
                    break;
                    }
                else{
                    continue;
                }
           
            }              
                           document.getElementById("m_name").innerHTML=name;
                           document.getElementById("mdir").innerHTML=music;
                           document.getElementById("direc").innerHTML=director;
                           document.getElementById("star").innerHTML=starring;
                           document.getElementById("year").innerHTML=year;
        
    }
     /* var xhr= new XMLHttpRequest();
        xhr.open('GET','https://venkatdhakshin.github.io/JS/movie_details.json');
        
          xhr.onreadystatechange= function(){
              if(xhr.readyState===4)
                  {
                      if(xhr.status===200){
                           movie_name=document.getElementById("title").innerHTML;
                           var movi_name=movie_name;
                           var movie_list=JSON.parse(xhr.responseText);
                      for (var movie_name in movie_list) {
                           var name=movie_list[movie_name][0].name;
                           var music=movie_list[movie_name][0].music;
                           var director=movie_list[movie_name][0].director;
                           var starring=movie_list[movie_name][0].starring;
                           var year=movie_list[movie_name][0].year;
                           }
                      }
                           document.getElementById("m_name").innerHTML=name;
                           document.getElementById("mdir").innerHTML=music;
                           document.getElementById("direc").innerHTML=director;
                           document.getElementById("star").innerHTML=starring;
                           document.getElementById("year").innerHTML=year;
                  }
          } 
          xhr.send();*/