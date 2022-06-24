# Redis
* Mostly Used as a caching database 
* Is a nosql database
* stores key pair as data
* Works on memory and stores data in storage in every certain time period

## Important redis commands
1. set value
```redis
SET name "Armaan"
```
2. set multiple values  
```
MSET name "Armaan" age 17
```
3. Get value
```
GET name
```
4. Get multiple values
```
MGET name age
```
5. Increase any value by a certain amount
```
INCRBY age 1
```
6. Decrease any value by a certain amount
```
DCRBY age 1
```
7. Set a value to expire after certain amount of seconds
```
EXPIRE name 10
```

## Datatypes available
1. **Hashmaps**  
Stores string key and string value pair ```user: {"name": "Armaan", "age": "17"}```

   * Set a hashmap
		```
		HSET user id 1 name "Armaan" age 17
		```
		firstly we define the Hashmap name which in this case is user and then specify key value pair ```HSET <MAP-NAME> [<KEY> <VALUE>...]```
   * Get a hashmap  
		we can not get a hashmap in a usual way it's kinda weird but basically 
		```
		HGET user id
		```
		You can get a specific field and it's value from a hashmap or if you want all of the values you can do something like
		```
		HGETALL user
		```
2. **Lists**  
It's a binary Linked list and you can use to push from head and from tail both
	* Push from head
		```
		LPUSH ourlist 1
		```
	* Push from tail
		```
		RPUSH ourlist 2	
		```
	* Get values from list  
		To get values from a list you have to specify a range from x to y		
		```
		LRANGE ourlist 0 1
		```
	* Delete values from a list  
		To delete a value from the tail of the list  
			```
			RPOP ourlist
			```
		To delete a value from the head of the list  
			```
			LPOP ourlist
			```
		

