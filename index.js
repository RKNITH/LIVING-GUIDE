document.addEventListener('DOMContentLoaded', () => {
    const tips = [
        { title: 'Reduce, Reuse, Recycle', description: 'Practice the three Rs to minimize waste and conserve resources. Reducing waste means choosing to use things with care to reduce the amount of waste generated. Reusing involves the repeated use of items or parts of items which still have usable aspects. Recycling is the process of converting waste materials into new materials and objects.', image: ` https://unsplash.com/photos/a-paper-cut-of-a-house-with-trees-on-top-of-it-ClmZjcak3GU` },
        { title: 'Use Renewable Energy', description: 'Switch to renewable energy sources like solar or wind power. Renewable energy sources are those which are continuously replenished by natural processes. Solar panels, wind turbines, and hydropower are some of the key technologies that harness renewable energy.', image: 'https://source.unsplash.com/random/200x200/?solar' },
        { title: 'Conserve Water', description: 'Implement water-saving techniques like fixing leaks and using low-flow fixtures. Water conservation is the practice of using water efficiently to reduce unnecessary water usage. It includes techniques like turning off the tap while brushing teeth, fixing leaks, and using water-saving devices in toilets and showers.', image: 'https://source.unsplash.com/random/200x200/?water' },
    ];

    const products = [
        { name: 'Bamboo Toothbrush', description: 'An eco-friendly alternative to plastic toothbrushes. Bamboo toothbrushes are biodegradable and have a smaller environmental footprint compared to plastic toothbrushes. They help reduce plastic pollution and are just as effective in maintaining dental hygiene.', image: 'https://source.unsplash.com/random/200x200/?bamboo-toothbrush', link: 'https://example.com/bamboo-toothbrush' },
        { name: 'Reusable Grocery Bags', description: 'Durable and sustainable bags for your shopping needs. Reusable grocery bags are a sustainable alternative to single-use plastic bags. They are typically made from materials like cotton or jute, which are durable and can be used multiple times.', image: 'https://source.unsplash.com/random/200x200/?reusable-bags', link: 'https://example.com/reusable-bags' },
        { name: 'Solar-Powered Charger', description: 'Charge your devices using solar energy. Solar-powered chargers use photovoltaic panels to convert sunlight into electricity, providing a renewable source of energy for charging devices like smartphones, tablets, and cameras.', image: 'https://source.unsplash.com/random/200x200/?solar-charger', link: 'https://example.com/solar-charger' },
    ];

    const diyProjects = [
        { title: 'Homemade Compost Bin', materials: 'Wooden pallets, screws, drill', steps: '1. Assemble the wooden pallets into a bin shape using screws and a drill. 2. Secure the structure and make sure it\'s stable. 3. Start adding compost materials like kitchen scraps and yard waste.', image: 'https://source.unsplash.com/random/200x200/?compost' },
        { title: 'DIY Recycled Paper', materials: 'Old newspapers, water, blender', steps: '1. Tear the newspapers into small pieces and soak them in water. 2. Blend the soaked paper into a pulp using a blender. 3. Spread the pulp onto a screen and let it dry to create new sheets of paper.', image: 'https://source.unsplash.com/random/200x200/?recycled-paper' },
        { title: 'Upcycled T-Shirt Tote Bag', materials: 'Old t-shirt, scissors, needle, thread', steps: '1. Cut off the sleeves and neckline of the t-shirt. 2. Turn the t-shirt inside out and sew the bottom shut. 3. Turn it right side out again to use as a tote bag.', image: 'https://source.unsplash.com/random/200x200/?tote-bag' },
    ];

    const tipsContainer = document.getElementById('tips-container');
    const productsContainer = document.getElementById('products-container');
    const diyContainer = document.getElementById('diy-container');

    function createCard(item, type) {
        const card = document.createElement('div');
        card.className = 'card';
        if (type === 'diy') {
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p><strong>Materials:</strong> ${item.materials}</p>
                <p><strong>Steps:</strong> ${item.steps}</p>
            `;
        } else {
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title || item.name}">
                <h3>${item.title || item.name}</h3>
                <p class="short-description">${item.description.slice(0, 50)}... <span class="learn-more">Learn more</span></p>
                <p class="full-description">${item.description}</p>
            `;
            card.querySelector('.learn-more').addEventListener('click', () => {
                card.querySelector('.short-description').style.display = 'none';
                card.querySelector('.full-description').style.display = 'block';
            });
        }
        return card;
    }

    tips.forEach(tip => {
        tipsContainer.appendChild(createCard(tip));
    });

    products.forEach(product => {
        productsContainer.appendChild(createCard(product));
    });

    diyProjects.forEach(project => {
        diyContainer.appendChild(createCard(project, 'diy'));
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
});
