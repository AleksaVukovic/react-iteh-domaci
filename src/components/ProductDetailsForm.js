import React from 'react';
import '../components.css';
import { useParams } from 'react-router-dom';
import data from '../data';

export default function ProductDetailsForm(props) {
    const {id} = useParams();

    const checked = () => {
        const radios = document.getElementsByName('diameter');
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                return radios[i].value;
            }
        }
    }

    const validate = () => {
        const amount = document.getElementById('amount').value;
        const material = document.getElementById('materials').value;
        if(amount.match(/^[1-9][0-9]*$/) && checked()){
            const product = data.findProduct(id);

            data.cart.push({
                id: data.idCart++,
                name: product.name,
                model: product.model,
                diameter: checked(),
                material: material,
                amount: amount,
                price: product.price,
                total: amount * product.price
            });

            console.log(data.cart);
        }else{
            alert('Invalid input. Please try again.')
        }
    }

    const formStyle={
        display:"inline-block",
    };

    return (
        <div className='product-details-form' style={formStyle}>
            <form>
                <fieldset className='diameter'>
                    <legend>Select Diameter</legend>
                    <input type="radio" id="diameter-8" name="diameter" value="36 mm"/>
                    <label htmlFor="diameter-8">36 mm</label>
                    <br/>
                    <input type="radio" id="diameter-12" name="diameter" value="38 mm"/>
                    <label htmlFor="diameter-12">38 mm</label>
                    <br/>
                    <input type="radio" id="diameter-16" name="diameter" value="40 mm"/>
                    <label htmlFor="diameter-16">40 mm</label>
                </fieldset>

                <div className='amount'>
                    <label htmlFor='amount'>Buy More Than One</label>
                    <input type='text' name='amount' id='amount' autoComplete='off'></input>
                </div>

                <div className='material'>  
                    <label htmlFor="materials">Select Material</label>
                    <select name="materials" id="materials">
                        <option value="Titanium">Titanium</option>
                        <option value="Ceramics">Ceramics</option>
                        <option value="Carbon">Carbon</option>
                        <option value="Steel">Steel</option>
                    </select>
                </div>

                <button type="button" className='btn' onClick={validate}> Add To Your Selection </button>

            </form>
        </div>
    )
}