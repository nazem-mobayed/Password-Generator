$(document).ready(function() {
  function generatePassword() {
    const bigch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const smallch = "abcdefghijklmnopqrstuvwxyz";
    const specialch = "!@#$%^&*()";
    const numbers =  "0123456789";
    const strong = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()0123456789"
    const length = parseInt($('#length').val())-1;
    const strength = parseInt($('#strength').val());
    var num = 0
    let password = '';


    if (strength === 1) {
      //logic for low strength
      num = Math.floor(Math.random()*3)
      switch(num) {
          case 0 :
          for(var i=0;i<=length;++i) {
          password +=  smallch.charAt(Math.floor(Math.random()*smallch.length))
          }
          break;
          case 1 :
          for(var i=0;i<=length;++i) {
                 password +=  numbers.charAt(Math.floor(Math.random()*numbers.length))
          }
          break;
          case 2:
          for(var i=0;i<=length;++i) {
            password +=  specialch.charAt(Math.floor(Math.random()*specialch.length))
          }
          break;
      }
    } else if (strength === 2) {
      // logic for medium strength
      for(var i=0;i<=length;++i) {
          num = Math.floor(Math.random()*3)
          switch(num) {
              case 0 :
              password +=  smallch.charAt(Math.floor(Math.random()*smallch.length))
              break;
              case 1 :
              password +=  numbers.charAt(Math.floor(Math.random()*numbers.length))
              break;
              case 3:
              password +=  bigch.charAt(Math.floor(Math.random()*bigch.length))
              break;
          }
      }
    } else {
      // logic for high strength
      for(var i=0;i<=length;++i) {
              password +=  strong.charAt(Math.floor(Math.random()*strong.length))
          }
    }
    return password;
  }

  $('#generate').on('click', function() {
  $('#password span').fadeToggle(500)
    setTimeout(function(){
        const password = generatePassword();
    $('#password span').html(password);
    $('#password span').fadeToggle(500)
    },700)
});
});