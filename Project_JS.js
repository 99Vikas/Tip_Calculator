function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function increaseValueTip() {
    var value = parseInt(document.getElementById('numberTip').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberTip').value = value;
  }
function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
function decreaseValueTip() {
    var value = parseInt(document.getElementById('numberTip').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numberTip').value = value;
  }


  function tipAndTotalCalculate(){
      var tipPercent=parseFloat(document.getElementById('numberTip').value);
       var numberOfPeople=parseFloat(document.getElementById('number').value) ;
       var bill=parseFloat(document.getElementById('usr').value) ;
       var tipTotal=(tipPercent*bill)/100
       var tipValue=tipTotal/2;
    var total=(bill+tipTotal)/numberOfPeople;
        document.getElementById('tip').innerHTML=`$ ${tipValue}`;
        document.getElementById('total').innerHTML=`$ ${total}`; 
    }

 