import prod from "./prod.js";
import dev from "./dev.js";

const getKey = function() {
    if (process.env.NODE_ENV === "production") {
        return prod;
    } else {
        return dev;
    }
}

export default getKey();