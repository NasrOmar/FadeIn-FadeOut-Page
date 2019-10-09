function fadeInPage() {
	var fader = document.getElementById('page-fader');
	fader.classList.add('fade-in-page');
}

document.addEventListener('DOMContentLoaded', function() {
	var links = document.getElementsByClassName('link');
	
	for (var i=0; i<links.length; i+=1) {
		links[i].addEventListener('click', function(event) {
			var fader = document.getElementById('page-fader');
			links = event.currentTarget;
			
			var listener = function() {
				window.location = links.href;
				fader.removeEventListener('animationend', listener);
			};
			
			fader.addEventListener('animationend', listener);
			
			event.preventDefault();
			
			fader.classList.add('fade-out-page');
		});
	}
});

//The below is for the page not to be shown in the fade out transition if loaded from cache.
window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-out-page');
});