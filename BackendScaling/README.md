# Backend Optimization and scaling
**1. Gzip**  
So basically whenever we send files over the internet it ofcourse have some size and that size matters a lot, if 
the files you are sending over the net is too big the latency will be too high so to fix this.
We use different types of compression algorithms, and one of the most widely used is 
GZIP. Most of the modern browsers already knows how to extract gzip files and thus we 
should use it for most of our responses (it compresses most of the files you send as a response)  
***Implementation in node:***
```javascript
import compression from "compression";
app.use(compression())
```
*Note: New kids use brotli by google nowadays it's like 20% faster than gzip but it isn't widely supported in browsers so yeah keep this in mind*

___
**2. Database Indexing**  
if you specify any field as an index in a database, it will make sure that whenever you ask for data, using that field. It will uses a Binary tree like strucutre to query data
for example if you specify the field `age` as an index it will make a binary tree like structure in the storage which can then later be used to binary search the data asked in the query it makes querying data blazingly fast 

***Implementation in node and mongoose:***  
```javascript
const user = mongoose.Schema({
	name: { type: String, required: true },
	age: {  type: Number, required: true, index: true }
})
```
It can be used in any different data structure But we must not overuse it because 
it may increase the query speed but will decrease the insertion speed so only 
use it in specific field


