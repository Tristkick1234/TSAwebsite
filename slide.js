 let button = document.getElementById("button");
 let button2 = document.getElementById("button2");
 let images = document.getElementById("changingImg");

 let currentIndex = document.getElementById("currentIndex");
 let totalIndex = document.getElementById("total");
 let x=0;


 let imageList = ["/TSAPhotos/TSAAugust2022/newstaff1.jpg","/TSAPhotos/TSAAugust2022/newstaff2.jpg"];
 

// setting the amount of pictures
 totalIndex.innerHTML = imageList.length;
 currentIndex.innerHTML= x;

 //click
 button.addEventListener('click', () => {
//subtract one
	images.src = imageList[x-=1];
  //if the index is less than zero, set the number and picture to 0
  if(x < 0){
    x=0;
    images.src= imageList[0];
  }
	console.log(x);
  currentIndex.innerHTML = x+1;
  })
  


  button2.addEventListener('click', () => {
  
  
	images.src= imageList[x+=1];

  if(x>1){
    x=1;
    images.src=imageList[1];
  }
  currentIndex.innerHTML = x+1;
	console.log(x);
 
  })
  

 