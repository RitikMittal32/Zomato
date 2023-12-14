import React from 'react'
import { states } from '../../data/States';
import { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Login from '../login/Login';

const dropBox = (inputType, data) => {
  let options = document.querySelector("#" + inputType + "-options");

  data.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    options.appendChild(li);
  });

  let x = true;
  var content = document.querySelector("." + inputType + "-content");
  var select_input = document.querySelector(".select-" + inputType);
  select_input.addEventListener("click", () => {
    if(x){
      content.style.display = "none";
      x = false;
    }else{
      content.style.display =  "block";
      x = !x;
    }
  });

  document.addEventListener("click" , (event) => {
    if(!content.contains(event.target) && event.target !== select_input) {
      content.style.display  = "none";
      x = false;
    }
  });

  var selectedValue = "";
  var inputOptions = document.querySelectorAll("#" + inputType + "-options li");

  inputOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      selectedValue = e.target.textContent;
      select_input.textContent = selectedValue;
      content.style.display = "none";
    });
    // selectedCollege = selectedValue;
  });


  const input_options = document.querySelector("#" + inputType + "-options");
  const inputElement = document.querySelector("." + inputType + "-input");
  let inputSearch = inputElement.value;

  inputElement.addEventListener("keyup", (e) => {
    let filteredData = [];
    inputSearch = e.target.value.toLowerCase();

    filteredData = data
      .filter((item) => {
        return item.toLowerCase().startsWith(inputSearch);
      })
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join("");
    input_options.innerHTML = filteredData;
  });
}


const Header = () => {

  useEffect(() => {
    dropBox("state",states)
  })

  return (
    <div className='max-width header'>
      <img src ='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='Zomato-logo' className='header-logo' />
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i class="fi fi-rr-marker absolute-center location-icon"></i>
            </div>
            <div list="colleges" id="collegeinput" class="select-state"><div class="ctext">SELECT STATE</div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
            </div>
          </div>
          <div className='state-contents'>
              <div class="state-content">
                    <div class="search">
                      <span class="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><path fill="currentColor" d="M16.33 5.05A10.95 10.95 0 1 1 5.39 16A11 11 0 0 1 16.33 5.05m0-2.05a13 13 0 1 0 13 13a13 13 0 0 0-13-13Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="m35 33.29l-7.37-7.42l-1.42 1.41l7.37 7.42A1 1 0 1 0 35 33.29Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/>
                        </svg>
                      </span>
                      <input class="state-input" type="text" placeholder="Search" />
                    </div>
                    <ul sty class="options" id="state-options"></ul>
                  </div>
              </div>
              </div>
          <div className='location-search-separator'></div>
          <div className='header-search-bar'>
          <i className="fi fi-rr-search absolute-center search-icon"></i>
          <input placeholder='Search for restaurant,cuisine or a dish' className='search-input'/>
          </div>
        </div>
        <div className='profile-wrapper'>
          <Link to='/login'><button>Login</button></Link> 
        </div>
      </div>
    </div>
  )
}

export default Header
