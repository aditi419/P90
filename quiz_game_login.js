function addUser() {
    player_1 = document.getElementById("player1_nameInput").value;
    player_2 = document.getElementById("player2_nameInput").value;

    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location("login_page.html");
}