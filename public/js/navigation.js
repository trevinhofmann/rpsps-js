'use strict';

function Navigation() {

  this.pages = [
    'index',
    'login',
    'register'
  ];

  this.currentPage = 'index';
  
  for (var i in this.pages){
    if (this.pages[i] != this.currentPage){
      $('#'+this.pages[i]).hide();
    }
  }

}

Navigation.prototype.to = function(page) {
  if ($.inArray(page, this.pages) == -1){
    throw 'Page does not exist';
  }
  $('#'+this.currentPage).hide();
  $('#'+page).show();
  this.currentPage = page;
};