var $txtuser = $('#txtuser');
var $spnloggin = $('#spnloggin');
var $usrpass = $('#usrpass');
var $spnpassword = $('#spnpassword');
var $signin = $('#signin');
var $spnnotfound = $('#spnnotfound');
var $spnincorrect = $('#spnincorrect');

$spnloggin.hide();
$spnpassword.hide();
$spnnotfound.hide();
$spnincorrect.hide();

$signin.on('click', signIn);
$signin.on ('keypress', clickEnter);

function signIn (){
	if($txtuser.val()==''){
		$spnloggin.show();
		return
	}
	if($txtuser.val().indexOf ('@') === -1) {
		$spnloggin.show();
		return
	}
	if($usrpass.val()==''){
		$spnpassword.show();
		return
	}
	if($txtuser.val() !=='aaron@theironyard.com' && $txtuser.val() !=='admin@google.com'){
		$spnloggin.show();
		return
	 }
	if ($usrpass.val() !=='password123' && $usrpass.val() !=='pandas')
		$spnpassword.show();
		return
	









	window.location.href="https://theironyard.com"
}
function clickEnter(e){
	if(e.which == 13){
		submit();
	}
}




