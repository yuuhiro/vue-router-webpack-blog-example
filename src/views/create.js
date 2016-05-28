import template from './create.jade'
import createForm from '../components/createForm.js'

export default {
  template: template(),
	components: {
		'my-create-form': createForm
	}
}