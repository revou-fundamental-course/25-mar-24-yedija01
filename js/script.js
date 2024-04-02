// Fungsi Untuk Button Hasil BMI
function Calculate() {
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;

    var result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
    var result = result.toFixed(2);

     // Validasi jika input tidak diisi
     if (height === "" || weight === "") {
        alert("Mohon lengkapi semua kolom input."); // Tampilkan pesan peringatan
        return; // Hentikan eksekusi fungsi jika ada input yang tidak terisi
    }

    if (!isNaN(result)) {
        document.getElementById("bmi-output").innerHTML = result;
        if (result < 18.5) {
            document.getElementById("bmi-status").innerHTML = "Kurang";
            document.getElementById("underweight").style.display = "block";// Menampilkan paragraf tentang cara menaikkan berat badan
            document.getElementById("bmi-output").style.color = "darkorange";
            document.getElementById("help").style.display = "block"; // Menampilkan paragraf banntuan dan link website
        } else if (result < 25) {
            document.getElementById("bmi-status").innerHTML = "Sesuai";
            document.getElementById("bmi-output").style.color = "wheat";
            document.getElementById("normal").style.display = "block";
        } else if (result < 30) {
            document.getElementById("bmi-status").innerHTML = "Berlebih";
            document.getElementById("bmi-output").style.color = "red";
            document.getElementById("overweight").style.display = "block";// Menampilkan paragraf tentang cara menurunkan berat badan
            document.getElementById("help").style.display = "block";// Menampilkan paragraf banntuan dan link website
        } else {
            document.getElementById("bmi-status").innerHTML = "Terlampau";
            document.getElementById("bmi-output").style.color = "darkred";
            document.getElementById("overweight").style.display = "block";// Menampilkan paragraf tentang cara menurunkan berat badan
            document.getElementById("help").style.display = "block";// Menampilkan paragraf banntuan dan link website
        }
    }

    HideParagraphs(result);
}

// Fungsi untuk menyembunyikan paragraf yang tidak sesuai dengan hasil
function HideParagraphs(result) {
    if (result < 18.5) {
        document.getElementById("overweight").style.display = "none";
        document.getElementById("normal").style.display = "none";
    } else if(result > 25) {
        document.getElementById("underweight").style.display = "none";
        document.getElementById("normal").style.display = "none";
    }
    else {
        document.getElementById("overweight").style.display = "none";
        document.getElementById("underweight").style.display = "none";
        document.getElementById("help").style.display = "none";
    }
}

// Fungsi untuk button reset
function Reset() {
    //Menghapus nilai input
    document.getElementById("h-input").value = "";
    document.getElementById("w-input").value = "";
    document.getElementById("age").value = "";

    //Menghapus pilihan Gender
    document.getElementById("sex-man").checked = false;
    document.getElementById("sex-woman").checked = false;


    //Mengembalikan tampilan hasil BMI
    document.getElementById("bmi-output").innerHTML = "";
    document.getElementById("bmi-status").innerHTML = "";

    //Menghilangkan paragraf
    document.getElementById("underweight").style.display = "none";
    document.getElementById("overweight").style.display = "none";
    document.getElementById("help").style.display = "none";
}
