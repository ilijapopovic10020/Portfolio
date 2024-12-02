let theme = "light"; 

function changeImageButton() {
    if (theme === "light") {
        // Change to dark theme
        document.getElementById('first-image').src = 'assets/img/Sneakers-Shop-4.png';
        document.getElementById('second-image').src = 'assets/img/Sneakers-Shop-5.png';
        document.getElementById('third-image').src = 'assets/img/Sneakers-Shop-6.png';
        document.getElementById('theme-button').innerText = "Dark"; 
        theme = "dark";
    } else {
        // Change back to light theme 
        document.getElementById('first-image').src = 'assets/img/Sneakers-Shop-1.png';
        document.getElementById('second-image').src = 'assets/img/Sneakers-Shop-2.png';
        document.getElementById('third-image').src = 'assets/img/Sneakers-Shop-3.png';
        document.getElementById('theme-button').innerText = "Light";
        theme = "light";
    }
}