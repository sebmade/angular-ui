
/*
 Changes the current element from a link to a span tag based on a condition
 @param expression {boolean} condition to check if it should be a link or not
*/

(function() {

  angular.module('ui.directives').directive('uiMask', function() {
    return {
      require: 'ngModel',
      scope: {
        uiMask: 'evaluate'
      },
      link: function($scope, element, attrs, controller) {
        controller.$render = function() {
          var _ref;
          element.val((_ref = controller.$viewValue) != null ? _ref : '');
          return element.mask($scope.uiMask);
        };
        controller.$parsers.push(function(value) {
          var isValid;
          isValid = element.data('mask-isvalid');
          controller.$setValidity('mask', isValid);
          if (isValid) {
            return element.mask();
          } else {
            return null;
          }
        });
        return element.bind('blur', function() {
          return $scope.$apply(function() {
            return controller.$setViewValue(element.mask());
          });
        });
      }
    };
  });

}).call(this);
