const express = require('express');
const router = express.Router();
const CustomerCtrl = require('./customers');

const ctrl = new CustomerCtrl

/*Page routing*/
	
	router.get('/customer', ctrl.getAllCustomers)
	router.post('/customer', ctrl.addCustomer)
	router.put('/customer/:id', ctrl.updateCustomer)
	router.delete('/customer/:id', ctrl.deleteCustomer)
	

module.exports = router;