const carouselWrapper = document.querySelector('.embeded-tweet .tweet-wrapper')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const box = document.querySelector('.another-box');
const one = document.querySelector('.one');
const tweetWrapper = document.querySelector('.tweet-wrapper')
const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menu-bar');
const mobileItem = document.querySelector('.menu-text');
const navItems = document.querySelectorAll('.click-menu')

const two = document.querySelector('.two');
const line = document.querySelector('.line')
const three = document.querySelector('.three');
const tweetCount = 3
console.log(navItems)
box.addEventListener("click", function(){
  one.classList.toggle('top')
  two.classList.toggle('hide')
  three.classList.toggle('bottom')
  menuBar.classList.toggle('ani')
  mobileItem.classList.toggle('showing');
});

const clearNavItems = () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('move')
  })
}
navItems.forEach(navItem => {
  navItem.addEventListener('click' , function(){
      clearNavItems()
      navItem.classList.add('move')
  })

})
let currentCarouselIndex = 0

const moveCarousel = i => {
  carouselWrapper.style.transform = `translateX(-${417 * i}px)`
}

const handlePrevClick = e => {
  if (currentCarouselIndex === 0) return
  currentCarouselIndex -= 1

  moveCarousel(currentCarouselIndex)
}

const handleNextClick = e => {
  if (currentCarouselIndex === tweetCount - 1) return

  currentCarouselIndex += 1
  moveCarousel(currentCarouselIndex)
}
console.log(prev, next)
prev.addEventListener('click', handlePrevClick)

next.addEventListener('click', handleNextClick)

// fetching ...
function url(){
const url =`https://twitter-api-proxy-mmohucqzjr.now.sh/1.1/statuses/user_timeline.json?screen_name=LDNHarleyClinic&count=${tweetCount}`
 fetch(url)
 .then(res => res.json())
 .then(function(data){
  updateUI(data)
})}
function updateUI(data){
  const filterText = data.map( x => x.text)
  filterText.forEach(text => {
    tweetWrapper.innerHTML += `
      <div class="item">
        <h2 class='tweet-header'>#PixiJS</h2>
        <p class='tweet-discription'>
          streakimage<span class='link'> @streakimage </span>4 days ago
        </p>
        <p class="tweet">
          ${text}
        </p>
      </div>
    `
  })


}

url()

