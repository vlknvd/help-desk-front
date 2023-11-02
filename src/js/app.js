import HelpDesk from './helpDesk';

const root = document.getElementById('root');
const url = 'http://localhost:3000/';

const app = new HelpDesk(root, url);

app.init();
