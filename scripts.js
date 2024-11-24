function linear() {
    var a = parseFloat(document.getElementById('linearA').value);
    var b = parseFloat(document.getElementById('linearB').value);
    var c = parseFloat(document.getElementById('linearC').value);
    var fx = document.querySelector('input[name="rate"]:checked').value;
    
    if (fx=='r1') {
        // Menghitung nilai y
        var y = c;
        document.getElementById('linearY').innerText = `Titik potong y adalah: (0, ${y})`;
        
        // Menghitung nilai x
        var x = -c / b;
        document.getElementById('linearX').innerText = `Titik potong  x adalah: (${x}, 0)`;
        
    }else if (fx=='r2'){
        // Menghitung nilai y
        var y = -c / b;
        document.getElementById('linearY').innerText = `Titik potong y adalah: (0, ${y})`;
        
        // Menghitung nilai x
        var x = -c / a;
        document.getElementById('linearX').innerText = `Titik potong  x adalah: (${x}, 0)`;
    }else{
        alert('Pilih nilai fungsi yang valid.');
    }
    
}

// // scripts.js

function toggleNavbar() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
}
