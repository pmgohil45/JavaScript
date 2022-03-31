
	function find_add()
	{
		var n1 = document.getElementById("no1").value;
		var n2 = document.getElementById("no2").value;
		var tot = parseInt(n1) + parseInt(n2);
		document.getElementById("ans").value=tot;
	}

	function find_sub()
	{
		var n1 = document.getElementById("no1").value;
		var n2 = document.getElementById("no2").value;
		var tot = parseInt(n1) - parseInt(n2);
		document.getElementById("ans").value=tot;
	}

	function find_malti()
	{
		var n1 = document.getElementById("no1").value;
		var n2 = document.getElementById("no2").value;
		var tot = parseInt(n1) * parseInt(n2);
		document.getElementById("ans").value=tot;
	}

	function find_divi()
	{
		var n1 = document.getElementById("no1").value;
		var n2 = document.getElementById("no2").value;
		var tot = parseInt(n1) / parseInt(n2);
		document.getElementById("ans").value=tot;
	}
