/*
 * 求1000以内的水仙花数 
*/
function PrintNumber(){
    for(var i=100;i<1000;i++){
        var a=parseInt(i/100);
        var b=parseInt((i-a*100)/10);
        var c=parseInt(i-a*100-b*10);
        if(i==a*a*a+b*b*b+c*c*c){
            console.log(i)
        }

    }
}
PrintNumber();