function switchToBar() {
  var searchBar = document.getElementById("searchBar");
  searchBar.style.width = "25%";
  searchBar.style.borderRadius = "6px";
  searchBar.style.padding = "12px 20px 12px 40px";
  searchBar.style.cursor = "auto";
  searchBar.style.transform = "scale (1.01)"
  document.getElementsByName('search')[0].placeholder='Search...';
  document.getElementById("close").style.display = "block";
}

function closeBar() {
  var searchBar = document.getElementById("searchBar");
  if (searchBar.style.width) {
    searchBar.style.width = "";
    searchBar.style.borderRadius = "6px";
    searchBar.style.padding = "";
    searchBar.style.cursor = "";
    searchBar.value = "";
    document.getElementsByName('search')[0].placeholder = 'Search';
    document.getElementById("close").style.display = "none"; 

    setTimeout(function() {
      searchBar.style.borderRadius = "";
    }, 300); 
  }
}

document.addEventListener('click', function(event) {
  var searchBar = document.getElementById("searchBar");

  if (event.target !== searchBar && !searchBar.contains(event.target)) {
    closeBar();
  }
});

window.onscroll = function() {
  shrinkHeader();
};

function shrinkHeader() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.querySelector('header');
  var img = document.getElementById('shrinkImg');
  var searchBar = document.getElementById("searchBar");
  var close = document.getElementById("close");

  if (scrollPosition > 100) {
    header.style.position = 'fixed';
    header.style.top = 0;
    header.style.width = '100%';
    img.style.width = '7.5%';
    searchBar.style.margin = "1% 2.5%";
    close.style.margin = "1.8% 4%";
  } else {
    header.style.position = 'sticky';
    header.style.top = '';
    header.style.width = '';
    img.style.width = '';
    img.style.display = '';
    searchBar.style.margin = "";
    close.style.margin = "";
  }

  if (scrollPosition > 100) {
    var middlePosition = (header.offsetWidth - img.offsetWidth) / 2;

    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = 0 + 'px';
    img.style.transform = 'translateY(-50%)';
  } else {
    img.style.position = '';
    img.style.top = '';
    img.style.left = '';
    img.style.transform = '';
  }
}