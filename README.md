# Tip_Calculator

# HTML Code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="./index.css">
    <script src="./index.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="card mt-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-md-4 vertical-line" >
                        <div class="form-group p-2 pl-4 ">
                            <label for="usr" class="text-muted mb-0">Bill</label>
                            <input type="text" class="form-control " id="usr">
                          </div>
                          <label for="usr" class="text-muted mb-0 pl-4">Tip %</label>
                          <div class="input-group mb-4 pl-4">
                            <span class="input-group-text input-group-prepend link-style" onclick="increaseValueTip()">+</span><input type="number" class="form-control"                                      id="numberTip"><span class="input-group-text input-group-prepend link-style" onclick="decreaseValueTip()">-</span>
                             </div>
                            <label for="usr" class="text-muted mb-0 pl-4">Number of people</label>
                            <div class="input-group pl-4 pb-3">
                                <span class="input-group-text input-group-prepend link-style" onclick="increaseValue()">+</span><input type="number" class="form-control"                                          id="number" ><span class="input-group-text input-group-prepend link-style" onclick="decreaseValue()">-</span>
                           
                          </div>
                          <button class="btn btn-dark float-right"  id="button" onclick=" tipAndTotalCalculate()">Calculate</button>
                    </div>
                        
                    <div class="col-md-8" >
                        <div class="row padding  ">
                            <div class="col-md-4"> 
                                <h4>Tip</h4>
                                <p class="text-muted">per person</p>
                            </div> 
                            <div class="col-md-8" >
                                <h1 class="display-4" id="tip"></h1>
                            </div>    

                        </div>
                        <div class="row padding  pt-0">
                            <div class="col-md-4"> 
                                <h4 class="">Total</h4>
                                <p class="text-muted">per person</p>
                            </div> 
                            <div class="col-md-8" >
                                <h1 class="display-3"id="total"></h1>
                            </div>    

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</body>
</html>


# CSS Code

.vertical-line{
    border-right: 1px solid#c5c5c5;
    
  }

  .padding{
      padding: 50px 0px 10px 50px;
  }

  .link-style{
      cursor: pointer;
  }
  
  
  # JavaScript Code
  
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

 
  
