function timer(nums){
    document.getElementById("temp").innerHTML=nums;
    if(nums>0){
        nam(--nums,timer)
    }
        else{
            document.getElementById("temp").innerHTML="Happy independence day"
        }
    }
function nam(nums,timer) {
    setTimeout(function(){
        timer(nums)
    },1000);
}
nam(10,timer)