function updateTime() {
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const dateTimeString = `${day} ${date} ${month} ${year}<br>${hours}:${minutes}:${seconds}`;
    
    document.getElementById('date-time').innerHTML = dateTimeString;
}

setInterval(updateTime, 1000);
updateTime();

document.body.addEventListener('click', function() {
    const audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
        audio.play();
    }
});

document.getElementById('message-button').addEventListener('click', function() {
    const flowerImage = document.getElementById('flower-image');
    if (flowerImage.style.display === 'none' || flowerImage.style.display === '') {
        flowerImage.style.display = 'block';
    } else {
        flowerImage.style.display = 'none';
    }
});
