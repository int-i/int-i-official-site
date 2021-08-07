import prod from "./prod";
import dev from "./dev";

const GetKey = function() {
    if (process.env.NODE_ENV === "production") {
        return prod;
    } else {
        return dev;
    }
}

export default GetKey();