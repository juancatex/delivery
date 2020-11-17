  class webServices {
      constructor() { 
          this.listeners = [];
          this.cart = [];
          this.tokken = null;
          this.pathlistener = '/'; 
      }
      setpathlistener(datain) {
          this.pathlistener = datain;
      }
      setlisteners(datain) {
          this.listeners = datain;
      } 
      setDataUserToken(datain) {
          this.tokken = datain;
      } 
      roundTo(value, places) {
        var power = java.lang.Math.pow(10, places);
        return java.lang.Math.round(value * power) / power;
    }
         
  }
 
 
  module.exports = {
      control: webServices
  };