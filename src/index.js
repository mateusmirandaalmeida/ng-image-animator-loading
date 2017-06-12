//REQUIRE CSS
require('./animator.css');

//IMPORTS
import { Animator } from  './animator';


((exports, angular) => {

  if(!angular){
    throw "ImageAnimatorLoading require's AngularJS in window!!";
  }

  const ngImageAnimatorLoading = angular.module('ngImageAnimatorLoading', []);

  ngImageAnimatorLoading.directive('animatorLoading', () => new Animator);

  if(exports){
     exports = ngImageAnimatorLoading;
  }

})( (window && window.module && window.module.exports) ? module.exports : undefined, (window && window.angular) ? window.angular : undefined);
