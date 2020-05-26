


class Display {

  constructor() {
    this.index = 0;
    this.sectionIndex = 0;
    this.nav = document.querySelector(".navigation");
    this.mainContent = document.querySelector(".mainContent");
    this.infoButtons = document.querySelector(".infoButtons");
    this.what = document.querySelector(".what");
    this.where = document.querySelector(".where");
    this.when = document.querySelector(".when");
    this.displayContainer = document.querySelector(".displayContainer");
    this.whatDisplay = document.querySelector(".whatDisplay");
    this.whatDisplayText = document.querySelector(".whatDisplayText");
    this.whereDisplay = document.querySelector(".whereDisplay");
    this.whereDisplayText = document.querySelector(".whereDisplayText");
    this.whenDisplay = document.querySelector(".whenDisplay");
    this.whenDisplayText = document.querySelector(".whenDisplayText");
    this.timeTable = document.querySelector(".timeTable");
    this.sponsors = document.querySelector(".sponsors");
    this.footer = document.querySelector("footer");
    this.navS1 = document.querySelector(".navS1");
    this.navS2 = document.querySelector(".navS2");
    this.navS3 = document.querySelector(".navS3");

  }


  /*navigation hover effect*/

  mouseOverNav(){
  this.nav.style.opacity = "1";

  }
  mouseOutNav(){
    this.nav.style.opacity = "0.5";
  }

  /*control sticky effect for navigation bar and sliding effect for other elements in this page*/
  stickyContent() {
    var scrollTop = document.documentElement.scrollTop;

    //console.log(scrollTop);

    if (window.pageYOffset >= 50) {
      this.nav.style.opacity = "1";
      this.nav.style.zIndex = "3";
    } else {
      this.nav.style.opacity = "0.5";
    }

    /*side nav buttons switch effect and section zIndex switch*/
    if(scrollTop <= 550 ){
      this.sectionIndex = 1;
      this.sideNavSwitch();
      this.section_zIndexSwitch();
    }else if (scrollTop > 550 && scrollTop <= 6600) {
      this.sectionIndex = 2;
      this.sideNavSwitch();
      this.section_zIndexSwitch();
    }
    else if (scrollTop > 6600) {
      this.sectionIndex = 3;
      this.sideNavSwitch();
      this.section_zIndexSwitch();
    }



    if( scrollTop > 200 &&  scrollTop <= 6600 ){
      this.infoButtons.style.opacity = "1";
    }else{
      this.infoButtons.style.opacity = "0";
    }

    if( scrollTop >= 1100 &&  scrollTop <= 6600){
      this.displayContainer.style.opacity="1";
    }else{
      this.displayContainer.style.opacity = "0";
    }

    if (scrollTop > 6600){
      this.timeTable.style.opacity = "1";
    }
    else{
      this.timeTable.style.opacity = "0";
    }

    if (scrollTop > 6900){
      this.sponsors.style.opacity = "1";
    }else{
      this.sponsors.style.opacity = "0";
    }

    /*control button fade in and active effects by scrolling */
    if(  scrollTop > 100 ){
      var opacity = (scrollTop - 100) / 1000;
      this.what.style.display="flex";
      this.what.style.opacity = opacity;
      if(opacity > 1){
        this.mouseOverWhat();
      }
    }else{
      this.what.style.display="none";
    }

    if ( scrollTop >= 2000){
      var opacity = (scrollTop - 2000) / 1000;
      this.where.style.display="flex";
      this.where.style.opacity = opacity;
      if(opacity > 1){
        this.mouseOverWhere();
      }
    }else{
      this.where.style.display="none";
    }

    if ( scrollTop >= 3200) {
      var opacity = (scrollTop - 3200) / 1000;
      this.when.style.display="flex";
      this.when.style.opacity = opacity;
      if(opacity > 1){
        this.mouseOverWhen();
      }
    }else{
      this.when.style.display="none";
    }

  }


  /*control the switch between side navigation buttons */
  sideNavSwitch(){
    if (this.sectionIndex === 1){
      this.navS1.style.backgroundColor = "rgb(3, 144, 218)";
      this.navS2.style.backgroundColor = "grey";
      this.navS3.style.backgroundColor = "grey";
      this.navS1.style.color = "white";
      this.navS2.style.color = "black";
      this.navS3.style.color = "black";
      this.navS1.style.transform = "scale(1.5)";
      this.navS2.style.transform = "scale(1)";
      this.navS3.style.transform = "scale(1)";
    }else if(this.sectionIndex === 2){
      this.navS1.style.backgroundColor = "grey";
      this.navS2.style.backgroundColor = "rgb(3, 144, 218)";
      this.navS3.style.backgroundColor = "grey";
      this.navS1.style.color = "black";
      this.navS2.style.color = "white";
      this.navS3.style.color = "black";
      this.navS1.style.transform = "scale(1)";
      this.navS2.style.transform = "scale(1.5)";
      this.navS3.style.transform = "scale(1)";
    }else if(this.sectionIndex === 3){
      this.navS1.style.backgroundColor = "grey";
      this.navS2.style.backgroundColor = "grey";
      this.navS3.style.backgroundColor = "rgb(3, 144, 218)";
      this.navS1.style.color = "black";
      this.navS2.style.color = "black";
      this.navS3.style.color = "white";
      this.navS1.style.transform = "scale(1)";
      this.navS2.style.transform = "scale(1)";
      this.navS3.style.transform = "scale(1.5)";
    }
  }

  /*control the zIndex switch between sections */
  section_zIndexSwitch(){
    if(this.sectionIndex === 1){
      this.infoButtons.style.zIndex = '-1';
      this.displayContainer.style.zIndex = '-1';
      this.timeTable.style.zIndex = '-1';
      this.sponsors.style.zIndex = '-1';
      this.footer.style.zIndex = '-1';
    }else if(this.sectionIndex === 2){
      this.infoButtons.style.zIndex = '1';
      this.displayContainer.style.zIndex = '1';
      this.timeTable.style.zIndex = '-1';
      this.sponsors.style.zIndex = '-1';
      this.footer.style.zIndex = '-1';
    }else if(this.sectionIndex === 3){
      this.infoButtons.style.zIndex = '-1';
      this.displayContainer.style.zIndex = '-1';
      this.timeTable.style.zIndex = '1';
      this.sponsors.style.zIndex = '1';
      this.footer.style.zIndex = '1';
    }
  }

/*control a button's looking and what the display panel shows while it is being hovered*/
  mouseOverWhat() {
    this.index = 1;
    this.what.style.color = "rgb(230,230,230)";
    this.what.style.backgroundColor = "rgb(20, 20, 92, 1)";
    this.what.style.boxShadow = "5px 5px 15px rgba(0,0,0,1)";
    this.opacitySwitch();
    this.mouseOutWhere();
    this.mouseOutWhen();
    setTimeout(this.zIndexSwitch(), 500);
  }
  mouseOutWhat(){
    this.what.style.color = "rgb(20,20,20)";
    this.what.style.backgroundColor = "	rgb(20, 20, 92, 0.7)";
    this.what.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.6)";
  }


  mouseOverWhere(){
    this.where.style.color = "rgb(230,230,230)";
    this.where.style.backgroundColor =  "	rgb(142, 10, 12, 1)";
    this.where.style.boxShadow = "5px 5px 15px rgba(0, 0, 0,1)";
    this.index = 2;
    this.opacitySwitch();
    this.mouseOutWhat();
    this.mouseOutWhen();
    setTimeout(this.zIndexSwitch(), 500);
  }
  mouseOutWhere(){
    this.where.style.color = "rgb(20,20,20)";
    this.where.style.backgroundColor =  "	rgb(179, 4, 4,0.7)";
    this.where.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.6)";
  }

  mouseOverWhen(){
    this.when.style.color = "rgb(230,230,230)";
    this.when.style.backgroundColor =  "rgb(57, 56, 56, 1)";
    this.when.style.boxShadow = "5px 5px 15px rgba(0, 0, 0,1)";
    this.index = 3;
    this.opacitySwitch();
    this.mouseOutWhat();
    this.mouseOutWhere();
    setTimeout(this.zIndexSwitch(), 500);
  }
  mouseOutWhen(){

    this.when.style.color = "rgb(20,20,20)";
    this.when.style.backgroundColor =  "rgb(57, 56, 56, 0.7)";
    this.when.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.6)";

  }

  /*ZIndex switch for display panels to ensure the content on the current panel is accessiable*/
  zIndexSwitch(){
    if(this.index === 1){
      this.whatDisplay.style.zIndex = "2";
    this.whatDisplayText.style.zIndex = "2";
    this.whereDisplay.style.zIndex = "1";
    this.whereDisplayText.style.zIndex = "1";
    this.whenDisplay.style.zIndex = "1";
    this.whenDisplayText.style.zIndex = "1"
  }
    else if (this.index === 2) {
      this.whatDisplay.style.zIndex = "1";
      this.whatDisplayText.style.zIndex = "1";
      this.whereDisplay.style.zIndex = "2";
      this.whereDisplayText.style.zIndex = "2";
      this.whenDisplay.style.zIndex = "1";
      this.whenDisplayText.style.zIndex = "1"
    }
    else if (this.index === 3) {
      this.whatDisplay.style.zIndex = "1";
      this.whatDisplayText.style.zIndex = "1";
      this.whereDisplay.style.zIndex = "1";
      this.whereDisplayText.style.zIndex = "1";
      this.whenDisplay.style.zIndex = "2";
      this.whenDisplayText.style.zIndex = "2"
    }
  }

  /*Opacity switch for display panels to create fade in and out effects*/
  opacitySwitch(){
    if (this.index === 1) {
      this.whatDisplay.style.opacity = "1";
      this.whatDisplayText.style.opacity = "1";
      this.whereDisplay.style.opacity = "0";
      this.whereDisplayText.style.opacity = "0";
      this.whenDisplay.style.opacity = "0";
      this.whenDisplayText.style.opacity = "0";
    }
    else if (this.index === 2) {
      this.whatDisplay.style.opacity = "0";
      this.whatDisplayText.style.opacity = "0";
      this.whereDisplay.style.opacity = "1";
      this.whereDisplayText.style.opacity = "1";
      this.whenDisplay.style.opacity = "0";
      this.whenDisplayText.style.opacity = "0";
    }
    else if (this.index === 3) {
      this.whatDisplay.style.opacity = "0";
      this.whatDisplayText.style.opacity = "0";
      this.whereDisplay.style.opacity = "0";
      this.whereDisplayText.style.opacity = "0";
      this.whenDisplay.style.opacity = "1";
      this.whenDisplayText.style.opacity = "1";
    }
  }


  }



displayInfo = new Display();

displayInfo.nav.addEventListener("mouseover", function() {displayInfo.mouseOverNav()});
displayInfo.nav.addEventListener("mouseout", function() {displayInfo.mouseOutNav()});

displayInfo.what.addEventListener("mouseover", function() {displayInfo.mouseOverWhat()});
displayInfo.what.addEventListener("mouseout", function() {displayInfo.mouseOutWhat()});

displayInfo.where.addEventListener("mouseover", function() {displayInfo.mouseOverWhere()});
displayInfo.where.addEventListener("mouseout", function() {displayInfo.mouseOutWhere()});

displayInfo.when.addEventListener("mouseover", function() {displayInfo.mouseOverWhen()});
displayInfo.when.addEventListener("mouseout", function() {displayInfo.mouseOutWhen()});

$(document).ready(function(){
  $(".whenTextBlock1").mouseover(function(){
    $(".whenDisplay").css({"background-image":"url('styles/images/BS.jpg')"});
    $(".whenTextBlock1").css({ "background-color":"rgb(230, 230, 230)", "color":"rgb(30,30,30)"});
  });
  $(".whenTextBlock1").mouseout(function(){
    $(".whenDisplay").css("background-image", "url('styles/images/events.jpg')");
    $(".whenTextBlock1").css({ "background-color":"rgb(230, 230, 230, 0)", "color":"rgb(230, 230, 230)"});
  });

  $(".whenTextBlock2").mouseover(function(){
    $(".whenDisplay").css("background-image", "url('styles/images/CSC.JPG')");
    $(".whenTextBlock2").css({ "background-color":"rgb(230, 230, 230)", "color":"rgb(30,30,30)"});
  });
  $(".whenTextBlock2").mouseout(function(){
    $(".whenDisplay").css("background-image", "url('styles/images/events.jpg')");
    $(".whenTextBlock2").css({ "background-color":"rgb(230, 230, 230, 0)", "color":"rgb(230,230,230)"});
  });

  $(".whenTextBlock3").mouseover(function(){
    $(".whenDisplay").css("background-image", "url('styles/images/BIC.JPG')");
    $(".whenTextBlock3").css({ "background-color":"rgb(230, 230, 230)", "color":"rgb(30,30,30)"});
  });
  $(".whenTextBlock3").mouseout(function(){
    $(".whenDisplay").css("background-image", "url('styles/images/events.jpg')");
    $(".whenTextBlock3").css({ "background-color":"rgb(230, 230, 230, 0)", "color":"rgb(230, 230, 230)"});
  });

  $(".whenTextBlock4").mouseover(function(){
    $(".whenDisplay").css("background-image", "url('styles/images/IC.jpg')");
    $(".whenTextBlock4").css({ "background-color":"rgb(230, 230, 230)", "color":"rgb(30,30,30)"});
  });
  $(".whenTextBlock4").mouseout(function(){
    $(".whenDisplay").css("background-image", "url('styles/images/events.jpg')");
    $(".whenTextBlock4").css({ "background-color":"rgb(230, 230, 230, 0)", "color":"rgb(230, 230, 230)"});
  });
});

window.onscroll = function() {displayInfo.stickyContent()};



function initMap() {

  // The location of Uluru
  var centerPoint = {lat: -12.460366, lng: 130.836578};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.querySelector(".map"), {zoom:18, center: centerPoint});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: centerPoint, map: map});
}
