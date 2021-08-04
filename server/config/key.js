import prod from "./prod";
import dev from "./dev" ;

if (process.env.NODE_ENV === 'production') {
    module.exports = prod
} else {
    module.exports = dev
}