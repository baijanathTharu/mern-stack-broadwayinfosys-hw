function sendMail(web, location, username, link, des) {
	var text = "Hey " + username + ", Your " + web + " account was signed in from a new location: " + location + ". If it was not you, please change your password here. " + link + des;
	 console.log(text);
}

sendMail("facebook.com", "Butwal", "Baijanath Tharu", "https://www.facebook.com/password/change", '');

sendMail("twitter.com", "Kathmandu", "Dinesh", "https://www.twitter.com/change", ". Please ignore this mail if it was you.");