const productos = [
  {
    id: 1,
    titulo: "Laptop Lenovo ThinkPad X1 Carbon 2024",
    precio: 600000,
    descripcion: "Laptop ultraligera con procesador Intel Core i7 y pantalla Full HD de 14 pulgadas, la mejor del mercado.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129114842_5468651_1?wid=1500&hei=1500&qlt=70",
    stock: 10,
    categoria: "computacion"
  },
  {
    id: 2,
    titulo: "Smartphone Samsung Galaxy S20 Ultra",
    precio: 350000,
    descripcion: "Teléfono inteligente con cámara de 108MP, pantalla Dynamic AMOLED de 6.9 pulgadas y 5G.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_118683455_2178377_1?wid=1500&hei=1500&qlt=70",
    stock: 15,
    categoria: "telefonia"
  },
  {
    id: 3,
    titulo: "Monitor Gaming ASUS ROG Swift PG279Q",
    precio: 450000,
    descripcion: "Monitor de gaming de 27 pulgadas con resolución WQHD, tecnología G-SYNC y frecuencia de actualización de 144Hz.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_126709213_4661325_1?wid=1500&hei=1500&qlt=70",
    stock: 5,
    categoria: "gaming"
  },
  {
    id: 4, 
    titulo: "Tablet Apple iPad Pro año (2021)",
    precio: 250000,
    descripcion: "Tablet con pantalla Liquid Retina XDR de 12.9 pulgadas, chip M1 y soporte para Apple Pencil de segunda generación, lo último del mercado.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/16627330_01?wid=1500&hei=1500&qlt=70",
    stock: 20,
    categoria: "tablets"
  },
  {
    id: 5,
    titulo: "Cámara Mirrorless Sony Alpha a7 III modelo 2024",
    precio: 980000,
    descripcion: "Cámara digital sin espejo con sensor de imagen CMOS Exmor R de 24.2 MP, grabación de video 4K y estabilización de imagen de 5 ejes.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_113237325_582965_1?wid=1500&hei=1500&qlt=70",
    stock: 8,
    categoria: "camaras"
  },
  {
    id: 6,
    titulo: "Auriculares Inalámbricos Apple AirPods Pro",
    precio: 150000,
    descripcion: "Auriculares inalámbricos con cancelación activa de ruido, modo de sonido ambiente y resistencia al agua y al sudor, durabilidad por años.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/16957308_2?wid=1500&hei=1500&qlt=70",
    stock: 12,
    categoria: "audio"
  },
  {
    id: 7,
    titulo: "Smartwatch Garmin Fenix 6 Pro modelo 2024",
    precio: 80000,
    descripcion: "Smartwatch multideporte con GPS, monitorización de frecuencia cardíaca y seguimiento de actividad avanzado, lo mejor del mercado.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_123313623_3638547_1?wid=1500&hei=1500&qlt=70",
    stock: 6,
    categoria: "smartwatches"
  },
  {
    id: 8,
    titulo: "Teclado Mecánico Corsair K95 RGB Platinum XT",
    precio: 89990,
    descripcion: "Teclado gaming mecánico con interruptores Cherry MX Speed, retroiluminación RGB y controles multimedia dedicados, lo mejor.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129112712_5467021_1?wid=1500&hei=1500&qlt=70",
    stock: 18,
    categoria: "gaming"
  },
  {
    id: 9,
    titulo: "Impresora 3D Creality Ender 3 V2 año 2024",
    precio: 159000,
    descripcion: "Impresora 3D de sobremesa con volumen de impresión de 220 x 220 x 250 mm, pantalla táctil y función de recuperación de fallos de energía.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_124794917_4105613_1?wid=1500&hei=1500&qlt=70",
    stock: 9,
    categoria: "impresoras"
  },
  {
    id: 10,
    titulo: "Router Wi-Fi TP-Link Archer AX1500 año 2023",
    precio: 50000,
    descripcion: "Router Wi-Fi 6 de doble banda con velocidades de hasta 1148 Mbps en la banda de 2.4 GHz y 4804 Mbps en la banda de 5 GHz.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_127257824_4852471_1?wid=480&hei=480&qlt=70&fmt=webp",
    stock: 14,
    categoria: "routers"
  },
  {
    id: 11,
    titulo: "Tarjeta Gráfica NVIDIA GeForce RTX 4070",
    precio: 839990,
    descripcion: "Tarjeta gráfica de última generación con arquitectura Ampere, 10 GB de memoria GDDR6X y soporte para trazado de rayos en tiempo real.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_122963800_3493748_1?wid=1500&hei=1500&qlt=70",
    stock: 4,
    categoria: "componentes"
  },
  {
    id: 12,
    titulo: "Parlantes Logitech Pc Notebook Usb 2.0 S150",
    precio: 16980,
    descripcion: "Sistema de altavoces 5.1 con sonido envolvente THX, 500 vatios de potencia y múltiples opciones de conexión, lo mejor del mercado.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_110718619_181965_1?wid=1500&hei=1500&qlt=70",
    stock: 7,
    categoria: "audio"
  },
  {
    id: 13,
    titulo: "SSD Samsung 970 EVO Plus 1TB",
    precio: 119990,
    descripcion: "Unidad de estado sólido M.2 NVMe con velocidades de lectura/escritura de hasta 3500/3300 MB/s.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_118178634_2005185_1?wid=1500&hei=1500&qlt=70",
    stock: 11,
    categoria: "almacenamiento"
  },
  {
    id: 14,
    titulo: "Repetidor Dual Band Mesh Deco M4",
    precio: 51800,
    descripcion: "Repetidor de señal Wi-Fi Deco-M4 con tecnología 4x4 MU-MIMO y cuatro antenas externas.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_126152626_4466209_1?wid=1500&hei=1500&qlt=70",
    stock: 13,
    categoria: "redes"
  },
  {
    id: 15,
    titulo: "Micrófono Blue Yeti X modelo 2024",
    precio: 129990,
    descripcion: "Micrófono USB con cuatro cápsulas de condensador, matriz LED y control de mezcla en tiempo real.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_129319583_5553489_1?wid=1500&hei=1500&qlt=70",
    stock: 8,
    categoria: "audio"
  },
  {
    id: 16,
    titulo: "Silla Gaming  Eureka Max año 2024",
    precio: 319990,
    descripcion: "Silla gaming ergonómica con soporte lumbar ajustable, reposabrazos 4D y cuero PU de primera calidad.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_125822623_4339938_1?wid=1500&hei=1500&qlt=70",
    stock: 6,
    categoria: "gaming"
  },
  {
    id: 17,
    titulo: "Monitor Curvo Samsung Odyssey G5 32 Qhd 144hz 1ms Freesync año 2024",
    precio: 274990,
    descripcion: "Monitor gaming curvo de 32 pulgadas con resolución QHD, frecuencia de actualización de 144Hz y tecnología HDR1000, lo mejor del mercado, producto premiado.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_114277972_949743_1?wid=1500&hei=1500&qlt=70",
    stock: 3,
    categoria: "gaming"
  },
  {
    id: 18,
    titulo: "Robot Aspirador iRobot Roomba i7+ modelo 2024",
    precio: 799990,
    descripcion: "Robot aspirador con tecnología de navegación vSLAM, base de autovaciado y compatibilidad con asistentes de voz, lo mejor del mercado al mejor precio, producto premiado.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_126560127_4601945_1?wid=1500&hei=1500&qlt=70",
    stock: 5,
    categoria: "hogar"
  },
  {
    id: 19,
    titulo: "Webcam Logitech C920 HD Pro modelo 2024",
    precio: 83990,
    descripcion: "Cámara web Full HD con enfoque automático, corrección de luz automática y micrófonos duales integrados, lo mejor del mercado, producto premiado y aclamado por la crítica.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_114165274_907134_1?wid=1500&hei=1500&qlt=70",
    stock: 10,
    categoria: "camaras"
  },
  {
    id: 20,
    titulo: "Teclado Razer Huntsman V2 Switch Red Ingles - Crazygames",
    precio:  229900,
    descripcion: "Teclado mecánico con switches óptico-mecánicos, retroiluminación RGB personalizable y reposamuñecas magnético, lo mejor del mercado, premiado por los profesionales.",
    imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_119960209_2540248_1?wid=1500&hei=1500&qlt=70",
    stock: 8,
    categoria: "gaming"
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(productos);
      }, 1200); 
  });
};
