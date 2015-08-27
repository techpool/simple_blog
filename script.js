
		//Function that initializes the page and load the previous posts saved from that browser
		function initialize_posts() {
			var div = document.getElementById('posts');
				if(localStorage.articles == undefined){
					//Do nothing
				} else {
					//append the whole storage into the 'posts' div
					div.innerHTML = localStorage.articles;
				}
		};

		//Initializes the previous posts when the window loads completely
		window.onload = initialize_posts;


		//Funtion that removes the particular element on clicking the remove button
		function removeelement(clas){
			//Nothification asking for confirmation
		    var r = confirm("Are you sure you want to delete this post?");


		    if (r == true) {
		    	//Incase the user confirms to delete the post.

		        var parent = document.getElementById("posts");
				var child = document.getElementById(clas);
				parent.removeChild(child);

				//Removes all the elements from the localstorage
				localStorage.removeItem("articles");
				//Adds the renewed posts from the 'posts' div
				localStorage.articles = document.getElementById("posts").innerHTML;
		    } else {
		    	//If the user doesnt acknowledges the delete action.
		    	//Do nothing.		        
		    }
			
		}



		function post(){

			//If statement that checks whether both title and message has been entered.
			if(document.getElementById("title").value == "" || document.getElementById("title").value == undefined){
				alert("Please enter a valid title");
			} else if(document.getElementById("post_message").value == "" || document.getElementById("post_message").value == undefined){
				alert("Enter a valid message");
			} else {
				//If both has been entered properly

				var d = new Date();
				var div = document.getElementById('posts');
				var title = document.getElementById("title").value;
				var message = document.getElementById("post_message").value;

				//The complete html which is to be appended to the posts div.
				//the whole article has been given the id of the time when it has been posted
				//which will be unique on every post

				//the button calls the function onclick when clicked
				//the onclick function is passed the parameter of that same time.
				var html_message = "<article id="+ d +"><h2>"+ title + "</h2><p>" + message + "</p><p>&nbsp&nbsp----&nbsp&nbsp"+ d.toLocaleString() +"<br><button class="+ d +" onclick='removeelement(this.className)'>Remove</button><hr></article>";


				//updates the inner html
				div.innerHTML += html_message;

				//updates the localstorage
				localStorage.articles = document.getElementById("posts").innerHTML;

				//resets the form fields for new entries.
				document.getElementById("post_message").value = "";
				document.getElementById("title").value = "";
			}
			
		}
