const body = document.querySelector("body")
const images = ['21505A4054892DF60E.gif', 'anna-larin-1397444-unsplash.jpg', 'beach-4016082.jpg', 'bled-1899264.jpg', 'chipmunk-3959206.jpg', 'crystal-ball-4006971.jpg', 'derelict-building-4019880.jpg', 'EBB988ECB998EBB094ED8395.jpg', 'girl-3954232.jpg', 'golden-gate-bridge-731207.jpg', 'hiking-4024132.jpg', 'landscape-3997230.jpg', 'landscape-4022426.jpg', 'ocean-3605547.jpg', 'praline-2966091.jpg', 'rails-4018457.jpg', 'sea-4007309.jpg', 'sky-4011511.jpg', 'thunderstorm-3625405.jpg', 'travel-4011026.jpg', 'water-3161063.jpg', 'water-4013446.jpg', 'water-surface-4020177.jpg']
const chosenImage = images[Math.floor(Math.random() * images.length)]
body.style.backgroundImage = `url(image/${chosenImage})`
body.style.backgroundSize = "cover"
