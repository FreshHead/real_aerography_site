function changeCategory(categoryNumber) {
	for(i = 1; i <= 9; i++) {
		if(i == categoryNumber) {
			document.getElementById("categoryImage" + i).style.display="inline";
		} else {
			document.getElementById("categoryImage" + i).style.display="none";
		}
	}
}