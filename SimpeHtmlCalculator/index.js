


function mulFunc (){
    var mFirst = document.getElementById('mFirstNumber').value;
    var mSecond = document.getElementById('mSecondNumber').value;
     
    const first_tot = mFirst * mSecond;

    document.getElementById('mulTotal').innerHTML =   "Total: " + first_tot;

    }

    function subFunc() {
        var mFirst = document.getElementById('sFirstNumber').value;
        var mSecond = document.getElementById('sSecondNumber').value;
        
        const tot= mFirst - mSecond;
        
        
        document.getElementById('subTotal').innerHTML = "Total: " + tot;
        
      }

      function addFunc() {
        var mFirst = document.getElementById('tFirstNumber').value;
        var mSecond = document.getElementById('tSecondNumber').value;
        
        const tot= Number(mFirst) + Number(mSecond);
        
        
        document.getElementById('addTotal').innerHTML = "Total: " + tot;
        
      }





    function clearResult() {
        document.getElementById('mulTotal').innerHTML = "";
        document.getElementById('subTotal').innerHTML = "";
        document.getElementById('addTotal').innerHTML = "";
         document.getElementById('tFirstNumber').value ="";
        document.getElementById('tSecondNumber').value= "";
        document.getElementById('sFirstNumber').value = "";
        document.getElementById('sSecondNumber').value="";
        document.getElementById('mFirstNumber').value= "";
        document.getElementById('mSecondNumber').value="";
    }