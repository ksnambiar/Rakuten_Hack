
def find_mandi():
	import math
	from random import choice
	import pickle
	import numpy as np 

	with open('market.pkl','rb') as f:
		closest_market = pickle.load(f)

	close_to, item = [],0
	retval_1, retval_2 = 0,0

	for i in range(len(closest_market[0])):
		item = "{} {}".format("Mandi",closest_market[0][i])
		close_to.append(item)

	retval_1 = choice(close_to)

	if retval_1 in close_to:
		close_to.remove(retval_1)

	retval_2 = choice(close_to)
	return retval_1, retval_2

m1, m2 = find_mandi()
print (m1, m2)