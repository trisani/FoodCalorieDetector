const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const analyzeBtn = document.getElementById('analyzeBtn');
const foodName = document.getElementById('foodName');
const calories = document.getElementById('calories');
const loading = document.getElementById('loading');
const result = document.getElementById('result');

let selectedImage = null;

// Show image preview
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
        selectedImage = file;
    } else {
        imagePreview.innerHTML = `<p>No image selected</p>`;
        selectedImage = null;
    }
});

// Simulate detection with vintage delay and animation
analyzeBtn.addEventListener('click', () => {
    if (!selectedImage) {
        alert("Please upload an image first!");
        return;
    }

    result.style.display = "none";
    loading.style.display = "block";

    setTimeout(() => {
        const foods = [
            { name: "Croissant", cal: 231 },
            { name: "Pancakes", cal: 227 },
            { name: "Apple Pie", cal: 296 },
            { name: "Waffles", cal: 291 },
            { name: "Strawberry Tart", cal: 245 },
            { name: "Tea Sandwich", cal: 172 }
        ];

        const randomFood = foods[Math.floor(Math.random() * foods.length)];

        loading.style.display = "none";
        result.style.display = "block";

        foodName.textContent = randomFood.name;
        calories.textContent = randomFood.cal;
    }, 2000); // 2-second fake analysis delay
});


