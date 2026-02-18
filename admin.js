const table = document.getElementById('registrationTable');

table.addEventListener('click', function(e){
  if(e.target.classList.contains('approve')){
    e.target.parentElement.innerHTML = '<span style="color:#28a745; font-weight:bold;">Approved</span>';
  }
  if(e.target.classList.contains('reject')){
    e.target.parentElement.innerHTML = '<span style="color:#dc3545; font-weight:bold;">Rejected</span>';
  }
});