 let button = document.getElementById("button-left");
 let button2 = document.getElementById("button-right");

 let backgroundForImage = document.getElementById("placeforslider");
 //let buttons= document.querySelector("button");
 let images = document.querySelectorAll(".changingImg");

 let currentIndex = document.getElementById("currentIndex");
 let totalIndex = document.getElementById("total");
 let x=0;


 


 let imageList = ["/TSAPhotos/TSAAugust2022/newstaff1.jpg","/TSAPhotos/TSAAugust2022/newstaff2.jpg","/TSAPhotos/TSAApril2022/elijah.jpg"
 ,"/TSAPhotos/TSAApril2022/gwcmuseum.jpg"];
 



 //click
 
 button2.addEventListener('click', () => {
  backgroundForImage.style.backgroundImage = "url("+imageList[x]+")";
  images[0].src = imageList[x++];
  console.log(x);

   

  
  
  if(x>imageList.length-1){
    x=0;
  }

  })
  


  button.addEventListener('click', () => {
    backgroundForImage.style.backgroundImage = "url("+imageList[x]+")";
    backgroundForImage.blur();
;    images[0].src = imageList[x--];
  console.log(x);
 

  if(x<0){
    x=imageList.length-1;
  }
  })
  
  
 
 