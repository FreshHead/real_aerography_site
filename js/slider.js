var imageCount = 1;
var total = 5;

function photo(x) {

	for(i = 1; i <= 9; i++) {
		var categoryImage = document.getElementById("categoryImage" + i),
		style = window.getComputedStyle(categoryImage),
		display = style.getPropertyValue('display');

		// total = countImages(categoryImage);
		if(display == 'inline') {
			imageCount = imageCount + x;
			if(imageCount > total) {
				imageCount = 1;
			}
			if(imageCount < 1){
				imageCount = total;
			}
			var folderName = categoryImage.className,
			imagePath =  "images/gallery/" + folderName + "/img"+ imageCount +".png";

			categoryImage.src = imagePath;
		}
	}

	// countImages(image) {
	// 	count = 0;
	// 	while(image){

	// 	}
	// }
}

