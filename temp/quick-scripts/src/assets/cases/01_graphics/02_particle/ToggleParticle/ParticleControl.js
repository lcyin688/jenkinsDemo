"use strict";
cc._RF.push(module, '79ae3hiP+JAhIKehaWyiKuh', 'ParticleControl');
// cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    particle: cc.ParticleSystem
  },
  toggleParticlePlay: function toggleParticlePlay() {
    var myParticle = this.particle;

    if (myParticle.particleCount > 0) {
      // check if particle has fully plaed
      myParticle.stopSystem(); // stop particle system
    } else {
      myParticle.resetSystem(); // restart particle system
    }
  }
});

cc._RF.pop();