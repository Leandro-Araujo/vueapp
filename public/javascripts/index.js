Vue.use(VueResource);

//Vue.http.options.root = '/api';

// Define some components

var Foo = Vue.extend({
    template: '<ul class="list-group">'+
              '<li v-for="usuario in usuarios" class="list-group-item"><span class="badge">{{usuario.idade}}</span>{{usuario.nome}}</li>'+
              '<ul>', 
    data: function() {
        return {
        	usuarios: [],
            firstName: 'true'
        }
    },
    route: {
		data: function() {
			return this.$http.get('/api/user').then(function(success){
				// Retorna um objeto que será mesclado com o objeto data do componente
				return { usuarios: success.data.data };
			});
		}
	}
})

var Bar = Vue.extend({
    template: '<div class="panel panel-default">'+
              '<div class="panel-heading">Panel heading without title</div>'+
              '<div class="panel-body">'+
              'Panel content'+
              '</div>'+
              '</div>'+
              '<div class="panel panel-default">'+
              '<div class="panel-heading">'+
              '<h3 class="panel-title">Panel title</h3>'+
              '</div>'+
              '<div class="panel-body">'+
              'Panel content'+
              '</div>'+
              '</div>'
})

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
// !! Note that the App is not a Vue instance.
var App = Vue.extend({
    data: function() {
        return {
            menuhome: 'false',
            menupts: 'false',
            menuposts: 'false'
        }
    }
})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
	history: true
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/users': {
        component: Foo
    },
    '/posts': {
        component: Bar
    }
})

router.start(App, '#app');
