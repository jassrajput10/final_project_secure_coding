import app from "./app";

import { Server } from "http";

//initialize PORT as either string from the .env or 3000 by default
const PORT: string | 3000 = process.env.PORT || 3000;

// initializing the server for the express application to listen for requests on the port
const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server;