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
	$spnloggin.hide();
	$spnpassword.hide();
	$spnnotfound.hide();
	$spnincorrect.hide();


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
	if($txtuser.val() =='aaron@theironyard.com' && $usrpass.val() =='password123'){
		window.location.href="http://theironyard.com"
		return
	 }
	if ($txtuser.val() =='admin@google.com' && $usrpass.val() =='pandas'){
		window.location.href="http://theironyard.com"
		return
	}









	window.location.href="https://theironyard.com"
}
function clickEnter(e){
	if(e.which == 13){
		submit();
	}
}




