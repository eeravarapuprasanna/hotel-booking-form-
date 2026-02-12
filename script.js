const form = document.getElementById('bookingForm');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');
const room = document.getElementById('room');

function showError(id){ document.getElementById(id).style.display='block'; }
function hideError(id){ document.getElementById(id).style.display='none'; }

form.addEventListener('submit', function(e){
  e.preventDefault();

  let valid = true;

  if(name.value.trim().length < 3){ showError('nameError'); valid=false;} else hideError('nameError');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.value.match(emailPattern)){ showError('emailError'); valid=false;} else hideError('emailError');

  const phonePattern = /^[0-9]{10}$/;
  if(!phone.value.match(phonePattern)){ showError('phoneError'); valid=false;} else hideError('phoneError');

  if(checkin.value === ''){ showError('checkinError'); valid=false;} else hideError('checkinError');

  if(checkout.value === '' || checkout.value <= checkin.value){ showError('checkoutError'); valid=false;} else hideError('checkoutError');

  if(room.value === ''){ showError('roomError'); valid=false;} else hideError('roomError');

  if(valid){ document.getElementById('successPage').style.display='flex'; }
});
