			function StepVer(x, y, flag)
			{
				var elem = document.getElementById("kl_" + x + "_" + y);
				color = window.getComputedStyle(elem).backgroundColor;				

				if((flag == true && color == "rgb(255, 255, 255)") || (flag == false && color == "rgb(129, 152, 48)")) //движение вверх
				{
					flag = true;
					elem.innerHTML = "";
					x--;
					document.getElementById("kl_" + x + "_" + y).innerHTML = "<img id='img2' src='car3.png'>";
					
					if(color == "rgb(255, 255, 255)")
						elem.style.background = "rgb(129, 152, 48)";
					else
						elem.style.background = "rgb(255, 255, 255)";		
				}

				else if((flag == false && color == "rgb(255, 255, 255)") || (flag == true && color == "rgb(129, 152, 48)")) //движение вниз
				{
					flag = false;
					elem.innerHTML = "";
					x++;
					document.getElementById("kl_" + x + "_" + y).innerHTML = "<img id='img2' src='car4.png'>";
					
					if(color == "rgb(255, 255, 255)")
						elem.style.background = "rgb(129, 152, 48)";
					else
						elem.style.background = "rgb(255, 255, 255)";		
				}
				setTimeout(function(){StepGor(x, y, flag);}, 100);
			}
			function StepGor(x, y, flag)
			{
				var elem = document.getElementById("kl_" + x + "_" + y);
				color = window.getComputedStyle(elem).backgroundColor;				

				if((flag == true && color == "rgb(255, 255, 255)") || (flag == false && color == "rgb(129, 152, 48)")) //движение вверх
				{
					flag = false;
					elem.innerHTML = "";
					y--;
					document.getElementById("kl_" + x + "_" + y).innerHTML = "<img id='img1' src='car2.png'>";
					
					if(color == "rgb(255, 255, 255)")
						elem.style.background = "rgb(129, 152, 48)";
					else
						elem.style.background = "rgb(255, 255, 255)";		
				}

				else if((flag == false && color == "rgb(255, 255, 255)") || (flag == true && color == "rgb(129, 152, 48)")) //движение вниз
				{
					flag = true;
					elem.innerHTML = "";
					y++;
					document.getElementById("kl_" + x + "_" + y).innerHTML = "<img id='img1' src='car1.png'>";
					
					if(color == "rgb(255, 255, 255)")
						elem.style.background = "rgb(129, 152, 48)";
					else
						elem.style.background = "rgb(255, 255, 255)";		
				}
				setTimeout(function(){StepVer(x, y, flag);}, 100);	
			}