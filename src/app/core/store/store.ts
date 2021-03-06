import { provideStore, compose, combineReducers } from '@ngrx/store';
// reducers
import {videos} from './youtube-videos';
import {player} from './youtube-player';
import {nowPlaylist} from './now-playlist';
import {user} from './user-manager';
import {search} from './player-search';
import { localStorageSync } from './ngrx-store-localstorage';

// Echoes State
let echoes = {
  videos: [],
  player: {}
};
export const store = provideStore(
  compose(
    localStorageSync(['videos', 'player', 'nowPlaylist', 'search'], true),
    combineReducers
  )({ videos, player, nowPlaylist, user, search })
);