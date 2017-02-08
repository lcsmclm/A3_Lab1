$(document).foundation();
(function() {

var carCont = document.querySelectorAll('.thumbInfo img'),
carWrapper = document.querySelector('.mainContainer'),
modelName = document.querySelector('.modelName'),
priceInfo = document.querySelector('.priceInfo'),
modelDetails = document.querySelector('.modelDetails');


//alert(carCont.length);
function contentChange(){
//alert("working");
  httpRequest = new XMLHttpRequest();
  if(!httpRequest){
    console.log ('Error. Please use a different browser.');
  return false;
  }
  httpRequest.onreadystatechange = selectedCar;
  httpRequest.open('GET', 'includes/ajaxQuery.php' + "?model=" + this.id);
  httpRequest.send();
};

function selectedCar(event){



  if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200)
  carData = JSON.parse(httpRequest.responseText);
  modelName.firstChild.nodeValue = carData.modelName;
  [].forEach.call(document.querySelectorAll('.hidden'), function(item){
    item.classList.remove('hidden');
  });
  modelName.firstChild.nodeValue = carData.modelName;
  priceInfo.firstChild.nodeValue = carData.pricing;
  modelDetails.firstChild.nodeValue = carData.modelDetails;
};


[].forEach.call(carCont, function(el){
el.addEventListener('click', contentChange, false);

});
})();
