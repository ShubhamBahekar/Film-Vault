import { getApi} from "../../config/api";
export const getMoviesByTitle = async() =>getApi("/titles") ;