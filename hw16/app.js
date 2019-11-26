


const COUNTRY = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
const input = document.querySelector('.write-country');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn-search');

COUNTRY.sort(function (a, b) {
    return a.localeCompare(b)
});

const countryContainer = `<div class="country-container">
                            <ul class="country-list">
                            </ul>
                        </div>`;
container.insertAdjacentHTML('beforeend', countryContainer);
const list = document.querySelector('.country-list');
const countryList = document.querySelector('.country-container');


function renderList(){
    let filterCountries = COUNTRY;
    countryList.style.display = 'block';
    if (input.value !== ''){
        list.textContent = '';
        filterCountries = COUNTRY.filter(function(el) {
            return el.toLowerCase().indexOf(input.value.toLowerCase()) === 0;
        });
    }
        filterCountries.forEach((element) => {
            const li = `<li>${element}</li>`;
            list.insertAdjacentHTML('beforeend', li);
        });

    const elemLi = document.querySelectorAll('li');

    elemLi.forEach((el) => {

        el.onmouseover = function () {
            this.style.background = 'blue';
        };
        el.onmouseout = function (e) {
            this.style.background = 'none';
        };
        el.onclick = function () {
            input.value = this.textContent
        }
    })
}

input.addEventListener('click', renderList);
input.onblur = function(){
    setTimeout(function () {
        countryList.style.display = 'none';
    },300);
};
input.addEventListener('keyup', renderList);
btn.addEventListener('click', function () {
    input.value = '';
});
