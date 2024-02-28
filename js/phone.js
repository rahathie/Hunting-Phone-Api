const loadPhone = async (searchText, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) =>{
//    console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    // 
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
      const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
       showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    console.log('is show all',isShowAll)
        // display only first 12 phones if not show all
       if(!isShowAll){
        phones = phones.slice(0,12);
       }
     
     phones.forEach(phone =>{
       console.log(phone)
    //    1 create a div
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card  bg-gray-100 p-4 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
        
        `;
        // 4 append child
        phoneContainer.appendChild(phoneCard)
     });
    //  hide loading spinner
        toggleLoadingSpineer(false);
}

// handle search button
    const handleSearch = (isShowAll) =>{
        toggleLoadingSpineer(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);

}
// handle search recap

const toggleLoadingSpineer = (isLoading) =>{
    const loadingSpineer = document.getElementById('loading-spineer');
    if(isLoading){
        loadingSpineer.classList.remove('hidden');
    }
    else{
        loadingSpineer.classList.add('hidden');
    }
}
// handle show all
const handleShowAll =() =>{
    handleSearch(true);
}

// loadPhone();
