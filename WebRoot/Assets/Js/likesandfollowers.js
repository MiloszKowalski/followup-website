
// Helper function to add numbers to count
function addToCount(e, i, t) {
  setTimeout(() => {
    e.innerHTML = i;
  }, i * t);
}

// Animation for likes and followers count only when seen first time
var firstSeen = true;
function initLikesAndFollowers(followers, followersCount, likes, likesCount) {
  if(firstSeen) {
    firstSeen = false;
    for (var i = 0; i <= followersCount; i += 1107) {
      addToCount(followers, i, 0.03);
    }
  
    for (var i = 0; i <= likesCount; i += 11027) {
      addToCount(likes, i, 0.002);
    }
  }
}

function init() {

  // Get the count elements and display initial values, also set final values
  var followers = document.getElementById('followers');
  var followersCount = 32103;
  followers.innerHTML = 1107;

  var likes = document.getElementById('likes-count');
  var likesCount = 540323;
  likes.innerHTML = 11027;

  // Add clicking event to svg's buttons
  var followButton = document.getElementById('follow');
  var followButtonMask = document.querySelector('path#follow-mask');
  
  followButton.addEventListener('click', function() {
    followersCount += 1;
    followers.innerHTML = followersCount;
    followButton.classList.add('clicked');
    followButtonMask.classList.add('clicked');
    setTimeout(() => {
      followButton.classList.remove('clicked');
      followButtonMask.classList.remove('clicked');
    }, 200);
  });

  var likeButton = document.getElementById('like');
  var likeButtonMask = document.querySelector('path#like-mask');
  likeButton.addEventListener('click', function() {
    likesCount += 1;
    likes.innerHTML = likesCount;
    likeButton.classList.add('clicked');
    likeButtonMask.classList.add('clicked');
    setTimeout(() => {
      likeButton.classList.remove('clicked');
      likeButtonMask.classList.remove('clicked');
    }, 200);
  });

  // Display counting animation when scrolled to view
  OnScroll(() => {
    if(ScrollPositionY() > 375) initLikesAndFollowers(followers, followersCount, likes, likesCount);
  });


  // Disable accidental text selection when clicking on svg's buttons
  var svgs = document.querySelectorAll('svg');
  ForEach(svgs, (svg) => {
    svg.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);
  });
}

OnLoad(init);