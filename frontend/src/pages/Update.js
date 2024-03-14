import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const params = useParams();
  const { id } = params;

  const [values, setValues] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  useEffect(() => {
    fetch(`http://localhost:4000/api/hello/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setValues(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:4000/api/hello/${id}`, values)
      .then(() => {
        navigate('/summary');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };
  const Navigatec = useNavigate()
    const handleCancel =() =>{Navigatec('/Summary')}

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label className='label'>Product Name:</label>
      <input id='name'
        type="text"
        name="name"
        onChange={handleChange}
        value={values.name}
        
      />
      <br />

      <label className='label'>Description:</label>
      <input id='d'
        type="text"
        name="description"
        onChange={handleChange}
        value={values.description}
        
      />
      <br />

      <label className='label'>Category:</label>
      <select id='c' onChange={handleChange} value={values.category} style={{ width: '50%'}}>
        <option value="">Select category</option>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </select>
      <br />

      <label className='label'>Quantity:</label>
      <input id='q'
        type="number"
        name="quantity"
        onChange={handleChange}
        value={values.quantity}
      />
      <br />

      <label className='label'>Price:</label>
      <input id='p'
        type="number"
        name="price"
        onChange={handleChange}
        value={values.price}
      />

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <button style={{ marginRight: '10px' }}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
    </form>
  );
}

export default Update;
