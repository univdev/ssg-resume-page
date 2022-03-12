import { writable } from 'svelte/store';

const document = writable({
  isTop: true,
  scrollTop: 0,
});

export default document;
