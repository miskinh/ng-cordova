// install   :     cordova plugin add cordova-plugin-contacts-phonenumbers
// link      :     https://github.com/dbaq/cordova-plugin-contacts-phone-numbers

angular.module('ngCordova.plugins.contactsPhoneNumbers', [])

  .factory('$cordovaContactsPhoneNumbers', ['$q', function ($q) {

    return {
      list: function () {
        var q = $q.defer();
        navigator.contactsPhoneNumbers.list(function(contacts){
          q.resolve(contacts);
        }, function(error){
          q.reject(error);
        });
        return q.promise;
      }
    };

  }]);
