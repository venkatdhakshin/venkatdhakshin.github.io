var movie_name;
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

var requestURL ='https://venkatdhakshin.github.io/JS/movie_details.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        
        var movie_details = request.response;
        movie_name=document.getElementById("title").innerHTML;
                           var movi_name=movie_name;
        for (movie_name in movie_details) {
                           var name=movie_details[movie_name][0].name;
                           var music=movie_details[movie_name][0].music;
                           var director=movie_details[movie_name][0].director;
                           var starring=movie_details[movie_name][0].starring;
                           var year=movie_details[movie_name][0].year;
                           }
        document.getElementById("m_name").innerHTML=name;
                           document.getElementById("mdir").innerHTML=music;
                           document.getElementById("direc").innerHTML=director;
                           document.getElementById("star").innerHTML=starring;
                           document.getElementById("year").innerHTML=year;
    }