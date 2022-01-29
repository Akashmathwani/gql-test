import { rootTypes } from "./types/root.js";
import { userTypes } from "./types/user.js";
import { carTypes } from "./types/car.js";
import { petTypes } from "./types/pet.js";

const combinedTypeDefs = [rootTypes, userTypes, carTypes, petTypes];
export default combinedTypeDefs;
