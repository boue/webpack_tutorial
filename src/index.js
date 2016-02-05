// import $ from 'jquery';
// import Button from './Components/Button';

if (document.querySelectorAll('a').length) {
  require.ensure([], () => {
    const Button = require('./Components/Button');
    const button = new Button('google.com');

    button.render('a');
  }, 'button');
}