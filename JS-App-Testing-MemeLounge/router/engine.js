import page from '../node_modules/page/page.mjs';
import {viewHandler} from './viewHandler.js';

function start(){

    page(viewHandler.navView);

    page('/', viewHandler.homeView);
    page('/catalog', viewHandler.itemsView);
    page('/login', viewHandler.loginView);
    page('/register', viewHandler.registerView);
    page('/logout', viewHandler.logoutView);
    page('/details/:id', viewHandler.detailsView);
    page('/create', viewHandler.createView);
    page('/edit/:id', viewHandler.editView);
    page('/myprofile', viewHandler.profileView);
    // page('/delete/:id', viewHandler.deleteView)

    page.start();
}

export const engine = {
    start
}