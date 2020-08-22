function loginsubmit() {

    var email = document.getElementById('loginemail').value;
    var password = document.getElementById('loginpass').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage + errorCode);
      });

}
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log('done');

        document.getElementById('partylist').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';

    } else {
        // No user is signed in.
        console.log('failed');

        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('partylist').style.display = 'block';
    }
});