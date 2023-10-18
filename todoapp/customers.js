class Customers {
	getAllCustomers (req, res, next){
	  var user = req.body
	  Auth.createUser(user, (error, user)=>{
			if(error){
				res.status(404).json(error);
			}
			else{
				if(user){
					req.session.user = user._id
					res.status(200).render('become-freelancer',{name:'santosh'});
				}
				else{
					res.status(404).json('User cannot be created')
				}
			}
		})
	}

	addCustomer (req, res, next) {
	  var user = req.body
	  Auth.createUser(user, function(error, user){
			if(error){
				res.status(404).json(error);
			}
			else{
				if(user){
					req.session.user = user._id
					res.status(200).render('become-freelancer',{name:'santosh'});
				}
				else{
					res.status(404).json('User cannot be created')
				}
			}
		})
	}

	updateCustomer (req, res, next) {
	  var user = req.body
	  Auth.createUser(user, function(error, user){
			if(error){
				res.status(404).json(error);
			}
			else{
				if(user){
					req.session.user = user._id
					res.status(200).render('become-freelancer',{name:'santosh'});
				}
				else{
					res.status(404).json('User cannot be created')
				}
			}
		})
	}

	deleteCustomer (req, res, next) {
	  var user = req.body
	  Auth.createUser(user, function(error, user){
			if(error){
				res.status(404).json(error);
			}
			else{
				if(user){
					req.session.user = user._id
					res.status(200).render('become-freelancer',{name:'santosh'});
				}
				else{
					res.status(404).json('User cannot be created')
				}
			}
		})
	}
}

module.exports = Customers
