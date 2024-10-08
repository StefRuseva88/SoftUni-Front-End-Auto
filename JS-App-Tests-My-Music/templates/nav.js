import { html } from '../node_modules/lit-html/lit-html.js';
import { userInfo } from '../util/userInfo.js';

export function getNavTemplate() {
    return html`
            <nav>
                <img src="../images/headphones.png">
                <a href="/">Home</a>
                <ul>
                    <!--All user-->
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/search">Search</a></li>

                    ${userInfo.getUserObj()
                        ? html`
                            <li><a href="/create">Create Album</a></li>
                            <li><a href="/logout">Logout</a></li>`
                        : html`
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>`}
                    
                </ul>
            </nav>`;
}