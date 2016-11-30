$(document).ready(function(){
  $('body').on('click', 'a', function(){
   chrome.tabs.create({url: $(this).attr('https://www.linkedin.com/in/henry-hsu-58073189')});
   return false;
  });
});
