import app from "./app";
import { PORT } from "./constants/albumApi.constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
