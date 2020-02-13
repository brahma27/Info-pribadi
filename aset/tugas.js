function aktif() {
    var header = document.getElementById("tes");
    var pil = header.getElementsByClassName("coba");
    for (var i = 0; i < pil.length; i++) {
        pil[i].addEventListener("click", function() {
            var tampung = document.getElementsByClassName("active");
            if (tampung.length > 0) {
                tampung[0].className = tampung[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

function pindah1() {
    document.getElementById("quote").style.display = "block";
    document.getElementById("biografi").style.display = "none";
    aktif();
}

function pindah2() {
    document.getElementById("quote").style.display = "none";
    document.getElementById("biografi").style.display = "block";
    aktif();
}