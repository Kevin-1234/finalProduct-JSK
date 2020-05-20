//JavaScript file for Home page by Qingyuan Zeng


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
    this.footer = document.querySelector(".footer");
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

    if (window.pageYOffset >= 50) {
      this.nav.classList.add("sticky");
      this.nav.style.opacity = "1";
      this.nav.style.zIndex = "3";
    } else {
      this.nav.classList.remove("sticky");
      this.nav.style.opacity = "0.5";
      this.nav.style.zIndex = "0";
    }

    /*side nav buttons switch effect and section zIndex switch*/
    if(scrollTop <= 550 ){
      this.sectionIndex = 1;
      this.sideNavSwitch();
      this.section_zIndexSwitch();
    }else if (scrollTop > 550 && scrollTop <= 6000) {
      this.sectionIndex = 2;
      this.sideNavSwitch();
      this.section_zIndexSwitch();
    }
    else if (scrollTop > 6000) {
      this.sectionIndex = 3;
      this.sideNavSwitch();
      this.section_zIndexSwitch();
    }



    if( scrollTop > 550 &&  scrollTop <= 6000 ){
      this.infoButtons.style.opacity = "1";
    }else{
      this.infoButtons.style.opacity = "0";
    }

    if( scrollTop > 2200 &&  scrollTop <= 6000 ){
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
    if(  scrollTop > 100 && scrollTop <= 3000){
      var opacity = (scrollTop - 100) / 1000;
      this.what.style.opacity = opacity;
      if(opacity > 1){
        this.mouseOverWhat();
      }else{
        this.mouseOutWhat();
        }
    }else{
      this.mouseOutWhat();
      }

    if ( scrollTop > 2000 && scrollTop <= 4200){
      var opacity = (scrollTop - 2000) / 1000;
      this.where.style.opacity = opacity;
      if(opacity > 1){
        this.mouseOverWhere();
      }else{
        this.mouseOutWhere();
        }
    }else{
      this.mouseOutWhere();
    }

    if ( scrollTop > 3200 && scrollTop <= 5500){
      var opacity = (scrollTop - 3200) / 1000;
      this.when.style.opacity = opacity;
      if(opacity > 1){
        this.mouseOverWhen();
      }else{
        this.mouseOutWhen();
        }
    }else{
      this.mouseOutWhen();
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
    this.what.style.color = "white";
    this.what.style.backgroundImage = "linear-gradient(rgb(0, 8, 85, 1), rgba(255,255,255,0.5))";
    this.what.style.backgroundColor =  "rgb(0, 8, 85, 1)";
    this.what.style.boxShadow = "5px 5px 15px rgba(0,0,0,1)";
    this.opacitySwitch();
    setTimeout(this.zIndexSwitch(), 500);
  }
  mouseOutWhat(){
    this.what.style.color = "black";
    this.what.style.backgroundImage = "linear-gradient(rgb(0, 8, 85, 0.7), rgba(255,255,255,0.7))";
    this.what.style.backgroundColor =  "rgb(255, 255, 255, 0)";
    this.what.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.6)";
  }


  mouseOverWhere(){
    this.where.style.color = "white";
    this.where.style.backgroundImage = "linear-gradient(rgb(132, 0, 1, 1), rgba(55, 56, 55,0.7))";
    this.where.style.backgroundColor =  "rgb(132, 0, 1, 1)";
    this.where.style.boxShadow = "5px 5px 15px rgba(0, 0, 0,1)";
    this.index = 2;
    this.opacitySwitch();
    setTimeout(this.zIndexSwitch(), 500);
  }
  mouseOutWhere(){
    this.where.style.color = "black";
    this.where.style.backgroundImage = "linear-gradient(rgb(132, 0, 1, 0.6), rgb(55, 56, 55, 0.6))";
    this.where.style.backgroundColor =  "rgb(255, 255, 255, 0)";
    this.where.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.6)";
  }

  mouseOverWhen(){
    this.when.style.color = "white";
    this.when.style.backgroundImage = "linear-gradient(rgb(132, 0, 1, 1), rgb(0, 8, 85, 0.5), rgb(0, 8, 85, 0.8))";
    this.when.style.backgroundColor =  "rgb(132, 0, 1, 1)";
    this.when.style.boxShadow = "5px 5px 15px rgba(0, 0, 0,1)";
    this.index = 3;
    this.opacitySwitch();
    setTimeout(this.zIndexSwitch(), 500);
  }
  mouseOutWhen(){

    this.when.style.color = "black";
    this.when.style.backgroundImage = "linear-gradient(rgb(132, 0, 1, 0.7), rgb(0, 8, 85, 0.4))";
    this.when.style.backgroundColor =  "rgb(255, 255, 255, 0)";
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
