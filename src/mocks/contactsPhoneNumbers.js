/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaContactsPhoneNumbers
 *
 * @description
 * A service for testing features related with contacts
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaContactsPhoneNumbers', ['$q', function ($q) {

  var throwsError = false;
  var contacts = [{
        "id": "1",
        "firstName": "Kate",
        "middleName": "",
        "lastName": "Bell",
        "displayName": "Kate Bell",
        "phoneNumbers": [{
            "number": "(555) 564-8583",
            "normalizedNumber": "(555) 564-8583",
            "type": "MOBILE"
        }, {
            "number": "(415) 555-3695",
            "normalizedNumber": "(415) 555-3695",
            "type": "OTHER"
        }]
    }, {
        "id": "2",
        "firstName": "Daniel",
        "middleName": "",
        "lastName": "Higgins",
        "displayName": "Daniel Higgins",
        "phoneNumbers": [{
            "number": "555-478-7672",
            "normalizedNumber": "555-478-7672",
            "type": "HOME"
        }, {
            "number": "(408) 555-5270",
            "normalizedNumber": "(408) 555-5270",
            "type": "MOBILE"
        }, {
            "number": "(408) 555-3514",
            "normalizedNumber": "(408) 555-3514",
            "type": "OTHER"
        }]
    }, {
        "id": "3",
        "firstName": "John",
        "middleName": "Paul",
        "lastName": "Appleseed",
        "displayName": "John Paul Appleseed",
        "phoneNumbers": [{
            "number": "888-555-5512",
            "normalizedNumber": "888-555-5512",
            "type": "MOBILE"
        }, {
            "number": "888-555-1212",
            "normalizedNumber": "888-555-1212",
            "type": "HOME"
        }]
    }];

  return {
    /**
     @ngdoc property
     @name throwsError
     @propertyOf ngCordovaMocks.cordovaContacts

     @description
     A flag that signals whether a promise should be rejected or not.
     This property should only be used in automated tests.
     */
    throwsError: throwsError,

    /**
     @ngdoc contacts
     @name throwsError
     @propertyOf ngCordovaMocks.cordovaContacts

     @description
     An in-memory collection of contacts.
     This property should only be used in automated tests.
     */
    contacts: contacts,

    list: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error listing the contacts');
      } else {
        defer.resolve(this.contacts);
      }
      return defer.promise;
    }
  };
}]);
