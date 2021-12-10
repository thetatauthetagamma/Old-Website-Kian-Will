import json
from pprint import pprint

lineageFile = open("./lineage.json", 'r')
lineageData = json.load(lineageFile)

userFile = open("./users.json", 'r')
userData = json.load(userFile)

# 

#     userid: {
#         fname:,
#         lname:,
#         roll:,
#         littles: {
#             userid: {
#                 fname:
#                 lname:
#                 roll:
#                 littles
#             }
#         }
#     }

# 

combinedData = {}

def recursiveChildren(bigId, bigDict):
    for pair in lineageData:
        if pair["biguserid"] == bigId:
            littleId = pair["littleuserid"]
            for user in userData:
                if user["userid"] == littleId:
                    newObj = {

                        "userid": user["userid"],
                        "firstname": user["firstname"],
                        "lastname": user["lastname"],
                        "roll": user["roll"],
                        "littles": {}

                    }
                    bigDict["littles"][littleId] = newObj
                    recursiveChildren(littleId, bigDict["littles"][littleId])

# founders
for i in range(1, 9):
    for user in userData:
        if user["roll"] == str(i):
            newObj = {
                "userid": user["userid"],
                "firstname": user["firstname"],
                "lastname": user["lastname"],
                "roll": user["roll"],
                "littles": {}
            }
            combinedData[user["userid"]] = newObj
            recursiveChildren(user["userid"], combinedData[user['userid']])

# pprint(combinedData)

with open('fullLineage.json', 'w') as jsonFile:
    json.dump(combinedData, jsonFile, indent=4)

