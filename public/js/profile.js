// Inventory is used for when a User is trying to sell their cars here
// Within the logic here we would need to use project as a vehcile we would like to sell for our profile 
// name of the posting can utilize the what? invetory id??


const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim(); 
  const selling_price = document.querySelector('#post-price').value.trim(); 
  const description = document.querySelector('#post-desc').value.trim(); 
  const vin = document.querySelector('#post-vin').value.trim(); 
  const mileage = document.querySelector('#post-vin').value.trim(); 
  
  if (name && selling_price && description && vin && mileage) {
    const response = await fetch(`/api/inventory`, {
      method: 'POST',
      body: JSON.stringify({ name, selling_price, description, vin, mileage }),
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
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
