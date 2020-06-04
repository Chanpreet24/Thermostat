'use strict';

describe ('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe ('temperature default 20 degrees', function() {
      it ('starting temp is 20 degrees', function() {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
      });
    });

  /* describe ('temperature increase', function() {
    it ('increases the temperature', function() {
      expect(thermostat.up).toEqual(25);
    });
  }); */
});
