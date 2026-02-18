document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const playerName = document.getElementById('playerName').value;
  const inGameID = document.getElementById('inGameID').value;
  const teamName = document.getElementById('teamName').value || 'N/A';
  const map = document.getElementById('map').value;
  const mode = document.getElementById('mode').value;

  if(!playerName || !inGameID || !map || !mode){
    alert('Please fill all required fields');
    return;
  }

  const message = `*RK ESPORTS REGISTRATION*\nPlayer: ${playerName}\nIn-Game ID: ${inGameID}\nTeam: ${teamName}\nMap: ${map}\nMode: ${mode}`;

  // WhatsApp auto-send
  const whatsappNumber = "03302281172";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  // Optionally reset form
  this.reset();
  alert("Registration data sent via WhatsApp!");
});