var sual = confirm("Stek xosluyursan?");
if (sual ==true){
    var yas = prompt("nece yasiniz var?")
    if(yas <21){
        alert("Size stek yemek olmaz");
    }
    else {
        var fri = confirm("Kartof fri isteyirsizmi?")
        if (fri == true){
            var sous = prompt("yaninda hansi sous olsun?")
            var sifaris = (sous + " souslu friniz hazirlanir")
            alert(sifaris)
        }
        else{
            nus = alert("nus osun")
        }
    }
}
else{
    
}
