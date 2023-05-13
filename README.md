for some reason my /pokemon/:id route won't work and i keep getting this error and i dont know why;

CastError: Cast to ObjectId failed for value "undefined" (type string) at path "_id" for model "Pokemon"
    at ObjectId.cast (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/schema/objectid.js:248:11)
    at SchemaType.applySetters (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/schematype.js:1202:12)
    at SchemaType.castForQuery (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/schematype.js:1614:15)
    at cast (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/cast.js:348:32)
    at Query.cast (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:4819:12)
    at Query._castConditions (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:2193:10)
    at model.Query._findOne (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:2477:8)
    at model.Query.exec (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:4349:28)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/server.js:63:29 {
  stringValue: '"undefined"',
  messageFormat: undefined,
  kind: 'ObjectId',
  value: 'undefined',
  path: '_id',
  reason: BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
      at new ObjectId (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/bson/lib/bson.cjs:2006:23)
      at castObjectId (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/cast/objectid.js:25:12)
      at ObjectId.cast (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/schema/objectid.js:246:12)
      at SchemaType.applySetters (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/schematype.js:1202:12)
      at SchemaType.castForQuery (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/schematype.js:1614:15)
      at cast (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/cast.js:348:32)
      at Query.cast (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:4819:12)
      at Query._castConditions (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:2193:10)
      at model.Query._findOne (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:2477:8)
      at model.Query.exec (/Users/amarimathis/Desktop/Perscholas-folder/backend-start-week/poke-express/node_modules/mongoose/lib/query.js:4349:28),
  valueType: 'string',
  model: Model { Pokemon }
}
any help would be greatly apreciated