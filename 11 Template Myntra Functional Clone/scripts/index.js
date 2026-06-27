let bagItems = [];

onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {

    if (!bagItems.includes(itemId)) {
        bagItems.push(itemId);
    }

    localStorage.setItem('bagItems', JSON.stringify(bagItems));

    displayItemsOnHomePage();
    displayBagIcon();
}

function displayBagIcon() {

    let bagItemCountElement = document.querySelector(".bag-item-count");

    if (!bagItemCountElement) return;

    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {

    let itemsContainerElement = document.querySelector('.items-container');

    if (!itemsContainerElement) return;

    let innerHTML = '';

    items.forEach(item => {

        let buttonHTML = '';

        if (bagItems.includes(item.id)) {
            buttonHTML = `
                <button class="btn-added" disabled>
                    Added to Bag
                </button>
            `;
        } else {
            buttonHTML = `
                <button class="btn-add-bag"
                    onclick="addToBag('${item.id}')">
                    Add to Bag
                </button>
            `;
        }

        innerHTML += `
            <div class="item-container">

                <img class="image"
                    src="${item.image}"
                    alt="${item.item_name}">

                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>

                <div class="company-name">
                    ${item.company}
                </div>

                <div class="item-name">
                    ${item.item_name}
                </div>

                <div class="price">
                    <span class="current-price">
                        ₹${item.current_price}
                    </span>

                    <span class="original-price">
                        ₹${item.original_price}
                    </span>

                    <span class="discount">
                        ${item.discount_percentage}% OFF
                    </span>
                </div>

                ${buttonHTML}

            </div>
        `;
    });

    itemsContainerElement.innerHTML = innerHTML;
}