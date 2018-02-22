// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var h=50, q=25, d=10, n=5, p=1;
    var money={};
if (currency<=0) {
    money={};
}
if (currency>10000) {
    money={
        error:"You are rich, my friend! We don't have so much coins for exchange"
    }
}

if (currency>0 && currency<=10000) {

    if (currency/h>=1) {
        var ost=currency%h;
        H=(currency-ost)/h;
        currency=ost;
        
        var key = "H";
        money[key]=H;


    } else { H=0; } 

    if (currency/q>=1) {
        ost=currency%q;
        Q=(currency-ost)/q;
        currency=ost;

        var key = "Q";
        money[key]=Q;

    } else { Q=0; }
    
    if (currency/d>=1) {
        ost=currency%d;
        D=(currency-ost)/d;
        currency=ost;

        var key = "D";
        money[key]=D;

    } else { D=0; }

    if (currency/n>=1) {
        ost=currency%n;
        N=(currency-ost)/n;
        currency=ost;

        var key = "N";
        money[key]=N;

    } else { N=0; }

     P=currency/p;

    if (P!=0) {var key = "P";
     money[key]=P;}

     


}
   
return money;

}
