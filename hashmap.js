// structure to implement HashMap
// should have some properties e.g. to keep mapping between key hashes and values
// should support key collisions
class HashMap {

	// add function takes two parameters:
	//  * key: type string
	//	* value type any
	// returns nothing
	// adds new data to the map, should support key collisions
	add(key, value) {}

	// remove function takes one parameter:
	//  * key: type string
	// returns nothing
	// removes key from the mapping
	remove(key) {}

	// get function takes one parameter:
	//  * key: type string
	// returns value associated with the key
	get(key) {}

	// calculateHash is a private function used to calculate key hash
	//  * key: type string
	// returns integer - id of the key
	#calculateHash(key) {}
}

export default HashMap;
