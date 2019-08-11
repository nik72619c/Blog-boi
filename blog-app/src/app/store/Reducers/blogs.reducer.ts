import { IBlog } from './../../interfaces/IBlog';
import {Action} from '@ngrx/store';

interface Appstate {
    blogs: IBlog[];
}

export function blogReducer (state: Appstate, action: Action){

}