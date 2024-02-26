const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path')
const cors = require('cors')

app.use("/uploads", express.static(path.join(__dirname, "./src/img")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);

const apiRoutes = require('./src/routes/apiRoutes');

app.use('/api', apiRoutes);

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto http://localhost:3030');
});