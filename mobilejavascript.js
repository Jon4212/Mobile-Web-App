document.getElementById('change-color-button').addEventListener('click', function() {
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('welcome-message').style.color = color;
});