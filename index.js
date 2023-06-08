const qrcode = require('qrcode-terminal');
const {Client} = require('whatsapp-web.js');

const client = new Client()

client.on('qr', qr =>{
    qrcode.generate(qr, {small: true});
});

client.on('ready', () =>{
    console.log("Conexión Exitosa :D");
});

client.on('message', message => {
    switch (message.body) {
        case 'Activate':
            client.sendMessage(message.from, '🌯Hola mi nombre es *Sandwichito* 🤖 ¡Bienvenido a la Sanguichería deliciosos sabores! 🌯\n\nSomos una tienda especializada en sandwiches con sabores únicos y deliciosos. Estamos aquí para satisfacer tus antojos y ofrecerte una experiencia culinaria excepcional. 😊\n\nCOMANDOS DISPONIBLES:\n- menu\n- local\n- contacto\n- envios\n- pagos\n- ofertas\n\n¡No dudes en consultarnos cualquier duda o realizar tu pedido! Estamos para servirte. 🥪🥤');
            break;
        case 'menu':
            client.sendMessage(message.from, '🌯 *Menú de sandwiches* 🌯\n\n🥪 *Sandwich de Pollo*: Delicioso sandwich de pollo a la parrilla con lechuga y tomate. \nPrecio: $5\n\n🥪 *Sandwich Vegetariano*: Sabroso sandwich vegetariano con una variedad de vegetales frescos. \nPrecio: $4\n\n🥪 *Sandwich de Jamón y Queso*: Clásico sandwich de jamón y queso con pan recién horneado. \nPrecio: $3.5');
            break;
        case 'local':
            client.sendMessage(message.from, '📍 *Nuestra Ubicación* 📍\n\n🏢 Dirección: Av. Principal 123, Ciudad Sandwich');
            break;
        case 'contacto':
            client.sendMessage(message.from, '📞 *Contacto* 📞\n\n📱 Teléfono: +1234567890\n✉️ Correo electrónico: info@sandwicheria.com\n🌍 Sitio web: www.sandwicheria.com');
            break;
        case 'envios':
            client.sendMessage(message.from, '🚚 *Envíos* 🚚\n\nRealizamos envíos a domicilio dentro de la ciudad sin costo adicional.\nPara envíos a otras ciudades, por favor contáctanos para más información.');
            break;
        case 'pagos':
            client.sendMessage(message.from, '💰 *Métodos de Pago* 💰\n\nAceptamos los siguientes métodos de pago:\n\n💳 Tarjetas de crédito y débito\n📄 Transferencia bancaria\n💵 Pago en efectivo al momento de la entrega');
            break;
        case 'ofertas':
            client.sendMessage(message.from, '🎁 *Ofertas Especiales* 🎁\n\n¡No te pierdas nuestras ofertas especiales!\n\n🍷 Combo de la Semana: 2 botellas de gaseosa Coca Cola + 1 Sandwich de Pollo s/200.\n🍾 Promoción de Temporada: Descuento del 20% en todos nuestros Sandwiches Vegetarianos.\n🥪 Oferta del Día: 2 sandwiches a elección + 2 bebidas por s/30.');
            break;
        default:
            // Mensaje por defecto si no coincide con ninguno de los comandos
            client.sendMessage(message.from, 'Lo siento, no entiendo ese comando. Por favor, usa uno de los comandos disponibles: menu, local, contacto, envios, pagos, ofertas');
            break;
    }
});
client.initialize();