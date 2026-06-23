import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { DragonBall } from './pages/dragon-ball/dragon-ball';
import { Heroes } from './pages/heroes/heroes';
import { DragonBallSuper } from './pages/dragon-ball-super/dragon-ball-super';

export const routes: Routes = [


  {
    path: 'counter',
    component: Counter
  },

  {
    path: 'dragonball',
    component: DragonBall
  },

  {
    path: 'dragonballsuper',
    component: DragonBallSuper
  },


  {

    path: 'heroes',
    component: Heroes
  },

  {
    path: '**',
    redirectTo: ''
  }


];
