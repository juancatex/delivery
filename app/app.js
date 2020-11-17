import Vue from "nativescript-vue";

import Home from "./components/Home";
import {control} from "./control";
import * as firebase from "nativescript-plugin-firebase";
import {Feedback} from "nativescript-feedback";

Vue.prototype.$popup = new Feedback();  
let controllerUser = new control;
firebase.init({
    persist: true,
    onPushTokenReceivedCallback: function(token) { 
        controllerUser.setDataUserToken(token);
     }
  });
  Vue.prototype.$firebase = firebase; 
  Vue.prototype.$control = controllerUser; 
  Vue.prototype.$To = (a, e, ne = null)=>{
    var t = ["slideLeft", "easeIn", "$navigateTo", "fade"];
    a[t[2]](e, {
        animated: !0,
        clearHistory: !0,
        transition: {
            name: t[0],
            duration: 500,
            curve: t[1]
        },
        props: {
            datain: ne
        }
    })
  };
  Vue.prototype.$returnTo = (a, ee, naaa = null)=>{
    var t = ["slideRight", "easeIn", "$navigateTo", "fade"];
    a[t[2]](ee, {
        animated: !0,
        clearHistory: !0,
        transition: {
            name: t[0],
            duration: 500,
            curve: t[1]
        },
        props: {
            datain: naaa
        }
    })
  };
new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
