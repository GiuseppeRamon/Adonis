'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
Route.get('/tasks', 'taskController.index')
Route.post('/add', 'taskController.store')
Route.on('/add').render('add')
Route.get('/tasks/:id', 'TaskController.detail')
Route.get('/destroy/:id', 'TaskController.destroy')
Route.get('/login', 'taskController.login')

