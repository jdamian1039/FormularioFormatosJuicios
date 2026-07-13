const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Sirve los archivos estáticos de la carpeta actual
app.use(express.static(__dirname));

// Envía todas las peticiones al index.html para que Angular maneje las rutas
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Angular corriendo en puerto ${PORT}`);
});