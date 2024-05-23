import React from 'react'
import './Component.css';

export default function Component() {

  const menuItems = [
    {
      category: 'Desayuno',
      id: 'Desayuno',
      items: [
        {
          image: '/img/desayuno1.jpg',
          name: 'Pancakes',
          description: 'Deliciosos pancakes con miel y jalea.',
          price: '$7.00'
        },
        {
          image: '/img/desayuno2.jpg',
          name: 'Cereales',
          description: 'Cereales de preferencia con leche de preferencia.',
          price: '$5.00'
        },
        {
          image: '/img/desayuno3.jpg',
          name: 'Huevos con Bacon',
          description: 'Deliciosos huevos fritos con bacon.',
          price: '$6.00'
        },
        {
          image: '/img/desayuno4.jpg',
          name: 'Croissant',
          description: 'Deliciosos Croissant franceses dulces y suaves.',
          price: '$3.00'
        }
      ]
    },
    {
      category: 'Almuerzo',
      id: 'Almuerzo',
      items: [
        {
          image: '/img/almuerzo1.jpg',
          name: 'Spaguetti a la Carbonara',
          description: 'Deliciosos Spaguetti a la carbonara con parmesano.',
          price: '$15.00'
        },
        {
          image: '/img/almuerzo2.jpg',
          name: 'Costillas a la Barbacoa',
          description: 'Deliciosas Costillas con BBQ y papas.',
          price: '$17.00'
        },
        {
          image: '/img/almuerzo3.jpg',
          name: 'Bandeja Paisa',
          description: 'Deliciosa  Bandeja paisa colombiana potente.',
          price: '$14.00'
        },
        {
          image: '/img/almuerzo4.jpg',
          name: 'Paella Española',
          description: 'Deliciosa Paella española con mariscos.',
          price: '$15.00'
        },
      ]
    },
    {
      category: 'Comidas',
      id: 'Comidas',
      items: [
        {
          image: '/img/comida1.jpg',
          name: 'Pizza',
          description: 'Deliciosas Pizzas, puede elegir pepperoni o tres quesos.',
          price: '$12.00'
        },
        {
          image: '/img/comida2.jpg',
          name: 'Hamburguesa',
          description: 'Deliciosa Hamburguesa con carne Wagyu al carbon con papas.',
          price: '$20.00'
        },
        {
          image: '/img/comida3.jpg',
          name: 'Lasagna',
          description: 'Deliciosa Lasagna italiana con carne a la Bolognesa.',
          price: '$15.00'
        },
        {
          image: '/img/comida4.jpg',
          name: 'Pollo a la Broaster',
          description: 'Delicioso Pollo a la Broaster con papas y salsas.',
          price: '$12.00'
        },
      ]
    },
    {
      category: 'Entradas',
      id: 'Entradas',
      items: [
        {
          image: '/img/entrada1.jpg',
          name: 'Croquetas de Pollo',
          description: 'Croquetas de Pollo con queso españolas.',
          price: '$3.00'
        },
        {
          image: '/img/entrada2.jpg',
          name: 'Patacon Con Hogao',
          description: 'Platanos aplastados fritos con guiso 100% colombiano.',
          price: '$3.00'
        },
        {
          image: '/img/entrada3.jpg',
          name: 'Empanadas',
          description: 'Empanadas de pollo o carne calientes con aji.',
          price: '$3.00'
        },
        {
          image: '/img/entrada4.jpg',
          name: 'Rollos de Atun',
          description: 'Rollos de atun traidos desde Japon.',
          price: '$3.00'
        }
      ]
    },
    {
      category: 'Menu Infantil',
      id: 'Menu Infantil',
      items: [
        {
          image: '/img/infantil1.jpg',
          name: 'Nuggets De Pollo',
          description: 'Nuggets de pollo con papas y salsa.',
          price: '$8.00'
        },
        {
          image: '/img/infantil2.jpeg',
          name: 'Hamburguesa Junior',
          description: 'Hamburguesa pequena con papas y salsas.',
          price: '$9.00'
        },
        {
          image: '/img/infantil3.jpg',
          name: 'Helado',
          description: 'Deliciosos y cremosos helados en cono.',
          price: '$6.00'
        },
        {
          image: '/img/infantil4.jpg',
          name: 'Hot Dog',
          description: 'Hot Dog con salsas.',
          price: '$7.00'
        },
      ]
    },
    {
      category: 'Bebidas',
      id: 'Bebidas',
      items: [
        {
          image: '/img/bebida1.jpeg',
          name: 'Cafe',
          description: 'Cafe negro colombiano.',
          price: '$2.00'
        },
        {
          image: '/img/bebida2.jpg',
          name: 'Cerveza Corona',
          description: 'Cerveza Corona fria con hielo.',
          price: '$3.00'
        },
        {
          image: '/img/bebida3.jpeg',
          name: 'Coca Cola',
          description: 'Coca Cola refrescante fria y con hielo.',
          price: '$4.00'
        },
        {
          image: '/img/bebida4.jpg',
          name: 'Margarita',
          description: 'Bebida alcoholica margarita hecha por un barman profesional.',
          price: '$6.00'
        },
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="main-container">
        <header className="header">
            <img src="/img/logo.jpg" alt="logo-restaurant" className="logo"/>
        </header>
        <div className="button-container">
          {menuItems.map((section, index) => (
            <button key={index} onClick={() => scrollToSection(section.id)}>{section.category}</button>
          ))}
        </div>
        <div className="menu-container">
            {menuItems.map((section, index) => (
              <div id={section.id} key={index}>
                <h2 className="section-title">{section.category}</h2>
                <div className="menu-items">
                  {section.items.map((item, idx) => (
                    <button className="menu-item" key={idx}>
                      <img src={item.image} alt={item.name} className="menu-image" />
                      <div className="menu-details">
                          <h3 className='menu-name'>{item.name}</h3>
                          <p className='menu-description'>{item.description}</p>
                          <p className='menu-price'>{item.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div>
          <h3>Todos los derechos reservados 2024</h3>
        </div>
    </div>
  );
};
