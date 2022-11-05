// hashmap implementation
// supports key collisions
class HashMap {

	#storage = [];
	#storageLimit = 400;

	add(key, value) {
		const index = this.#calculateHash(key);
		const bucket = this.#storage[index];

		if (!bucket) {
			this.#storage[index] = [
				[key, value],
			];
			return;
		}

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket[i][1] = value;
				return;
			}
		}

		bucket.push([key, value]);
	}

	remove(key) {
		const index = this.#calculateHash(key);
		let bucket = this.#storage[index];

		if (bucket) {
			this.#storage[index] = bucket.filter(([k, v]) => k !== key);
		}
	}

	get(key) {
		const index = this.#calculateHash(key);
		const bucket = this.#storage[index];
		if (!bucket) {
			return null;
		}

		const mapping = bucket.find(([k, v]) => k === key);
		return !mapping ? null : mapping[1];
	}

	#calculateHash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.#storageLimit;
	}
}

export default HashMap;
