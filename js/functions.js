function init(){
    var profile = document.getElementById('profile');
    var settings = document.getElementById('settings');
    var logout = document.getElementById('logout');
    var account = document.getElementById('account');
    var showAccount = document.getElementById('showAccount');
    var showProfile = document.getElementById('showProfile');
    var showSettings = document.getElementById('showSettings');
    var showLogout = document.getElementById('showLogout');

    var check = document.getElementById('check');
    var save = document.getElementById('save');
    var saved = document.getElementById('saved');
    var cancel = document.getElementById('cancel');

    var chbox = document.getElementsByName('chbox');

    showAccount.onclick = function() {
        profile.style.display = 'none';
        settings.style.display = 'none';
        logout.style.display = 'none';
        account.style.display = 'block';
    }

    showProfile.onclick = function() {
        account.style.display = 'none';
        settings.style.display = 'none';
        logout.style.display = 'none';
        profile.style.display = 'block';
    }

    showSettings.onclick = function () {
        account.style.display = 'none';
        profile.style.display = 'none';
        logout.style.display = 'none';
        settings.style.display = 'block';
    }

    showLogout.onclick = function () {
        account.style.display = 'none';
        profile.style.display = 'none';
        settings.style.display = 'none';
        logout.style.display = 'block';
    }

    cancel.onclick = function() {
        save.style.display = 'none';
        cancel.style.display = 'none';
        saved.style.display = 'none';
    }

    save.onclick = function() {
        saved.style.display = 'block';
        save.style.display = 'none';
        cancel.style.display = 'none';
            window.localStorage.setItem("key1", "Launch on PC start");
            window.localStorage["key2"] = "Launch minimized in system tray";
    }

    saved.onclick = function() { 
        saved.style.display = 'none';
        save.style.display = 'block';
        cancel.style.display = 'block';
        window.localStorage.clear();
    }

     var visible = true;
     check.onclick = function () {
        if (visible) {
            save.style.display = 'block';
            cancel.style.display = 'block';
            saved.style.display = 'none';
            visible = false;
        } else {
            save.style.display = 'none';
            cancel.style.display = 'none';
            saved.style.display = 'none';
            visible = true;
        }
    }

}
    window.addEventListener("load", init, false);


