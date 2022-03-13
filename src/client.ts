import * as sapper from '@sapper/app';
import 'plugins/firebase';

sapper.start({
	target: document.querySelector('#sapper')
});