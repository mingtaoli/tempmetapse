using Mongoc
client = Mongoc.Client("mongodb://metapse:dlgcdxlgjzdsys@localhost:27017")
Mongoc.ping(client)

database = client["metapse"]
collection = database["UnitDefinitions"]
collect(collection)
docs = [
    Mongoc.BSON("""{ "cust_id" : "A123", "amount" : 500, "status" : "A" }"""),
    Mongoc.BSON("""{ "cust_id" : "A123", "amount" : 250, "status" : "A" }"""),
    Mongoc.BSON("""{ "cust_id" : "B212", "amount" : 200, "status" : "A" }"""),
    Mongoc.BSON("""{ "cust_id" : "A123", "amount" : 300, "status" : "D" }""")
]

vec_of_bsons = Mongoc.read_bson_from_json("./juliaapi/UnitDefinitions.json")
append!(collection, vec_of_bsons)