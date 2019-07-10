
function loginUser (username) {
    le._path.home = "/a/users/" + username + "/";
    le._path.desktop = "/a/users/" + username + "/desktop/";
    le._settings = $store.get("users/" + username + "/settings.json");
}
function createUser (username) {
  localStorage.setItem("users/"+username+"/settings.json", localStorage["settings.json"]);
  localStorage.setItem("users/"+username+"/desktop/welcome.txt", "This is the desktop for your user, whatever you put into here will only be for this user");
}
/* 
  How to use this:
    createUser("hello");
        ==> Creates an user named "hello".
    loginUser("hello");
        ==> Logs the user "hello" in.
*/
