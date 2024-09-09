const navDialog = document.getElementById("navDialog")



function handleMenu(){
	navDialog.classList.toggle("hidden")
	
}

document.addEventListener("DOMContentLoaded", function () {
	const productImages = [
	  "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	  "https://images.unsplash.com/photo-1562845029-d1b530d4cfd3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	  "https://images.unsplash.com/photo-1566220036246-08bc2fc902a6?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	  "https://images.unsplash.com/photo-1629367308711-b7fc438561e5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	  "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];
  
	const products = document.querySelectorAll(".product img");
  
	products.forEach((img, index) => {
	  img.src = productImages[index % productImages.length];
	});
  });
  
  