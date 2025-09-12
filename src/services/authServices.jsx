import { getApi} from "./api";

export const getMoviesByTitle = async() =>getApi("/titles") ;

