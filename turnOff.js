AFRAME.registerComponent('turnOff',{
  init: function(){
    var el = this.el;
    el.addEventListener('click', function(evt){
    el.setAttribute('visible', false);
    });
  }
});
