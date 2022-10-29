// State Management
sessionStorage.setItem('numberOfGames', 0);
sessionStorage.setItem('currentState', 'undefined');
sessionStorage.setItem('openedDoor', 'undefined');

sessionStorage.setItem('doorChangedTotal', 0);
sessionStorage.setItem('doorChangedSuccess', 0);
sessionStorage.setItem('doorChangedUnsuccess', 0);
sessionStorage.setItem('doorNotChangedTotal', 0);
sessionStorage.setItem('doorNotChangedSuccess', 0);
sessionStorage.setItem('doorNotChangedUnsuccess', 0);

import { load } from "./load.js";

load();