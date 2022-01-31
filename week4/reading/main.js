const form = document.forms[0];
//same as
//const form = document.getElementsByTagname('form')[0];
//we can also use
//const form = document.forms.search;

//Form Events
const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('change', () => alert('changed'), false);