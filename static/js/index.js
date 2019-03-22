console.log(`index.js loaded at ${new Date()}`)
// My constants
const container = document.getElementById('barcode');
const barcode = container.getElementsByTagName('canvas')[0];
const input  = document.getElementById('input');
const params = new URLSearchParams(window.location.search);
const barcode_opts = {
	displayValue: true,
	font: 'sans-serif',
	fontSize: 16
}

// Render an example barcode on load
const exampleBarcode = JsBarcode(barcode, container.dataset.default, barcode_opts);

// Render the exampleBarcode directly
// container.appendChild(exampleBarcode);

// When changing the input, do this...
input.addEventListener('keyup', function() {
	// Clear container
	container.innerHTML = '';
	
	// If input is not empty,
	if (input.value != '') {
		// Render a barcode from the input value
		let newBarcode = JsBarcode(barcode, this.value, barcode_opts);
		// and append to page.
		// container.appendChild(newBarcode);
	} else {
		// Or append example instead.
		container.innerHTML = '<canvas></canvas>';
		container.appendChild(exampleBarcode);
	}
});

// If there is a query parameter (and it's not empty),
// if (params.has('input') && params.get('input') != '') {
// 	// set the input value,
// 	input.value = params.get('input');
// 	// render a barcode,
// 	let newBarcode = JsBarcode(params.get('input'), barcode_opts);
// 	// and append to page.
// 	container.innerHTML = '';
// 	container.appendChild(newBarcode);
// }
