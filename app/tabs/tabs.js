angular.module('tabs.controller', [])
  .controller('TabsController', TabsController);

TabsController.$inject = ['colorClasses'];

function TabsController(colorClasses) {
  var vm = this;
  vm.classesYellow = colorClasses.yellow;
  vm.classesBlue = colorClasses.blue;
  vm.classesOrange = colorClasses.orange;
  vm.classesGreen = colorClasses.green;
  vm.classesGray = colorClasses.gray;
  vm.classesPink = colorClasses.pink;
  vm.classesRed = colorClasses.red;
  vm.classesPurple = colorClasses.purple;
}
