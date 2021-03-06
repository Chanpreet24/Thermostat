'use strict';

describe ('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it ('starting temperature is 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it ('increases in temperature with up', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
    it ('decreases in temperature with down', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it ('thermostat has a minimum temperature of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
    it ('has a powersaving mode turned on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it ('can switch PSM off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it ('can switch PSM back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    describe('when power saving is on', function() {
      it('has a maximum temperature of 25 degrees', function(){
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });
    describe('when PSM is off', function() {
      it('has a maximum temperature of 32 degrees', function() {
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      });
    });
  });
