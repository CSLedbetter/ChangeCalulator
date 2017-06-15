 angular.module('app', []);

 angular
     .module('app')
     .controller('HomeController', HomeController);

 function HomeController() {
     var vm = this;

     vm.denominations = {
         oneDollar: 100,
         quarter: 25,
         dime: 10,
         nickel: 5,
         penny: 1
     }

     vm.doStuff = function () {
         vm.cost = $('#cost').val()
         vm.given = $('#given').val()
         vm.change = $("input[name='given']").val() * 100 - $("input[name='cost']").val() * 100

         vm.dollars = Math.floor(vm.change / vm.denominations.oneDollar)
         vm.change -= (vm.dollars * vm.denominations.oneDollar)

         vm.quarters = Math.floor(vm.change / vm.denominations.quarter)
         vm.change -= (vm.quarters * vm.denominations.quarter)

         vm.dimes = Math.floor(vm.change / vm.denominations.dime)
         vm.change -= (vm.dimes * vm.denominations.dime)

         vm.nickels = Math.floor(vm.change / vm.denominations.nickel)
         vm.change -= (vm.nickels * vm.denominations.nickel)

         vm.pennies = Math.floor(vm.change / vm.denominations.penny)



         $('#dollars').text(vm.dollars);
         $('#quarters').text(vm.quarters);
         $('#dimes').text(vm.dimes);
         $('#nickels').text(vm.nickels);
         $('#pennies').text(vm.pennies);
         console.log(vm.change)
     };

 }

 function isNumberKey(evt) {
     debugger;
     var charCode = (evt.which) ? evt.which : event.keyCode;
     if (charCode == 46 && evt.srcElement.value.split('.').length > 1) {
         return false;
     }
     if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
         return false;
     return true;
 }