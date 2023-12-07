// Inventory is used for when a User is trying to sell their cars here
// Within the logic here we would need to use project as a vehcile we would like to sell for our profile 
// name of the posting can utilize the what? invetory id??


const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim(); 
  const make = document.querySelector('#post-make').value.trim();
  const model = document.querySelector('#post-model').value.trim(); 
  const year = document.querySelector('#post-year').value.trim(); 
  const mileage = document.querySelector('#post-mileage').value.trim(); 
  const price = document.querySelector('#post-price').value.trim(); 
  const description = document.querySelector('#post-desc').value.trim(); 
  const image = document.querySelector('#post-image').value.trim(); 
  const image2 = document.querySelector('#post-image2').value.trim(); 
  const image3 = document.querySelector('#post-image3').value.trim(); 
  const image4 = document.querySelector('#post-image4').value.trim(); 
  
  
  

  
  
  if (name && make && model && year && mileage && price && description && image && image2 && image3 && image4 ) {
    const response = await fetch(`/api/inventory`, {
      method: 'POST',
      body: JSON.stringify({ name, make, model, year, mileage, price, description, image, image2, image3, image4 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/inventory/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
